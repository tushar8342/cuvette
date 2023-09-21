const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/validate-otp', authController.validateOTP);

module.exports = router;
