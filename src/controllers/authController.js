const User = require('../models/User');
const { compareOTP } = require('../services/bcryptService');

exports.validateOTP = async (req, res) => {
  const { phoneNumber, enteredOtp, username, password } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isOtpValid = await compareOTP(enteredOtp, user.otpHash);

    if (isOtpValid) {
      const newUser = new User({
        username,
        password,
        phoneNumber,
      });

      await newUser.save();
      res.json({ message: 'User registered successfully' });
    } else {
      res.status(401).json({ error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Validation error:', error);
    res.status(500).json({ error: 'Failed to validate OTP' });
  }
};
