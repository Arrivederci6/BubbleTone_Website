import React from "react";
import mail_img from '../Assets/mail.svg';
import './Header.css';
import facebook from '../Assets/facebook.svg';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import youtube from '../Assets/youtube.svg';

const Header = () => {
    return (
        <header>
            <div className="top_header">
                <div className="mail">
                    <img src={mail_img} alt="" />
                    <h3>bubbletone@gmail.com</h3>
                </div>
                <div className="links">
                    <ul className="social_medias">
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="bottom_header">
                <div className="navigation">
                    <ul className="nav_menu">
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className="logo"><p>BubbleTone</p></div>
                <div className="navigation">
                    <ul className="nav_menu">
                        <li>Team</li>
                        <li>Our Customers</li>
                        <li id="downloadBtn">Download</li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

export default Header;