const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function compareOTP(enteredOtp, hashedOtp) {
  return bcrypt.compare(enteredOtp, hashedOtp);
}

module.exports = { hashPassword, compareOTP };
