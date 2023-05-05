
const express = require('express');
const app = express();
const Route=require('routes');
const user=require('./routes/routes');
const mongoose = require('mongoose');
const CORS=require("cors")
// const bodyParcer=require('body-parser');
app.use(express.urlencoded({extended:false}));
app.use(express.json());
require('dotenv').config();

//to connect to mongodb
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  //to catch error
  .catch((error) => {
    console.log('Something went wrong: ' + error);
  });

  //this to orient the program to routes;
app.use(CORS());
app.use('/sign',user);
app.listen(5500, (error) => {
  if (error) throw error;
  console.log('Server is running');

});
