import React from 'react';
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
  return (
    <nav className="bg-gray-950/80 backdrop-blur-xs shadow-lg animate-fade-in">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-blue-400">FairCorp Hub V2</span>
        </div>
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-blue-400 ${location.pathname === link.path ? 'text-blue-400' : 'text-gray-200'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 