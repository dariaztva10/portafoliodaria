import React, { useState } from "react";
import "../../styles/contact.css";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(""); // Para mostrar mensajes de estado

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Enviando...");

        try {
            const response = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus("Correo enviado con éxito 🎉");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data.error || "Error al enviar el correo");
            }
        } catch (error) {
            setStatus("Error al conectar con el servidor");
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">CONTACTO</h1>
            <div className="contact-card">
                <p>¿Quieres hablar conmigo? Rellena el formulario y estaré encantada de responderte.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Escribe tu mensaje..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>

                {/* Mostrar estado del envío */}
                {status && <p className="status-message">{status}</p>}

                <div className="contact-info">
                    <div className="contact-info-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:dariaztva@gmail.com">dariaztva@gmail.com</a>
                    </div>
                    <div className="contact-info-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+34648705883">+34 648 70 58 83</a>
                    </div>
                </div>

            </div>
        </div>
    );
};
