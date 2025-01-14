import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
        <li><Link className="hover:text-gray-400" to="/about">About</Link></li>
        <li><Link className="hover:text-gray-400" to="/projects">Projects</Link></li>
        <li><Link className="hover:text-gray-400" to="/skills">Skills</Link></li>
        <li><Link className="hover:text-gray-400" to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;