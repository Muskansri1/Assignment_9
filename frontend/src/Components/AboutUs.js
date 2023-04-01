import './AboutUs.css'
import Certificate from './Images/140185.jpg'
import {useState, useEffect} from 'react'
import React from "react";


export const AboutUs = () => {

    const [user, setUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3005/user/getAll')
        .then(response=>response.json())
        .then(data=>setUser(data))
        .catch((err)=>console.log(err))
    },[])

    return (
        <div class="AboutUs">
            Hey this is AboutUs page.
            <header class="header">
                <div class="nav">
                    <ul>
                        <li><a href="/HTML/PortfolioHomePage.html" class="nav-link">Work</a></li>
                        <li><a href="#" class="nav-link">About</a></li>
                        <li><a href="/HTML/PortfolioContactPage.html" class="nav-link">Contact</a></li>
                    </ul>
                    <div class="right">
                        <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
                        <a href="https://dribbble.com/ita29/about"><i class="fa fa-dribbble"></i></a>
                        <a href="https://dribbble.com/ita29/about"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-behance" viewBox="0 0 16 16">  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" /></svg></a>
                    </div>
                </div>
            </header>

            <article class="articleContainer">Hi, I'm Harshita, currently I'm pursuing MS in Information Systems
                at Northeastern University, Boston. Before moving to Boston, I was working as a UI/UX Designer for an Indian start-up, Knowledge Shower.
                Prior to that, I worked as a Graphic Designer for another start-up, CollegeTips.Com.
                I also like photography, sketching and playing soccer.
                I will be happy to connect with you on LinkedIn, Behance or Dribble.</article>
            <br></br>
                <p class="resumeRequest">Resume available on request.</p>
                <div class="carouselHeading"><h3>My Certifications</h3></div>
                <div class="carousel">
                    <div class="carousel--item one">
                        <figure>
                            <img src={Certificate} className= "Certificate" alt="Certificate" />
                            {/* <img src="/Images/140185.jpg" alt="Icon" style="width:100%"/> */}
                                <figcaption>Web Design Certification</figcaption>
                        </figure>

                    </div>
                    <div class="carousel--item two">
                        <figure>
                            <img src={Certificate} className= "Certificate" alt="Certificate" />
                            {/* <img src="/Images/140185.jpg" alt="Icon" style="width:100%"/> */}
                                <figcaption>Web Design Certification</figcaption>
                        </figure>
                    </div>
                    <div class="carousel--item three">
                        <figure>
                            <img src={Certificate} className= "Certificate" alt="Certificate" />
                            {/* <img src="/Images/140185.jpg" alt="Icon" style="width:100%"/> */}
                                <figcaption>Web Design Certification</figcaption>
                        </figure>
                    </div>
                    <div class="carousel--item four">
                        <figure>
                            <img src={Certificate} className= "Certificate" alt="Certificate" />
                            {/* <img src="/Images/140185.jpg" alt="Icon" style="width:100%"/> */}
                                <figcaption>Web Design Certification</figcaption>
                        </figure>
                    </div>
                    <div class="carousel--item five">
                        <figure>
                            <img src={Certificate} className= "Certificate" alt="Certificate" />
                            {/* <img src="/Images/140185.jpg" alt="Icon" style="width:100%"/> */}
                                <figcaption>Web Design Certification</figcaption>
                        </figure>
                    </div>
                </div>
                <footer class="footer">
                    <div class="footertext">Copyright Harshita(2022)</div>
                </footer>

                <div className="MapFunction">
                    <h3> The email addresses of out members are: </h3> 
                    <ul>
                        {
                            user.map(user=>{
                                return<li>{user.email}</li>
                            })
                        }
                    </ul>
                </div>

        </div>
    )
}

export default AboutUs
