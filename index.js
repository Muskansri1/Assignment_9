require('./config/db');
const express=require('express');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const bcrypt = require('bcrypt');
const UserRouter= require('./apis/user');

const app=express();
// app use
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());

// app.get('/',function(req,res){
//     res.status(200).send(`Welcome to login , sign-up api`);
// });

app.use('/user', UserRouter)

// listening port
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});