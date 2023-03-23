// require('./config/db');
// const express=require('express');
// const bodyparser=require('body-parser');
// const cookieParser=require('cookie-parser');
// const bcrypt = require('bcrypt');
// const UserRouter= require('./apis/user');

// const app=express();
// app.use(express.json());
// // app use
// app.use(bodyparser.urlencoded({extended : false}));
// app.use(bodyparser.json());
// app.use(cookieParser());

// // app.get('/',function(req,res){
// //     res.status(200).send(`Welcome to login , sign-up api`);
// // });

// app.use('/user', UserRouter)

// // listening port
// const PORT=process.env.PORT||3000;
// app.listen(PORT,()=>{
//     console.log(`app is live at ${PORT}`);
// });

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


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

const routes = require('./apis/user');
app.use('/user', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})