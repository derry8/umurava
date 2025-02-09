const Challenge = require('../models/ChallengeModel');

// Create a new challenge
const createChallenge = async (req, res) => {
  const { challenge_name, skills_needed, seniority_level, duration, deadline, status, money_prize, contact_email, project_description, project_brief, project_requirements, challenge_category, deliverables } = req.body;

  try {
    // Create a new challenge object
    const challenge = new Challenge({
      challenge_name,
      skills_needed,
      seniority_level,
      duration,
      deadline,
      status,
      money_prize,
      contact_email,
      project_description,
      project_brief,
      project_requirements,
      challenge_category,
      deliverables
    });

    // Save the challenge to the database
    await challenge.save();

    res.status(201).json({
      success: true,
      message: 'Challenge created successfully!',
      challenge
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to create challenge.',
      error: error.message
    });
  }
};

// Get all challenges
const getAllChallenges = async (req, res) => {
  try {
    // Find all challenges in the database
    const challenges = await Challenge.find();

    // If no challenges are found, return a message
    if (challenges.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No challenges found.',
      });
    }

    // Return the challenges if found
    res.status(200).json({
      success: true,
      message: 'Challenges fetched successfully!',
      challenges,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch challenges.',
      error: error.message,
    });
  }
};

// Get a challenge by ID
const getChallengeById = async (req, res) => {
  const { id } = req.params;

  try {
    // Find challenge by ID
    const challenge = await Challenge.findById(id);

    if (!challenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Challenge fetched successfully!',
      challenge,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch challenge.',
      error: error.message,
    });
  }
};

// Update an existing challenge
const updateChallenge = async (req, res) => {
  const { id } = req.params; // Get the challenge ID from the URL
  const updateData = req.body; // Get the data to update from the request body

  try {
    // Find the challenge by ID and update it with the new data
    const updatedChallenge = await Challenge.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    // If challenge is not found, return an error
    if (!updatedChallenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Challenge updated successfully!',
      challenge: updatedChallenge,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to update challenge.',
      error: error.message,
    });
  }
};

const deleteChallenge = async (req, res) => {
  const { id } = req.params; // Get the challenge ID from the URL

  try {
    // Find the challenge by ID and delete it
    const deletedChallenge = await Challenge.findByIdAndDelete(id);

    // If challenge is not found, return an error
    if (!deletedChallenge) {
      return res.status(404).json({
        success: false,
        message: 'Challenge not found.',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Challenge deleted successfully!',
      challenge: deletedChallenge,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete challenge.',
      error: error.message,
    });
  }
};

module.exports = {
  createChallenge,
  getAllChallenges,
  getChallengeById,
  updateChallenge,
  deleteChallenge
};
