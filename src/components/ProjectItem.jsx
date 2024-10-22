import React from 'react';

function ProjectItem({ project, onClick }) {
    return (
        <div className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => onClick(project.id)}>View Details</button>
        </div>
    );
}

export default ProjectItem;
