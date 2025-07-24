import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
    {/* TODO: Add FairCorp logo or hero image here */}
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-10 mb-8 border border-blue-900">
      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-300 mb-4 animate-slide-up">Welcome to FairCorp Hub</h1>
      <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl animate-fade-in">
        Your gateway to FairCorp's services, programs, and company information. Discover our mission, explore our offerings, and connect with our team.
      </p>
      <Link
        to="/services"
        className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-all duration-200 text-lg animate-scale-in"
      >
        Explore Our Services
      </Link>
    </div>
  </section>
);

export default Home; 