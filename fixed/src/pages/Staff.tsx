import React from 'react';
import { motion } from 'framer-motion';

const staffMembers = [
  { name: 'Jane Doe', role: 'CEO', bio: 'Visionary leader with a passion for innovation.' },
  { name: 'John Smith', role: 'CTO', bio: 'Tech enthusiast and architect of scalable solutions.' },
  { name: 'Alex Lee', role: 'COO', bio: 'Operations expert ensuring seamless execution.' },
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

const Staff: React.FC = () => (
  <section className="max-w-4xl mx-auto py-12 animate-fade-in">
    <h2 className="text-3xl font-bold text-blue-300 mb-8 animate-slide-up">Our Team</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {staffMembers.map((member, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-900/80 backdrop-blur-xs rounded-xl shadow-xl p-6 flex flex-col items-center border border-blue-900 hover:scale-105 hover:shadow-blue-700/40 transition-transform duration-200 animate-scale-in"
          custom={idx}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: '0 0 0 2px #38bdf8, 0 8px 32px #0ea5e9aa' }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-20 h-20 bg-blue-900 rounded-full mb-4 border-4 border-blue-700 shadow-lg animate-fade-in" />
          <h3 className="text-xl font-semibold text-blue-400 mb-1">{member.name}</h3>
          <p className="text-gray-300 mb-2">{member.role}</p>
          <p className="text-gray-400 text-center text-sm">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Staff; 