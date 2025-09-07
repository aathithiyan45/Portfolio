import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import DevelopmentProjects from './pages/DevelopmentProjects'; 
import UIUXProjects from './pages/UIUXProjects'; 
import Experience from "./pages/Experience";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Remember preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/projects/development" element={<DevelopmentProjects />} />
          <Route path="/projects/uiux" element={<UIUXProjects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
