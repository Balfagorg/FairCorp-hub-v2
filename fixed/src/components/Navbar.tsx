import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Staff', path: '/staff' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-700/50' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
              FairCorp Hub
            </span>
            <span className="text-xs text-gray-400 font-medium tracking-wide">
              Professional Excellence
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  location.pathname === link.path 
                    ? 'text-blue-400 bg-blue-900/30 border border-blue-700/50' 
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg animate-pulse"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 rounded-lg transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            </li>
          ))}
        </ul>



        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden relative p-2 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 shadow-xl">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path
                    ? 'text-blue-400 bg-blue-900/30 border border-blue-700/50 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 