// src/front/js/layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

// ✅ usa fallback en el front también
const BACKEND = process.env.BACKEND_URL || "http://127.0.0.1:5001";
const BASENAME = process.env.BASENAME || "/";

console.log("FRONT BACKEND_URL (fallback aplicado):", BACKEND);

const Layout = () => {
  //  solo avisa si venía vacía, pero NO bloquea la UI
  if (!process.env.BACKEND_URL) {
    console.warn("BACKEND_URL no está definida. Usando fallback:", BACKEND);
  }

  return (
    <BrowserRouter basename={BASENAME}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
