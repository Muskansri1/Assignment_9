// const express=require('express');
// const { Result } = require('express-validator');
// const router = express.Router();
// const { passwordStrength } = require("check-password-strength");

// //mongoDB user model import
// const user = require('./../models/user');

// //Hashing using bcrypt
// const bcrypt = require('bcrypt');
// // const name = undefined;
// // const email = undefined;
// // const password = undefined;

// // //Signup
// // router.post('/signup',(req,res) =>{
// //     let {name,email,password} = req.body;
// //     // name = name.trim();
// //     // email = email.trim();
// //     // password = password.trim();
// //     name = name || '';
// //     email = email || '';
// //     password = password || '';

// //     if(name == "" || email == "" || password == ""){
// //         res.json({
// //             status: "Failed",
// //             message: "Empty Input Field"
// //         });
// //      } else if(!/^[a-zA-Z ]*$/.test(name)){
// //             req.json({
// //                 status: "Failed",
// //             message: "Invalid Name"
// //             })
// //         }
// //         else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
// //             req.json({
// //                 status: "Failed",
// //             message: "Invalid Email"
// //             })
// //     }
// //     else if(password.length < 8){
// //         req.json({
// //             status: "Failed",
// //         message: "Password too short"
// //         })
// //     }
// //     else{
// //             user.find({email}).then(result => {
// //                 if(result.length) {
// //                     res.json({
// //                         status: "Failed",
// //                         message: "User exists"
// //                     })
// //                 }
// //                 else{
// //                     const saltRounds = 10;
// //                     bcrypt.hash(password, saltRounds).then(hashedPassword =>{
// //                         const newUser = new user({
// //                             name,
// //                             email,
// //                             password : hashedPassword
// //                         });
// //                         newUser.save().then(result=>{
// //                             res.json({
// //                                 status: "Success",
// //                                 message: "Signup Successful",
// //                                 data: result,
// //                             })
// //                         })
// //                     }).catch(err =>{
// //                         res.json({
// //                             status: "Failed",
// //                             message : "Error"
// //                         })
// //                     })

// //                 }
// //             }).catch(err => {
// //                 console.log(err);
// //                 req.json({
// //                     status: "Failed",
// //                     message: "An error occured while checking new user"
// //                 })
// //             })
// //     }
// // })

// // //SignIn
// // router.post('/signin',(req,res) =>{
// //     // let {name,email,password} = req.body;
// //     let {email,password} = req.body;
// //     // name = name.trim();
// //     email = email.trim();
// //     password = password.trim();

// //     if(email == "" || password == ""){
// //         res.json({
// //             status: "Failed",
// //             message: "Empty Credentials"
// //         })
// //     }
// //     else{
// //         user.find({email})
// //         .then(data => {
// //             if(data){
// //                 const hashedPassword = data[0].password;
// //                 bcrypt.compare(password,hashedPassword).then(result =>{
// //                     if(result){
// //                     res.json({
// //                         status: "Success",
// //                         message: "Sign In Successful!",
// //                         data: data
// //                     })
// //                 }
// //                 else{
// //                     res.json({
// //                         status: "Failed",
// //                         message: "Invalid Password"
// //                     })
// //                 }
// //             })
// //             .catch(err => {
// //                 res.json({
// //                     status: "Failed",
// //                     message : "error occured"
// //                 })
// //             })
// //         } else{
// //             res.json({
// //                 status: "Failed",
// //                 message: "Invalid credentials entered"
// //             })
// //         }
// //     }).catch(err =>{
// //         res.json({
// //             status: "Failed",
// //             message: "error occured"
// //         })
// //     })
// // }
// // })

// //Post Method
// router.post('/create', async (req, res) => {

//     // Validate request
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Body content can not be empty",
//     });
//   }

//   let userr = await user.findOne({ email: req.body.email });
//   if (userr) {
//     return res.status(400).send({
//       message: "Duplicate User",
//     });
//   }

//     const emailRegexp =
//     /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

//     const fullnameRegexp =
//     /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

//     if (!fullnameRegexp.test(req.body.name)) {
//         return res.status(400).send({
//           message: "Please enter valid full name!",
//         });
//       }


//   if (!emailRegexp.test(req.body.email)) {
//     return res.status(400).send({
//       message: "Email not in format!",
//     });
//   }

//   if (passwordStrength(req.body.password).id < 1) {
//     return res.status(400).send({
//       message: "Weak Password, try again with a harder password",
//     });
//   }


//     const data = new user({
//         name: req.body.name,
//         email: req.body.email,
//         password : req.body.password
//     })

//     // generate salt to hash password
//     const salt = await bcrypt.genSalt(10);
//     // now we set data password to hashed password
//     data.password = await bcrypt.hash(data.password, salt);

//     // Save Note in the database
//   data
//   .save()
//   .then((data) => {
//     res.send(data);
//   })
//   .catch((err) => {
//     res.status(500).send({
//       message: err.message || "Some error occurred while creating the data.",
//     });
//   });
// })

// //Get all Method
// router.get('/getAll', async (req, res) => {
//     try{
//         const data = await user.find();
//         res.json(data)
//     }
//     catch(error){
//         res.send("Error while fetching data!")
//     }
// })

// //Get by email and password
// router.get('/getOne/:email', (req, res) => {
//     res.send(`Email : ${req.params.email}`)
// })

// //PUT Method
// router.put('/edit/:email', async (req, res) => {
//     try{

//         const fullnameRegexp =
//         /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

//         if (!fullnameRegexp.test(req.body.name)) {
//             return res.status(400).send({
//             message: "Please enter valid full name!",
//             });
//         }

