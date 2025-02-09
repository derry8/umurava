
const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    challenge_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
    submitted_time: { type: Date, default: Date.now },
    score: { type: Number, default: null },
  },
  { timestamps: true }
);

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
