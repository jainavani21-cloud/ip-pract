import React from "react";

function ProjectItem({ project, onClick }) {
    return (
        <div className="project-item">
            <p>{project.title}</p>
            <p>{project.description}</p>
            <button onClick={() => onClick(project.id)}> view details</button>
        </div>
    );
}

export default ProjectItem;