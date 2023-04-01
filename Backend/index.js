require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const mongoData = process.env.DATABASE_URL;
console.log(mongoData)
mongoose.connect(mongoData)
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})


database.once('connected', () => {
    console.log('Database Connected');
})



const app = express();

app.use(express.json());
app.use(cors());


const routes = require('./apis/user');
app.use('/user', routes)


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3003');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
app.listen(3005, () => {
    console.log(`Server Started at ${3005}`)
})