const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const validateIP = require('./middlewares/ipValidator');
const connect = require("./configs/db")
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3002;



app.use(bodyParser.json());


app.use(validateIP);

app.use('/users', userRoutes);
app.use('/auth', authRoutes);


app.listen(port, async () => {
  try {
    await connect()
  } catch (error) {
    console.error(error.message)
  }
  console.log(`Server is running on port ${port}`)
})