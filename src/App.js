import React, { lazy } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar/Navbar";
import PageRouteWrapper from "./utils/PageRouteWrapper";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutMePage = lazy(() => import("./pages/AboutMe/AboutMePage"));
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"));

const App = () => {
    return (
        <BrowserRouter>
            <main className="App" data-testid="App">
                {/* Navigation menu */}
                <Navbar />

                <Routes>
                    <Route element={<PageRouteWrapper />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutme" element={<AboutMePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
