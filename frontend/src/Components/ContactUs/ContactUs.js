

import React, { useState, useEffect } from "react";

import './ContactUs.css'
import axios from "axios";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



const ContactUs = () => {
    const [name, setName] = useState("");
    const [contact, setContact] = useState(null);
    const email = localStorage.getItem("email");
    useEffect(() => {
      axios
        .get(`http://localhost:3005/user/getOne/${email}`)
        .then((response) => {
          setName(response.data.name);
          console.log(name);
          setContact(response.data.contact);
          console.log(email);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [email]);
  
  
  
    return (
    <div className="contactUs">
        <header className="header-job">
        <nav className="nav-job">
          <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/aboutus">About Us</a></li>
          <li><a href="/job">Jobs</a></li>
          {/* <li><a href="/contactus">Contact Us</a></li> */}
          <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

<div class="card-contactUs">
<h1>Contact Us:</h1>

      <div class="img-bx-contactUs">
        <img src="https://www.thewomenachiever.com/wp-content/uploads/2021/12/Coding-Resources-for-Women.jpg" alt="img" />
      </div>
      <div class="content-contactUs">
        <div class="detail-contactUs">
            <br/>
            <br/>
          <h2>{name}<br /><span>{email}</span></h2>
          <ul class="sci-contactUs">
            <li>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </li>
            <li>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>


      <footer>
  <div class="footer-text">&copy; Muskan 2022</div>
</footer>
    </div>
    
      
    );
  };


  export default ContactUs;