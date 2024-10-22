import React from "react";
import About from '../components/About';

function AboutPage() {
    const bio = "I am a website developer"

    return (
        <div className="about-container">
            <h3>ABout Me</h3>
            <About name="jai deepak navani" profession="front end developer" bio={bio} />
        </div>
    );
}

export default AboutPage;