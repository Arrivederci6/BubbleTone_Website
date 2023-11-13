import React from "react";
import './Features.css';
import phoneIcon from '../Assets/phoneIcon.svg';
import phone from '../Assets/iphone1.png';

const Features = () => {
    return (
        <div className="features">
            <div className="features_info">
                <div className="heading">
                    <h2>APP FEATURES</h2>
                </div>
                <div className="tip">
                    <img src={phoneIcon} alt="" />
                    <h3>IOS & ANDROID VERSION</h3>
                    <p>You can use our application via IOS or ANDROID.</p>
                </div>
                <div className="central_tips">
                    <div className="tip secondary">
                        <h3>IOS & ANDROID VERSION</h3>
                        <p>You can use our application via IOS or ANDROID.</p>
                    </div>
                    <img id="phoneImg" src={phone} alt="" />
                    <div className="tip secondary">
                        <h3>IOS & ANDROID VERSION</h3>
                        <p>You can use our application via IOS or ANDROID.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Features;