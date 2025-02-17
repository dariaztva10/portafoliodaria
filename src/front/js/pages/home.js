import React, { useContext } from "react";
import { Context } from "../store/appContext";
import myPhoto from "/workspaces/portafoliodaria/src/front/img/myPhoto.png";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container my-5">
            <div className="custom-card">
               
                <div className="profile-pic">
                    <img className="fotodaria" src={myPhoto} alt="Daria" />
                </div>
                <div className="status">¡En búsqueda activa de empleo!</div>
                <h1 className="title">&lt;Hello World!/&gt; Me llamo <strong>Daria</strong></h1>

                <h3 className="subtitle">Soy <span className="highlight">Full Stack Developer</span></h3>

                <p className="description">
                    Tengo experiencia en aplicaciones web, gestión de bases de datos y diseño de interfaces intuitivas. 
                    Utilizo <strong>Python, JavaScript y React</strong> como mis lenguajes principales, ofreciendo soluciones innovadoras 
                    a través del desarrollo full stack. Siempre estoy buscando mejorar mis habilidades y mantenerme al día 
                    con las últimas tendencias tecnológicas.
                </p>

                <div className="buttons-container">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1z9u8nBcaj7ObHZnVO9Jub1uOnBHVNRLA"
                        download="curriculum.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-custom btn-custom-download"
                    >
                        Descargar mi CV
                    </a>

                    <button className="btn btn-custom btn-custom-contact">Contáctame</button>
                </div>

                <div className="social-icons mt-3">
                    <a href="https://www.linkedin.com/in/dariaztva" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/dariaztva" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="mailto:dariaztva@gmail.com">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
