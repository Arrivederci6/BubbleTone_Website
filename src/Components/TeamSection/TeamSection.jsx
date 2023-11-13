import React from "react";
import './TeamSection.css';
import photo from '../Assets/default-profile-account.jpeg';

const TeamSection = () => {
    return (
        <div className="team_section">
            <h2>Our Team</h2>
            <div className="teammates_part">
                <div className="teammate">
                    <img src={photo} alt="" />
                    <h3>Maksym Adamyk</h3>
                    <h4>Developer</h4>
                </div>
                <div className="teammate">
                    <img src={photo} alt="" />
                    <h3>Andrii Morozov</h3>
                    <h4>Developer</h4>
                </div>
            </div>
        </div>
    )
};

export default TeamSection;