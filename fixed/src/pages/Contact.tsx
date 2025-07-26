import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 animate-fade-in mt-16 sm:mt-20">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-4 sm:mb-6 animate-slide-up">
          Contact Information
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
          We're currently building our infrastructure and establishing official contact channels.
        </p>
      </div>
      
      <motion.div
        className="bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 border border-blue-900/50 animate-scale-in"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center space-y-6">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300 mb-4 sm:mb-6">
              Infrastructure Development
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              We are currently in the process of setting up our official company infrastructure, 
              including dedicated contact systems, customer support channels, and business operations. 
              This is an exciting phase of our company's growth as we establish our foundation.
            </p>
          </div>
          
          <div className="bg-blue-900/20 border border-blue-800/50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-300 mb-4 sm:mb-6">
              For Immediate Inquiries
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
              If you have questions, partnership opportunities, or would like to discuss potential collaborations, 
              please reach out to our development team directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-300 font-medium">Developer Contact:</span>
              </div>
              <a 
                href="mailto:balfagorg@gmail.com"
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors duration-200 break-all"
              >
                balfagorg@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-gray-400 text-sm sm:text-base">
            <p>
              We appreciate your patience as we build our company infrastructure. 
              Official contact channels and customer support systems will be available soon.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact; 