//         if (passwordStrength(req.body.password).id < 1) {
//             return res.status(400).send({
//               message: "Weak Password, try again with a harder password",
//             });
//           }
//         let updateemail = req.params.email;

//         let uppwd = req.body.password;
//         let upname = req.body.name;

//         const data1 = new user({
//             name: req.body.name,
            
//             password : req.body.password
//         })

//         // generate salt to hash password
//         const salt = await bcrypt.genSalt(10);
//         // now we set user password to hashed password
//         data1.password = await bcrypt.hash(data1.password, salt);

//         user.findOneAndUpdate({email:updateemail}, {$set:{name:upname,password:data1.password}},{new:true},(err,data1) => {
//             if(data1==null) {
//                 res.send("Please verify if all user details are correct. NOTE : Email ID cannot be updated")
//             }else {
//                 res.send(data1)
//             }

//         })
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//         //res.send("not sure bro")
//     }
// })
   

// //Update by ID Method
// router.patch('/update/:name', async (req, res) => {
//     try {
//         const name = req.params.name;
//         const updatedData = req.body;
//         const options = { new: true };

//         const result = await user.findByIdAndUpdate(
//             name, updatedData, options
//         )

//         res.send(result)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })

// //Delete by ID Method
// router.delete('/delete/:email', async (req, res) => {
//     try {
//         const email = req.params.email;
//         const data = await user.findOneAndDelete(email)
//         res.send(`Document with ${data.name} has been deleted..`)
//     }
//     catch (error) {
//         res.send("data not found. Please check the email entered")
//     }
// })


// module.exports = router;


const express = require('express');
const Model = require('../models/user');
const bcrypt = require("bcrypt");
const { passwordStrength } = require("check-password-strength");

const router = express.Router()

//Post Method
router.post('/create', async (req, res) => {

    // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: "Body content can not be empty",
    });
  }

  let userr = await Model.findOne({ email: req.body.email });
  if (userr) {
    return res.status(400).send({
      message: "Duplicate User",
    });
  }

    const emailRegexp =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    const fullnameRegexp =
    /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

    if (!fullnameRegexp.test(req.body.name)) {
        return res.status(400).send({
          message: "Please enter valid full name!",
        });
      }


  if (!emailRegexp.test(req.body.email)) {
    return res.status(400).send({
      message: "Email not in format!",
    });
  }

  if (passwordStrength(req.body.password).id < 1) {
    return res.status(400).send({
      message: "Weak Password, try again with a harder password",
    });
  }


    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    })

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set data password to hashed password
    data.password = await bcrypt.hash(data.password, salt);

    // Save Note in the database
  data
  .save()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the data.",
    });
  });
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.send("Error while fetching data!")
    }
})

//Get by email and password
router.get('/getOne/:email', async (req, res) => {
    let userData = await Model.findOne({email: req.params.email});
    res.json(userData);
})

//PUT Method
// router.put('/edit/:email', async (req, res) => {
//     try{

//         const fullnameRegexp =
//         /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;

//         if (!fullnameRegexp.test(req.body.name)) {
//             return res.status(400).send({
//             message: "Please enter valid full name!",
//             });
//         }

//         if (passwordStrength(req.body.password).id < 1) {
//             return res.status(400).send({
//               message: "Weak Password, try again with a harder password",
//             });
//           }
//         let updateemail = req.params.email;

//         let uppwd = req.body.password;
//         let upname = req.body.name;

//         const data1 = new Model({
//             name: req.body.name,
            
//             password : req.body.password
//         })

//         // generate salt to hash password
//         const salt = await bcrypt.genSalt(10);
//         // now we set user password to hashed password
//         data1.password = await bcrypt.hash(data1.password, salt);

//         Model.findOneAndUpdate({email:updateemail}, {$set:{name:upname,password:data1.password}},{new:true},(err,data1) => {
//             if(data1==null) {
//                 res.send("Please verify if all user details are correct. NOTE : Email ID cannot be updated")
//             }else {
//                 res.send(data1)
//             }

//         })
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//         //res.send("not sure bro")
//     }
// })
   

router.put('/edit/:email', async (req, res) => {
    try{
  
          const fullnameRegexp = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
          if (!fullnameRegexp.test(req.body.name)) {
            return res.status(400).send({
              message: "Please enter valid full name!",
            });
          }
          if (passwordStrength(req.body.password).id < 1) {
            return res.status(400).send({
              message: "Weak Password, try again with a harder password",
            });
          }
if (req.body.email){
    return res.status(400).send({
        message: "Can't update email",
      });
}
        // let updatename = req.params.name;

        // let uppwd = req.body.password;
        // let upname = req.body.name;

        // const data1 = new Model({
        //     name: req.body.name,
        //     password : req.body.password
        // })

        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        // data1.password = await bcrypt.hash(data1.password, salt);
        // Model.findOneAndUpdate({name:updatename}, {$set:{name:upname,password:data1.password}},{new:true},(err,data1) => {
        //     if(data1==null) {
        //         res.send("Please verify if user details are correct. NOTE : Email ID cannot be updated")
        //         returnOriginal: false
        //     }else {
        //         res.send(data1)
        //         returnOriginal: true
        //     }

        // })
        let newpassword = await bcrypt.hash(req.body.password, salt);
        let assigned = await Model.findOneAndUpdate({email: req.params.email},{
            name: req.body.name,
            password : newpassword
        });
        if(assigned){
            res.status(200).send(assigned);
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
        
    }
})
   

//Update by ID Method
router.patch('/update/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            name, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const data = await Model.findOneAndDelete(email)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.send("data not found. Please check the email entered")
    }
})


module.exports = router;