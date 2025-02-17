import React, { useState } from "react";
import "../../styles/contact.css";

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mensaje enviado:", formData);
        alert("Tu mensaje ha sido enviado.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contacto 💌</h1>
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

                <div className="contact-info">
                    <p><strong>✉️ Email:</strong> <a href="mailto:dariaztva@gmail.com">dariaztva@gmail.com</a></p>
                    <p><strong>📞 Teléfono:</strong> <a href="tel:+34648705883">+34 648 70 58 83</a></p>
                </div>

            </div>

        </div>
    );
};
