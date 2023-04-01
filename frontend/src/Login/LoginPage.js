// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import "../Login/LoginPage.css"
// // // // import axios from "axios";


// // // // export default function LoginPage({...props}){
// // // //     const navigate = useNavigate();

// // // //     const handleSignIn = () => {
// // // //         // props.handle();
// // // //         try {
// // // //             const apiData = await axios.post(
// // // //               "http://localhost:3005/user/login",
// // // //               data
// // // //             );
// // // //             setmessage(apiData.data.data.message);
// // // //             console.log(apiData.data.data.message);
// // // //           } catch (error) {
// // // //             console.log(error.response);
// // // //             setmessage(error.response.data.error);
// // // //           }
// // // //         navigate('/main')
// // // //     }
// // // //     return(
// // // //         <div className="login-page">
// // // //             <h1> Login Page</h1>
// // // //             <form>
// // // //                 <label>
// // // //                     Username:
// // // //                     <input type="text" className="login-input" />
// // // //                 </label>
// // // //                 <br/>
// // // //                 <label>
// // // //                     Password:
// // // //                     <input type="password" className="login-input" />
// // // //                 </label>
// // // //                 <br/>
// // // //                 <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
// // // //             </form>
// // // //         </div>
// // // //     )
// // // // }

// // // import React, { Component,useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import "../Login/LoginPage.css";
// // // import axios from "axios";

// // // // export default function LoginPage({...props}) {
// // // //   const navigate = useNavigate();
// // // //   const [message, setMessage] = useState("");

// // // //   const handleSignIn = async (event) => {
// // // //     event.preventDefault();
// // // //     const username = event.target.elements.username.value;
// // // //     const password = event.target.elements.password.value;
// // // //     const data = { username, password };
// // // //     try {
// // // //       const apiData = await axios.post(
// // // //         "http://localhost:3005/user/login",
// // // //         data
// // // //       );
// // // //       setMessage(apiData.data.data.message);
// // // //       console.log(apiData.data.data.message);
// // // //     } catch (error) {
// // // //       console.log(error.response);
// // // //       setMessage(error.response.data.error);
// // // //     }
// // // //     navigate('/main');
// // // //   };

// // // //   return (
// // // //     <div className="login-page">
// // // //       <h1> Login Page</h1>
// // // //       <form onSubmit={handleSignIn}>
// // // //         <label>
// // // //           Username:
// // // //           <input type="text" name="username" className="login-input" />
// // // //         </label>
// // // //         <br />
// // // //         <label>
// // // //           Password:
// // // //           <input type="password" name="password" className="login-input" />
// // // //         </label>
// // // //         <br />
// // // //         <button type="submit" className="login-button">
// // // //           Sign In
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }




// // // // import React, { Component, useState } from "react";

// // // export default function Login() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   function handleSubmit(e) {
// // //     e.preventDefault();

// // //     console.log(email, password);
// // //     fetch("http://localhost:3005/user/login", {
// // //       method: "POST",
// // //       crossDomain: true,
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //         Accept: "application/json",
// // //         "Access-Control-Allow-Origin": "*",
// // //       },
// // //       body: JSON.stringify({
// // //         email,
// // //         password,
// // //       }),
// // //     })
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         console.log(data, "userRegister");
// // //         if (data.status == "ok") {
// // //           alert("login successful");
// // //           window.localStorage.setItem("token", data.data);
// // //           window.localStorage.setItem("loggedIn", true);

// // //           window.location.href = "./userDetails";
// // //         }
// // //       });
// // //   }

// // //   return (
// // //     <div className="auth-wrapper">
// // //       <div className="auth-inner">
// // //         <form onSubmit={handleSubmit}>
        

// // //           <div className="mb-3">
// // //             <label>Email address</label>
// // //             <input
// // //               type="email"
// // //               className="form-control"
// // //               placeholder="Enter email"
// // //               onChange={(e) => setEmail(e.target.value)}
// // //             />
// // //           </div>

// // //           <div className="mb-3">
// // //             <label>Password</label>
// // //             <input
// // //               type="password"
// // //               className="form-control"
// // //               placeholder="Enter password"
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />
// // //           </div>


// // //           <div className="d-grid">
// // //             <button type="submit" className="btn btn-primary">
// // //               Submit
// // //             </button>
// // //           </div>
         
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import axios from "axios";
// // import http from 'http';
// // import crypto from 'crypto';


// // const express = require('express');
// // const cors = require('cors');
// // // const http = require('http');



// // const app = express();

// // // Allow cross-origin requests from localhost:3003
// // app.use(cors({
// //   origin: 'http://localhost:3003'
// // }));

// // export default function LoginForm() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await axios.post("http://localhost:3005/user/login", {
// //         email,
// //         password,
// //       });

// //       console.log(response.data);

// //       // Redirect to home page
// //       window.location.href = "./Components/Job";
// //     } catch (error) {
// //       console.error(error.response.data);
// //       setError(error.response.data.error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>Email:</label>
// //         <input
// //           type="email"
// //           value={email}
// //           onChange={(event) => setEmail(event.target.value)}
// //           required
// //         />
// //         <br />
// //         <label>Password:</label>
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(event) => setPassword(event.target.value)}
// //           required
// //         />
// //         <br />
// //         <button type="submit">Login</button>
// //       </form>
// //       {error && <p>{error}</p>}
// //     </div>
// //   );
// // }




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// // export default function LoginForm() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');
// //   const history = useHistory();

// //   const handleEmailChange = (event) => {
// //     setEmail(event.target.value);
// //   };

// //   const handlePasswordChange = (event) => {
// //     setPassword(event.target.value);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:3005/user/login', { email, password });
// //       if (response.data.success) {
// //         history.push('/home');
// //       } else {
// //         setErrorMessage(response.data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       setErrorMessage('An error occurred while logging in.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="email">Email:</label>
// //           <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password:</label>
// //           <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //       {errorMessage && <p>{errorMessage}</p>}
// //     </div>
// //   );
// // }



// import { useNavigate } from 'react-router-dom';

// export default function LoginPage() {
//   const navigate = useNavigate();

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3005/user/login', { email, password });
//       if (response.data.success) {
//         navigate('/home');
//       } else {
//         console.log(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSignIn}>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" />

//       <label htmlFor="password">Password:</label>
//       <input type="password" id="password" name="password" />

//       <button type="submit">Sign In</button>
//     </form>
//   );
// }


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function LoginForm() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3005/user/login', {
//         email,
//         password,
//       });
//       if (response.data.success) {
//         navigate('/home');
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login Form</h1>
//       {error && <p>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import  {Home}  from '../Components/Home';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/user/login', {
        email,
        password,
      });

      if (response.status == 200) {
        console.log("success");
        setSuccess(true);
        // document.getScript("../Components/AboutUs.js");
        // window.location.href = '../Components/AboutUs';
        // navigate('/Components/AboutUs');
        // navigate('Assignment_9_Github/Assignment_9/frontend/src/Components/AboutUs.js')
      } else {
        setErrorMessage(response.data.message);
        console.log("failed");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
        {!success && <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      </>}
      {errorMessage && <p>{errorMessage}</p>}
      {success && <Home/>}
    </div>
  );
};

export default LoginPage;
