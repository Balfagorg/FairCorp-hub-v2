import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, type: 'spring', bounce: 0.2 },
  }),
};

const Services: React.FC = () => (
  <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 animate-fade-in mt-16 sm:mt-20">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 animate-slide-up">
        Our Services
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
        Innovative solutions for modern businesses. From AI-powered development to specialized applications.
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {[
        {
          title: 'FairCorp CodeGenie (Beta)',
          desc: "Advanced AI Code Generation and Project Automation. This product features advanced file management and safe storage of your projects, as well as a rich platform for AI-powered project assistance.",
          link: '/QCO',
          cta: 'Go to FC CodeGenie',
          icon: '🚀',
          status: 'active'
        },
        {
          title: 'Taxi Dispatch Platform',
          desc: 'Comprehensive taxi management system with real-time tracking, driver management, and passenger booking capabilities. Fares are affordable and drivers are paid exceptionally well.',
          link: '',
          cta: 'Coming Soon',
          icon: '🚕',
          status: 'development'
        },
        {
          title: 'Freelance Audit System',
          desc: 'Professional audit and compliance management platform for freelance professionals and small businesses. This system is designed to help freelancers and small business manage their finances and operations.',
          link: '',
          cta: 'Coming Soon',
          icon: '📊',
          status: 'development'
        },
        {
          title: 'More to Come',
          desc: 'We\'re constantly developing new innovative solutions. Stay tuned for our latest offerings.',
          link: '',
          cta: '',
          icon: '✨',
          status: 'future'
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 flex flex-col justify-between border border-blue-900/50 hover:border-blue-700/70 hover:scale-105 hover:shadow-blue-700/40 transition-all duration-300 animate-scale-in min-h-[240px] sm:min-h-[280px]"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 0 0 2px #38bdf8, 0 8px 32px #0ea5e9aa' }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{card.icon}</span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400">{card.title}</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{card.desc}</p>
            
            {card.status === 'active' && (
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm sm:text-base font-medium">Live</span>
              </div>
            )}
            
            {card.status === 'development' && (
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-yellow-400 text-sm sm:text-base font-medium">In Development</span>
              </div>
            )}
            
            {card.status === 'future' && (
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-purple-400 text-sm sm:text-base font-medium">Future Project</span>
              </div>
            )}
          </div>
          
          <div className="mt-auto">
            {card.link ? (
              <Link
                to={card.link}
                className="inline-block w-full text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded-lg hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-all duration-200 shadow-lg hover:shadow-blue-600/25 text-sm sm:text-base"
              >
                {card.cta}
              </Link>
            ) : card.status === 'development' ? (
              <button
                disabled
                className="inline-block w-full text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-gray-300 font-medium rounded-lg cursor-not-allowed opacity-75 text-sm sm:text-base"
              >
                {card.cta}
              </button>
            ) : (
              <div className="text-center">
                <span className="text-purple-400 text-3xl sm:text-4xl">+</span>
                <p className="text-gray-500 text-sm sm:text-base mt-2">Future Innovation</p>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-12 sm:mt-16 text-center">
      <p className="text-gray-400 text-sm sm:text-base px-2">
        Interested in our services? <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Contact us</Link> to learn more about our solutions.
      </p>
    </div>
  </section>
);

export default Services; 