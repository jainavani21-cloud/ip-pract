import React from 'react';

function About({ name, profession, bio }) {
    return (
        <div className="about-content">
            <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="about-image"
            />
            <div className="about-text">
                <h3>{name}</h3>
                <p className="profession">{profession}</p>
                <p>{bio}</p>
            </div>
        </div>
    );
}

export default About;