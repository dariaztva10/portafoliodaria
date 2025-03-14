import React from "react";
import "../../styles/projects.css";
import hoyNoCocinoImg from "../../img/hoynococino.png";
import valenti from "../../img/amor.png";


const projectsData = [
    {
        id: 1,
        title: "¡Hoy No Cocino!",
        description: "Aplicación web para la gestión de reservas con autenticación de usuarios.",
        link: "https://github.com/4GeeksAcademy/Proyecto_Final_NJD",
        image: hoyNoCocinoImg,
    },
    {
        id: 2,
        title: "San Valentín",
        description: "Calculadora del amor 💖\nIngresa dos nombres para descubrir la compatibilidad.",
        link: "https://github.com/dariaztva10/San-Valentin",
        image: valenti,
    }
];

export const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Mis Proyectos</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />

                        <div className="project-content">
                            <h2>{project.title}</h2>

                           
                            <p className="project-description">
                                {project.description.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>

                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                🔗 Ver proyecto
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
