import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <Router> {/* Wrap the entire app in BrowserRouter */}
      <Navbar /> {/* Navbar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define each route */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer style={{ backgroundColor: '#933', color: 'white', textAlign: 'center', padding: '15px 0', marginTop: '20px' }}>
        <p class="white-text">© 2025 Alex's Portfolio. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
