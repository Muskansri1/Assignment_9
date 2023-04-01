const express = require('express');
const Model = require('../models/user');
const bcrypt = require("bcrypt");
const { passwordStrength } = require("check-password-strength");

const router = express.Router()

var statuscheck;

const verifyHash = async (password, hash) => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};



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
      message: "This User Already Exists.",
    });
  }

    const emailRegexp =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    // const fullnameRegexp = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    const fullnameRegexp = /^([a-zA-Z]{5,}\s)?[a-zA-Z]+(\s[a-zA-Z]+)*$/;


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


  if (req.body.password.length < 8) {
    return res.status(400).send({
      message: "Password should be at least 8 characters long",
    });
  }
  else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(req.body.password)) {
    return res.status(400).send({
      message: "Password should contain at least one lowercase letter, one uppercase letter, one number, and one symbol",
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

//Get by email
router.get('/getOne/:email', async (req, res) => {
    let userData = await Model.findOne({email: req.params.email});
    res.json(userData);
})
//PUT Request to Edit

router.put('/edit/:email', async (req, res) => {
    try{
  

      const user = await Model.findOne({email: req.params.email});
      if (!user) {
          return res.status(404).send({
              message: "User not found",
          });
      }
          const fullnameRegexp = /^([a-zA-Z]{5,}\s)?[a-zA-Z]+(\s[a-zA-Z]+)*$/;
          if (!fullnameRegexp.test(req.body.name)) {
            return res.status(400).send({
              message: "Please enter valid full name!",
            });
          }
         

          if (req.body.password.length < 8) {
            return res.status(400).send({
              message: "Password should be at least 8 characters long",
            });
          }
          else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(req.body.password)) {
            return res.status(400).send({
              message: "Password should contain at least one lowercase letter, one uppercase letter, one number, and one symbol",
            });
          }


if (req.body.email){
    return res.status(400).send({
        message: "Email Cannot be Updated",
      });
}

        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
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
   






// router.get('/getAll', async (req, res) => {
//   try{
//       const data = await Model.find();
//       res.json(data)
//   }
//   catch(error){
//       res.send("Error while fetching data!")
//   }
// })

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === undefined) {
      throw new Error("Email Missing");
    } else if (password === undefined) {
      throw new Error("Password Missing");
    }

    const user = await Model.findOne({ email: email }); // findOne instead of find
    if (!user) throw new Error("User Not Found"); // check for null instead of length

    const verify = await verifyHash(password, user.password);

    if (!verify) throw new Error("Password Incorrect");

    res.status(200).send("Login Successfully"); // set status code and send response
    statuscheck = true;

  } catch (error) {
    return res.status(400).send({
      message: error.message, // send the actual error message
    });
  }
});



// router.post('/user/logincheck', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists in the database
//     const user = await Model.findOne({ email });
//     if (!user) {
//       return res.status(401).send({ error: 'Invalid email or password' });
//     }

//     // Check if the password matches the hash
//     const passwordMatches = await bcrypt.compare(password, user.password);
//     if (!passwordMatches) {
//       return res.status(401).send({ error: 'Invalid email or password' });
//     }

//     // Password is correct, log in the user
//     res.send({ message: 'Login successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Internal server error' });
//   }
// });


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

// export { sendSuccessResponse, sendErrorResponse };
// module.exports = sendSuccessResponse;
// module.exports = sendErrorResponse;
