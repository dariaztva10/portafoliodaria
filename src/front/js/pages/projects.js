import React from "react";
import "../../styles/projects.css";
import hoyNoCocinoImg from "/workspaces/portafoliodaria/src/front/img/hoynococino.png";
const projectsData = [
    {
        id: 1,
        title: "Hoy No Cocino",
        description: "Aplicación web para la gestión de reservas con autenticación de usuarios.",
        link: "https://hoynococino.es",
        image: hoyNoCocinoImg,
    },
    {
        id: 2,
        title: "Virtual Styled Shoes",
        description: "E-commerce con prueba de zapatos en 3D y pagos con Stripe.",
        link: "https://virtualstyledshoes.com",
        image: "ruta-a-la-imagen-vss.jpg",
    },
    // Puedes agregar más proyectos aquí
];

export const Projects = () => {
    return (
        <div className="projects-container">
            <h1>Mis Proyectos</h1>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Ver Proyecto
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
