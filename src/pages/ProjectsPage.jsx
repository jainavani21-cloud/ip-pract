import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem';

function ProjectsPage() {
    const [projects] = useState([
        { id: 1, title: 'Portfolio Website', description: 'A personal portfolio website built using ReactJS.' },
        { id: 2, title: 'E-commerce App', description: 'An e-commerce platform with React and Redux.' },
        { id: 3, title: 'Weather App', description: 'A weather forecasting app built with React and OpenWeather API.' },
    ]);

    const handleProjectClick = (id) => {
        alert(`Project ID: ${id}`);
    };

    return (
        <section>
            <h2>Projects</h2>
            {projects.map((project) => (
                <ProjectItem key={project.id} project={project} onClick={handleProjectClick} />
            ))}
        </section>
    );
}

export default ProjectsPage;
