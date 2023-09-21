const twilio = require('twilio');
require('dotenv').config();

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
console.log(TWILIO_ACCOUNT_SID)
const twilioClient = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function sendOTPviaTwilio(phoneNumber, otp) {
  try {
    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      to: phoneNumber,
      from: 'your_twilio_phone_number',
    });
  } catch (error) {
    console.error('Twilio error:', error);
    throw new Error('Failed to send OTP');
  }
}

module.exports = sendOTPviaTwilio;
