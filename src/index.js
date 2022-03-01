import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Ala from "./components/Ala";
import Bala from "./components/Bala";
import Portocala from "./components/Portocala";

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/ala" element={<Ala />} />
                <Route path="/bala" element={<Bala />} />
                <Route path="/portocala" element={<Portocala />} />
            </Routes>
        </>
    );
};

render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
    document.querySelector("#root")
);
