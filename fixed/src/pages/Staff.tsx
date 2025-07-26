import React from 'react';
import { motion } from 'framer-motion';

// TypeScript interface for staff member data
interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string; // Optional profile image URL
  linkedin?: string; // Optional LinkedIn profile
  email?: string; // Optional email
}

// Staff members data - easily extensible
const staffMembers: StaffMember[] = [
  {
    id: 'andrew-fairbank',
    name: 'Andrew Fairbank',
    role: 'CO-Founder',
    bio: '.',
  },
  {
    id: 'brennan-faires',
    name: 'Brennan Faires',
    role: 'CO-Founder',
    bio: 'Currently a student at the University of Colorado Boulder, Brennan is an aspiring software engineer with his sights set on future advancements in medical technology and AI.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.13, duration: 0.5, type: 'spring', bounce: 0.2 },
  }),
};

const Staff: React.FC = () => {
  // Calculate grid columns based on number of staff members
  const getGridCols = () => {
    if (staffMembers.length <= 2) return 'sm:grid-cols-2';
    if (staffMembers.length <= 4) return 'sm:grid-cols-2 lg:grid-cols-3';
    return 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 animate-fade-in mt-16 sm:mt-20">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-3 sm:mb-4 animate-slide-up">Our Team</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
          Meet the passionate individuals behind our mission to innovate and create impactful solutions.
        </p>
      </div>
      
      <div className={`grid grid-cols-1 ${getGridCols()} gap-6 sm:gap-8 max-w-4xl mx-auto`}>
        {staffMembers.map((member, idx) => (
          <motion.div
            key={member.id}
            className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center border border-blue-900/50 hover:border-blue-700/70 hover:scale-105 hover:shadow-blue-700/40 transition-all duration-300 animate-scale-in"
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0 0 0 2px #38bdf8, 0 8px 32px #0ea5e9aa',
              y: -4
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Profile Image Placeholder */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mb-4 sm:mb-6 border-4 border-blue-700 shadow-lg animate-fade-in flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold text-blue-300">
                {member.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            {/* Member Info */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">{member.name}</h3>
              <p className="text-blue-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{member.bio}</p>
            </div>
            
            {/* Social Links (if available) */}
            {(member.linkedin || member.email) && (
              <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Add Member Button (for future use) */}
      {staffMembers.length === 0 && (
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-500 mb-4">No team members added yet.</p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base">
            Add Team Member
          </button>
        </div>
      )}
    </section>
  );
};

export default Staff; 