import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaDatabase } from "react-icons/fa";
import { SiFlask, SiBootstrap, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
import "../../styles/skills.css";

export const Skills = () => {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
        { name: "JavaScript", icon: <FaJs className="icon js" /> },
        { name: "React", icon: <FaReact className="icon react" /> },
        { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
        { name: "Git", icon: <FaGitAlt className="icon git" /> },
        { name: "GitHub", icon: <FaGithub className="icon github" /> },
        { name: "Python", icon: <FaPython className="icon python" /> },
        { name: "SQL", icon: <FaDatabase className="icon sql" /> },
        { name: "Flask", icon: <SiFlask className="icon flask" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="icon bootstrap" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" /> },
        { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="icon postgres" /> }
    ];

    return (
        <div className="skills-container">
            <h1>Habilidades 💻</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="skills-description">
                <p>
                    Como desarrolladora Full Stack, manejo tecnologías clave en frontend y backend,
                    incluyendo HTML, CSS, JavaScript, React, Node.js, Python y SQL. Tengo experiencia
                    trabajando con frameworks como Flask y Bootstrap, así como con herramientas de control
                    de versiones como Git y GitHub. Además, utilizo bases de datos relacionales y no relacionales
                    como PostgreSQL y MongoDB, y aplico buenas prácticas de desarrollo para crear aplicaciones
                    escalables y eficientes.
                </p>
            </div>
        </div>
    );
};
