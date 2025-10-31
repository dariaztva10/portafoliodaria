// src/front/js/layout.js
console.log("FRONT BACKEND_URL:", process.env.BACKEND_URL);
// 1) lee variables de entorno (inyectadas por dotenv-webpack)
const BackendURL = process.env.BACKEND_URL;
const BASENAME  = process.env.BASENAME || "/";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home }     from "./pages/home";
import { Skills }   from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact }  from "./pages/contact";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

const Layout = () => {
  // 2) si falta BACKEND_URL, muestra mensaje (mejor que “romper”)
  if (!BackendURL || BackendURL === "") {
    return (
      <div style={{ padding: "2rem", color: "#fff" }}>
        Falta la variable <code>BACKEND_URL</code>.<br />
        Defínela en tu <code>.env</code> (local) o en Vercel → Settings → Environment Variables.
      </div>
    );
  }

  // 3) app normal
  return (
    <BrowserRouter basename={BASENAME}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(Layout);
