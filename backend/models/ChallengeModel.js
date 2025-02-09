const mongoose = require('mongoose');

// Create a new Schema for challenges
const challengeSchema = new mongoose.Schema(
  {
    challenge_name: {
      type: String,
      required: true
    },
    skills_needed: {
      type: [String],
      required: true
    },
    seniority_level: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    deadline: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      set: (value) => {
        // Ensure the status is in lowercase and remove "challenge" at the end
        return value.toLowerCase().replace(/\s+challenge$/, '');
      }
    },
    money_prize: {
      type: Number,
      required: true
    },
    contact_email: {
      type: String,
      required: true
    },
    project_description: {
      type: String,
      required: true
    },
    project_brief: {
      type: String,
      required: true
    },
    project_requirements: {
      type: String,
      required: true
    },
    challenge_category: {
      type: String,
      required: true
    },
    deliverables: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Challenge', challengeSchema);
