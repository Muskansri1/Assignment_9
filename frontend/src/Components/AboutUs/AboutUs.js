import './AboutUs.css'
import {useState, useEffect} from 'react'
import React from "react";

// import  AboutUs  from './AboutUs';


import myImage from '../Images/job1.jpg';
import myImage2 from '../Images/job2.jpg';
import myImage3 from '../Images/job3.jpg';
import myImage4 from '../Images/job4.jpg';


export const AboutUs = () => {
    return (
      <div className="AboutUs">
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
        <div className="content-AboutUs">
          <h1 className='aboutus'>About Us</h1>
          <p>Profling.Co is a job profiling company that helps individuals and organizations gain a better understanding of job roles and responsibilities. Our mission is to provide comprehensive insights into job roles by analyzing job tasks, competencies, and requirements, and to help organizations identify the right talent for their teams.<br/>
            <br/>At Profling.Co, we understand that every job is unique, and we tailor our services to meet the specific needs of our clients. Whether you're a job seeker looking to understand the requirements of a particular role or an organization seeking to optimize your talent acquisition process, we can help.
            <br/><br/>Our goal is to empower individuals and organizations with the knowledge they need to make informed decisions about job roles and responsibilities. We believe that by providing accurate and reliable job profiles, we can help individuals find the right job and organizations build the right teams.</p>
          <div className="image-section-AboutUs">
            <div className="image-container-AboutUs">
              <div className="image-card-AboutUs">
                <div className="front-image-AboutUs">
                    {/* <img className='front-image1'></img> */}
                    <img src={myImage} alt="My Image" />
                  {/* <img src="" alt="Image 1" /> */}
                </div>
                <div className="back-image-AboutUs">
                  <p>Co could help companies analyze and define the key skills, experience, and personality traits required for each job role within their organization.</p>
                </div>
              </div>
            </div>
            <div className="image-container-AboutUs">
              <div className="image-card-AboutUs">
                <div className="front-image-AboutUs">
                <img src={myImage2} alt="My Image" />
                </div>
                <div className="back-image-AboutUs">
                  <p>Profiling.Co could provide companies with tools and assessments to help them evaluate the skills, experience, and personality traits of job candidates, enabling them to make more informed hiring decisions.</p>
                </div>
              </div>
            </div>
            <div className="image-container-AboutUs">
              <div className="image-card-AboutUs">
                <div className="front-image-AboutUs">
                <img src={myImage3} alt="My Image" />
                </div>
                <div className="back-image-AboutUs">
                  <p>Profiling.Co could help companies assess the strengths and weaknesses of their employees, providing them with insights into how to improve performance and increase productivity.</p>
                </div>
              </div>
            </div>
            <div className="image-container-AboutUs">
              <div className="image-card-AboutUs">
                <div className="front-image-AboutUs">
                <img src={myImage4} alt="My Image" />
                </div>
                <div className="back-image-AboutUs">
                  <p>Profiling.Co could leverage data analytics to provide companies with insights into key HR metrics such as turnover rates, employee engagement, and productivity, enabling them to make data-driven decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
        <div className="footer-text">&copy; Muskan 2022</div>
        </footer>
      </div>
    );
  }


  export default AboutUs;