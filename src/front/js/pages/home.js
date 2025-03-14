import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import myPhoto from "../../img/myPhoto.png";


export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-home my-5">
            <div className="custom-card">
                <div className="status">🚀En búsqueda activa de empleo</div>

                <div className="profile-section">
                    <div className="profile-pic">
                        <img src={myPhoto} alt="Daria - Full Stack Developer" />
                    </div>
                </div>

                <div className="content-wrapper">
                    <h1 className="title">
                        <span className="code-symbol">&lt;</span>
                        Hello World!
                        <span className="code-symbol">/&gt;</span><br />
                        Me llamo <span className="name-highlight">Daria</span>
                    </h1>

                    <h2 className="subtitle">
                        <span className="typing-animation">Full Stack Developer</span>
                    </h2>

                    <p className="description">
                        Tengo experiencia en aplicaciones web, gestión de bases de datos y diseño de interfaces intuitivas. Utilizo Python, JavaScript y React como mis lenguajes principales, ofreciendo soluciones innovadoras a través del desarrollo full stack. Siempre estoy buscando mejorar mis habilidades y mantenerme al día con las últimas tendencias tecnológicas.
                    </p>

                    <div className="buttons-container">
                        <a
                            href="https://drive.google.com/file/d/1ohE-fRhr2xE7JwWjZu21WxnTw06aaSdR/view?usp=sharing"
                            className="btn btn-download"
                            aria-label="Descargar CV"
                        >

                            <span className="btn-text">Descargar CV</span>
                        </a>

                        <Link to="/contact" className="btn btn-contact" aria-label="Contactar">

                            <span className="btn-text">Contáctame</span>
                        </Link>

                    </div>


                </div>
            </div>
        </div>
    );
};