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
  <section className="max-w-4xl mx-auto py-12 animate-fade-in">
    <h2 className="text-3xl font-bold text-blue-300 mb-8 animate-slide-up">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: 'QCO_AV3',
          desc: "Advanced AI Code Generation and Project Automation. Access the QCO_AV3 platform under the FairCorp domain.",
          link: '/QCO',
          cta: 'Go to QCO_AV3',
        },
        {
          title: 'Service Two',
          desc: 'Description coming soon...',
          link: '',
          cta: '',
        },
        {
          title: 'Service Three',
          desc: 'Description coming soon...',
          link: '',
          cta: '',
        },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          className="bg-gray-900/80 backdrop-blur-xs rounded-xl shadow-xl p-6 flex flex-col justify-between border border-blue-900 hover:scale-105 hover:shadow-blue-700/40 transition-transform duration-200 animate-scale-in"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          whileHover={{ scale: 1.04, boxShadow: '0 0 0 2px #38bdf8, 0 8px 32px #0ea5e9aa' }}
          whileTap={{ scale: 0.98 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{card.title}</h3>
            <p className="text-gray-300 mb-4">{card.desc}</p>
          </div>
          {card.link ? (
            <Link
              to={card.link}
              className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium rounded hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-all duration-200"
            >
              {card.cta}
            </Link>
          ) : (
            <span className="text-blue-700 text-4xl">+</span>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default Services; 