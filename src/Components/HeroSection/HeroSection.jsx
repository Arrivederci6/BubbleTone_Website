import React from "react";
import './HeroSection.css';
import googlePlayDownload from '../Assets/googlePlay.svg';
import appStoreDownload from '../Assets/appStore.svg';
import appScreenShot from '../Assets/hero_section_app_screenshot.png';


const HeroSection = () => {
    return (
        <div className="hero_section container">
            <div className="left_part">
                <div id="bgRectangle"></div>
                <div className="info_part">
                    <h2>A GREAT APP MAKES YOUR LIFE EASIER</h2>
                    <p>Pocket Stylist application.</p>
                    <h3>DOWNLOAD APP NOW</h3>
                    <div className="download_buttons">
                        <img src={googlePlayDownload} alt="" />
                        <img src={appStoreDownload} alt="" />
                    </div>
                </div>
            </div>
            <div className="right_part">
                <img src={appScreenShot} alt="" />
            </div>
        </div>
    )
};

export default HeroSection;