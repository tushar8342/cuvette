const mongoose = require("mongoose")
require('dotenv').config();

const databaseURI = process.env.MONGODB_URI;

const connect = () => {
    return mongoose.connect(databaseURI)
}
module.exports = connect

