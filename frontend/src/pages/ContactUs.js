
import './ContactUs.css'
// import '../Components/Images'
import React from "react";

export function ContactUs ()  {
    return (
        <div class="ContactUs">
            Hey this is ContactUs page

            <header class="header">
                <div class="nav">
                    <ul>
                        <li><a href="/HTML/PortfolioHomePage.html" class="nav-link">Work</a></li>
                        <li><a href="/HTML/PortfolioAboutPage.html" class="nav-link">About</a></li>
                        <li><a href="#" class="nav-link">Contact</a></li>
                    </ul>
                    <div class="right">
                        <a href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="card">
                    <div class="title">
                        <h1 class="Name">Harshita</h1>
                        <h2>"UI/UX Designer"</h2>
                    </div>
                    <div class="content">
                        <div class="social">
                            <span>Address: 360 Huntington Ave, Boston MA</span>
                            <br></br>
                            <br></br>
                            <i class="glyphicon glyphicon-envelope"></i>
                            <a href="mailto:harshita.h@northeastern.edu">Email Me</a>
                            <br></br>
                            <i class="glyphicon glyphicon-phone"></i>
                            <a href="tel:+19876543210">Call Me</a>
                        </div>

                    </div>
                    <div class="circle"></div>
                </div>
            </div>
            <footer class="footer">
                <div class="footertext">Copyright Harshita(2022)</div>
            </footer>

        </div>
    )
}

export default ContactUs;

