import React, { lazy } from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//COMPONENTS
import Navbar from './components/Navbar';
import PageRouteWrapper from './utils/PageRouteWrapper';

const HomePage = lazy(() => import('./pages/Home/Home'));
const SkillPage = lazy(() => import('./pages/Skills/Skills'));
const ContactPage = lazy(() => import('./pages/Contact/Contact'));

const App = () => {
  return (
    <BrowserRouter>
      <main className="App" data-testid="App">

        {/* Navigation menu */}
        <Navbar />

        <Routes>
          <Route element={<PageRouteWrapper />}>
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
