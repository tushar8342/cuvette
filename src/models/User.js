const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  phoneNumber: String,
  otpHash: String,
});

module.exports = mongoose.model('User', userSchema);
