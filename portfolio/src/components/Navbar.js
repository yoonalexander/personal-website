import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Alex's Portfolio</a>
        <ul className="flex space-x-6">
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="/skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;