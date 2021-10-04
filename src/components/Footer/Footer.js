import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div>
                <img src={"https://web.programming-hero.com/favicon.ico"}></img>    
                Concord Royal Court (3rd floor)
                Dhanmondi, Dhaka 1209, Bangladesh.
                </div>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Responsibilities</li>
                        <li>Our Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <div className="footer-buttom">
            <div className="copy-right"> 
            © 2021 Programming Hero.
            </div>
            <div className="buttom-icon"> 
                <ul>
                   <li><i class="fa fa-facebook-f"></i></li>
                   <li><i class="fa fa-instagram"></i></li>
                   <li><i class="fa fa-twitter"></i></li>
                </ul>
            </div>
            </div>
        </footer>
    );
};

export default Footer;