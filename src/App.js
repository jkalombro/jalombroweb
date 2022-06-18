import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//COMPONENTS
import HomePage from './pages/Home/Home';
import SkillPage from './pages/Skills/Skills';
import ContactPage from './pages/Contact/Contact';
import Navbar, { NavbarRouteWrapper } from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <main className="App">

        {/* Navigation menu */}
        <Navbar />

        <Routes>
          <Route element={<NavbarRouteWrapper />}>
            <Route path="/jalombroweb/home" element={<HomePage />} />
            <Route path="/jalombroweb/skills" element={<SkillPage />} />
            <Route path="/jalombroweb/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate replace to="/jalombroweb/home" />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
