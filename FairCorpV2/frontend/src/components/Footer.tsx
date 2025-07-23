import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-gray-950/80 backdrop-blur-xs border-t border-blue-900 py-4 mt-8 shadow-lg animate-fade-in">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} FairCorp. All rights reserved.</span>
      <Link to="/about" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-all duration-200 text-sm mt-2 md:mt-0">About</Link>
    </div>
  </footer>
);

export default Footer; 