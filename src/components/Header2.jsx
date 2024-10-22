import React from "react";
import { Link } from "react-router-dom";

function header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">projects</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default header;