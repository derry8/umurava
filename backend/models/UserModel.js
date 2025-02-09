const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    profile_picture: { type: String, required: true },
    user_type: { type: String, required: true },
    profession: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    bio: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// No need for password hashing in the model anymore
const User = mongoose.model('User', userSchema);

module.exports = User;
