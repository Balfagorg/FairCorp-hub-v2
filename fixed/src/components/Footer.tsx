import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-950/80 backdrop-blur-xs border-t border-blue-900 py-6 mt-auto shadow-lg animate-fade-in">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-4">
      <span className="text-gray-400 text-sm text-center sm:text-left">
        &copy; {new Date().getFullYear()} FairCorp. All rights reserved.
      </span>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Link 
          to="/about" 
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-all duration-200 text-sm"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-all duration-200 text-sm"
        >
          Contact
        </Link>
        <Link 
          to="/services" 
          className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-all duration-200 text-sm"
        >
          Services
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer; 