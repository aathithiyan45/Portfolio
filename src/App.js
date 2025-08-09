import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import DevelopmentProjects from './pages/DevelopmentProjects'; 
import UIUXProjects from './pages/UIUXProjects'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/projects/development" element={<DevelopmentProjects />} />
          <Route path="/projects/uiux" element={<UIUXProjects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;