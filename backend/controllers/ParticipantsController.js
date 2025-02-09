// controllers/participantController.js
const Participant = require('../models/Participant');
const User = require('../models/UserModel');
const Challenge = require('../models/ChallengeModel');

// Add user as participant to a challenge
const addParticipant = async (req, res) => {
  const { user_id, challenge_id } = req.body;

  try {
    const user = await User.findById(user_id);
    const challenge = await Challenge.findById(challenge_id);

    if (!user) return res.status(404).json({ error: 'User not found' });
    if (!challenge) return res.status(404).json({ error: 'Challenge not found' });

    const participant = new Participant({
      user_id,
      challenge_id,
    });

    await participant.save();

    res.status(201).json({ message: 'User added as participant', participant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get participants for a specific challenge
const getParticipants = async (req, res) => {
  const { challenge_id } = req.params;

  try {
    const participants = await Participant.find({ challenge_id })
      .populate('user_id', 'firstname lastname profile_picture profession email location bio')
      .exec();

    res.status(200).json(participants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get total participants for a specific challenge
const getTotalParticipants = async (req, res) => {
  const { challenge_id } = req.params;

  try {
    const totalParticipants = await Participant.countDocuments({ challenge_id });

    res.status(200).json({ totalParticipants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={
    addParticipant,
    getParticipants,
    getTotalParticipants,
}