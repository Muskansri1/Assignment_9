


import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';
// import  AboutUs  from './pages/About';
import  AboutUs  from './Components/AboutUs/AboutUs';
// import {ContactUs} from './pages/ContactUs';



import  {Home}  from './Components/Home/Home';
// import  {AboutUs}  from './Components/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Job from './Components/Job/Job';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
   
      <Router>
      <Routes>
    

      <Route path="/" element={<LoginPage handle={handleLogin} />} />
      <Route path="/" element={isLoggedIn ? <Home /> : <LoginPage handle={handleLogin} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/job" element={<Job />} />
      </Routes>
    </Router>
    // console.log("please work")
  );
}

export default App;
