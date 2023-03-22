const express=require('express');
const { Result } = require('express-validator');
const router = express.Router();

//mongoDB user model import
const user = require('./../models/user');

//Hashing using bcrypt
const bcrypt = require('bcrypt');
const name = undefined;
const email = undefined;
const password = undefined;

//Signup
router.post('/signup',(req,res) =>{
    let {name,email,password} = req.body;
    // name = name.trim();
    // email = email.trim();
    // password = password.trim();
    name = name || '';
    email = email || '';
    password = password || '';

    if(name == "" || email == "" || password == ""){
        res.json({
            status: "Failed",
            message: "Empty Input Field"
        });
     } else if(!/^[a-zA-Z ]*$/.test(name)){
            req.json({
                status: "Failed",
            message: "Invalid Name"
            })
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            req.json({
                status: "Failed",
            message: "Invalid Email"
            })
    }
    else if(password.length < 8){
        req.json({
            status: "Failed",
        message: "Password too short"
        })
    }
    else{
            user.find({email}).then(result => {
                if(result.length) {
                    res.json({
                        status: "Failed",
                        message: "User exists"
                    })
                }
                else{
                    const saltRounds = 10;
                    bcrypt.hash(password, saltRounds).then(hashedPassword =>{
                        const newUser = new user({
                            name,
                            email,
                            password : hashedPassword
                        });
                        newUser.save().then(result=>{
                            res.json({
                                status: "Success",
                                message: "Signup Successful",
                                data: result,
                            })
                        })
                    }).catch(err =>{
                        res.json({
                            status: "Failed",
                            message : "Error"
                        })
                    })

                }
            }).catch(err => {
                console.log(err);
                req.json({
                    status: "Failed",
                    message: "An error occured while checking new user"
                })
            })
    }
})

//SignIn
router.post('/signin',(req,res) =>{
    // let {name,email,password} = req.body;
    let {email,password} = req.body;
    // name = name.trim();
    email = email.trim();
    password = password.trim();

    if(email == "" || password == ""){
        res.json({
            status: "Failed",
            message: "Empty Credentials"
        })
    }
    else{
        user.find({email})
        .then(data => {
            if(data){
                const hashedPassword = data[0].password;
                bcrypt.compare(password,hashedPassword).then(result =>{
                    if(result){
                    res.json({
                        status: "Success",
                        message: "Sign In Successful!",
                        data: data
                    })
                }
                else{
                    res.json({
                        status: "Failed",
                        message: "Invalid Password"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: "Failed",
                    message : "error occured"
                })
            })
        } else{
            res.json({
                status: "Failed",
                message: "Invalid credentials entered"
            })
        }
    }).catch(err =>{
        res.json({
            status: "Failed",
            message: "error occured"
        })
    })
}
})

module.exports = router;