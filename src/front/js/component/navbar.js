import React from "react";
import { Link } from "react-router-dom";
import "/workspaces/portafoliodaria/src/front/styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar-general">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Inicio
                </Link>
                <div className="ml-auto">
                    <Link to="/skills">
                        <button className="botonesNavbar">Habilidades</button>
                    </Link>
                    <Link to="/projects">
                        <button className="botonesNavbar">Proyectos</button>
                    </Link>
                    <Link to="/contact">
                        <button className="botonesNavbar">Contacto</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};
