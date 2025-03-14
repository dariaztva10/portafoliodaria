import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar-general">
            <div className="container">
                <Link to="/" className="navbar-brand">Inicio</Link>

                
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">☰</label>

                <ul className="nav-links">
                    <li><Link to="/skills" className="nav-button">Habilidades</Link></li>
                    <li><Link to="/projects" className="nav-button">Proyectos</Link></li>
                    <li><Link to="/contact" className="nav-button">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};
