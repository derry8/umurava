
const express = require('express');
const router = express.Router();
const participantController = require('../controllers/ParticipantsController');

// Route to add user as participant to a challenge
router.post('challenge/add-participant', participantController.addParticipant);

// Route to get participants for a specific challenge
router.get('/challenge/participants/:challenge_id/', participantController.getParticipants);

// Route to get total participants for a specific challenge
router.get('/challenge/total-participants/:challenge_id/', participantController.getTotalParticipants);

module.exports = router;
