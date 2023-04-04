
import React, { useState, useEffect } from 'react';
import axios from "axios";

import './Job.css';

// import Job from './Job';

const JobMath = ({ user }) => {
    const getRandomAge = () => {
      return Math.floor(Math.random() * (25 - 20 + 1) + 20);
    };

    return (
        <div className="job-container">
          <div className="job-title">{user.name}</div>
          <div className="job-company">{user.email}</div>
          <div className="job-description">{getRandomAge()}</div>
          <a href={`#${user.id}`}>View Details</a>
        </div>
      );
    };
    
const Job = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get("http://localhost:3005/user/getAll");
        setUsers(
          response.data.map((user) => {
            const age = Math.floor(Math.random() * 18) + 18;
            return { ...user, age };
          })
        );
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
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
      <h3 className='job-profiles'>JOB PROFILES:</h3>



<div class="ag-format-container">
  <div class="ag-courses_box">
    {users.map((user) => (
      <div class="ag-courses_item" key={user._id}>
        <a href="#" class="ag-courses-item_link">
          <div class="ag-courses-item_bg"></div>
          <div class="ag-courses-item_title">
            <h3>Name: {user.name}</h3>
          </div>
          <div class="ag-courses-item_date-box">
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p>Age: {user.age}</p>
            <a href={`#${user._id}`} class="ag-courses-item_cta">View Profile</a>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>




<footer>
  <div class="footer-text">&copy; Muskan 2022</div>
</footer>
      </div>
    );
  };
  
  

export default Job;
