# cuvette

User Registration System with OTP Verification
This Node.js application implements a user registration system that validates the user's IP address, sends an OTP to the user's phone number using Twilio, validates the OTP entered by the user, and registers the user in a MongoDB database. Follow the steps below to set up and run the application.

Prerequisites
Before running the application, make sure you have the following prerequisites installed:

Node.js: You can download and install Node.js from nodejs.org.

MongoDB: Install and configure MongoDB on your system. You can download it from mongodb.com.

Twilio Account: Create a Twilio account and set up your API credentials. You will need your Twilio Account SID, Auth Token, and a Twilio phone number to send OTPs via SMS.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tushar8342/cuvette



2.Change to the project directory:
    ```bash
    cd user-registration-otp

Install the project dependencies:

    ```bash
    npm install

Create a .env file in the project root directory and add your environment variables:

env

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/your-database-name

# Twilio API credentials
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number
Running the Application
Start your MongoDB server:

bash
Copy code
# Example for Linux
sudo service mongod start

# Example for Windows (run in command prompt as administrator)
mongod
Start the Node.js server:

bash
Copy code
npm start
The server will run on port 3000 by default. You can access the application at http://localhost:3000 in your web browser.

Usage
Visit http://localhost:3000 in your web browser.

Register a new user by providing your IP address, phone number, and a valid country code.

An OTP will be sent to your phone number via Twilio SMS.

Enter the OTP received on your phone in the provided field and submit the form.

If the OTP is valid, you will be registered as a user in the MongoDB database.

Dependencies
This application uses the following Node.js modules:

express: A web application framework for handling HTTP requests.
mongoose: An ODM (Object-Document Mapping) library for MongoDB.
ipinfo: A module for retrieving information about an IP address.
twilio: A module for sending and receiving SMS messages using the Twilio API.
bcrypt: A module for hashing and comparing passwords.