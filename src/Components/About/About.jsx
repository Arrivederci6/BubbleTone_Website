import React from "react";
import './About.css';
import phoneImage from '../Assets/aboutPhoneImage.svg';

const About = () => {
    return (
        <div className="about_section container">
            <div className="info_section">
                <h2>About our app</h2>
                <p>This application helps users to choose clothing according to their taste.</p>
                <div className="main_info">
                    <div className="left_part">
                        <img src={phoneImage} alt="" />
                    </div>
                    <div className="right_part">
                        <div className="feature">
                            <h3>Easy to use</h3>
                            <p>You can find clothes that you want in few clicks.</p>
                        </div>
                        <div className="feature">
                            <h3>Try On</h3>
                            <p>You can preview how the selected clothing will look on your body.</p>
                        </div>
                        <div className="feature">
                            <h3>Try On</h3>
                            <p>You can preview how the selected clothing will look on your body.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;