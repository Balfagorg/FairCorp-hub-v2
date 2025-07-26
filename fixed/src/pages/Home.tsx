import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 animate-fade-in mt-16 sm:mt-20">
    <div className="max-w-4xl mx-auto w-full">
      {/* Hero Section */}
      <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-blue-900/50 mb-8 sm:mb-12">
        <div className="space-y-4 sm:space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 leading-tight animate-slide-up">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              FairCorp
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in px-2">
            Your trusted provider for innovative solutions and exceptional service. 
            Discover our comprehensive range of services designed to meet your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-all duration-300 text-base sm:text-lg animate-scale-in w-full sm:w-auto"
            >
              Explore Services
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-400/10 hover:border-blue-300 hover:text-blue-200 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Quick Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50 hover:border-blue-700/70 hover:scale-105 hover:shadow-blue-700/40 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3 text-center">Fast & Efficient</h3>
          <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">Constantly taking feedback and improving our services while pioneering our next projects.</p>
        </div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50 hover:border-blue-700/70 hover:scale-105 hover:shadow-blue-700/40 transition-all duration-300">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-900/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-3 text-center">Reliable Service</h3>
          <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">24/7 services and quick responses to any questions or concerns.</p>
        </div>
        
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50 hover:border-blue-700/70 hover:scale-105 hover:shadow-blue-700/40 transition-all duration-300 sm:col-span-2 lg:col-span-1">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-900/50 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-green-300 mb-3 text-center">Expert Team</h3>
          <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed">Passionate and dedicated to our work, striving to provide the best service possible.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Home; 