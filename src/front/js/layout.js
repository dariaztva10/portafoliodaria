// lee la variable del .env (inyectada por dotenv-webpack)
const BackendURL = process.env.BACKEND_URL;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



import { Home } from "./pages/home";

import { Skills } from "./pages/skills";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const Layout = () => {
   
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
               
                    <Navbar />
                    
                    <Routes>
                    
                        <Route element={<Home />} path="/" />
                        
                        <Route element={<Skills />} path="/skills" />
                        <Route element={<Projects />} path="/projects" />
                        <Route element={<Contact />} path="/contact" />
                       
                        <Route element={<h1>Not found!</h1>} />
                      
                    </Routes>
                    
                    <Footer />
               
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
