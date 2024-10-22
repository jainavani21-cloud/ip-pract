import React from 'react';
import About from '../components/About';

function AboutPage() {
    const bio = "I am a front-end developer with a passion for creating dynamic and responsive web applications.";

    return (
        <div className="about-container">
            <h2>About Me</h2>
            <About name="Jai Deepak Navani" profession="Front-End Developer" bio={bio} />
        </div>
    );
}

export default AboutPage;
