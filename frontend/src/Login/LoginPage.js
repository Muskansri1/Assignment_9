import "./LoginPage.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Home } from "../Components/Home/Home";
 import  ContactUs from "../Components/ContactUs/ContactUs";
import { AboutUs } from "../Components/AboutUs/AboutUs";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log("success");
        setLoggedInUser(response.data.email);
        setSuccess(true);
        console.log(loggedInUser);
        localStorage.setItem("email",email);
        console.log("email is:" + email);
        alert("Login successful!");
      } else {
        alert("Login failed. Please try again.");
        console.log("failed");

      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="outside-container">
      {!success && (
        <div className="login-container">
          <div className="login-box">
            <h1>Hey There!</h1>
            <form onSubmit={handleSubmit} className="login-form">
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      )}
      {/* {success && <Home />} */}
      {/* {success && <Home email={loggedInUser} />} */}
      {success && window.open('/home','_self')}
      {/* <a href="/home">Home</a> */}
      {/* {success && <ContactUs loggedInUser={loggedInUser} />} */}
      
    </div>
  );
};

export default LoginPage;
