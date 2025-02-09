const express = require('express');
const router = express.Router();
const { createUser,getAllUsers,getUserById,login } = require('../controllers/UserController');

// POST route to create a user
router.post('/user/signup', createUser);

// GET route to fetch all users
router.get('/users', getAllUsers);

// GET route to fetch a user by ID
router.get('/user/:id', getUserById);

// POST route for login
router.post('/login', login);

module.exports = router;
