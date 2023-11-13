import React from "react";
import './Customers.css';
import photo from '../Assets/default-profile-account.jpeg';

const Customers = () => {
    return (
        <div className="customers">
            <div className="box">
                <div className="heading">
                    <h2>Our Happy Customers</h2>
                </div>
                <div className="info">
                    <div className="feedback_inner">
                        <img src={photo} alt="" />
                        <h3>Ryan Gosling</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                    <div className="feedback_outer" id="central">
                        <img src={photo} alt="" />
                        <h3>Ryan Gosling</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                    <div className="feedback_inner">
                        <img src={photo} alt="" />
                        <h3>Ryan Gosling</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers;