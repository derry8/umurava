const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { validationResult } = require('express-validator');

const createUser = async (req, res) => {
  const { firstname, lastname, profile_picture, user_type, profession, email, location, bio, password } = req.body;

  // Check if there are validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Validate the email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Check password strength
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user (password is now hashed before saving)
    const newUser = new User({
      firstname,
      lastname,
      profile_picture,
      user_type,
      profession,
      email,
      location,
      bio,
      password: hashedPassword,  // Save the hashed password
    });

    // Save user to the database
    await newUser.save();

    // Generate JWT token for the user
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send success response
    return res.status(201).json({
      message: 'User created successfully',
      user: newUser,
      token,
    });
  } catch (error) {
    // Return error response
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();  // Fetch all users from the database
      return res.status(200).json({ message: 'Users fetched successfully', users });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const getUserById = async (req, res) => {
    const { id } = req.params;  // Get the ID from the route params
  
    try {
      const user = await User.findById(id);  // Fetch user by ID from the database
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User fetched successfully', user });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  const login = async (req, res) => {
    const { email, password } = req.body;
  
    // Validate the email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
  
    // Check if there are validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the given password with the stored hashed password
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Incorrect password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Send the response with user details and JWT token
      return res.status(200).json({
        message: 'Login successful',
        user: {
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          profile_picture: user.profile_picture,
          user_type: user.user_type,
          profession: user.profession,
          location: user.location,
          bio: user.bio,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  login,
};
