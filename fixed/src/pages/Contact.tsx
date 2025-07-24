import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent! We will get back to you soon.');
    }, 1200);
  };

  return (
    <section className="max-w-2xl mx-auto py-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 animate-slide-up">Contact Us</h2>
      <motion.form
        className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-6 mb-8 border border-blue-900 animate-scale-in"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 rounded border border-blue-800 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" id="name" type="text" placeholder="Your Name" required disabled={loading} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 rounded border border-blue-800 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" id="email" type="email" placeholder="you@example.com" required disabled={loading} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 rounded border border-blue-800 bg-gray-950 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200" id="message" rows={4} placeholder="How can we help you?" required disabled={loading} />
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded font-semibold hover:scale-105 hover:from-blue-500 hover:to-blue-300 transition-all duration-200 animate-pulse-slow flex items-center justify-center min-w-[140px]" disabled={loading}>
          {loading ? (
            <motion.span
              className="inline-block h-5 w-5 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin mr-2"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
            />
          ) : null}
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
      <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded animate-fade-in">
        <h3 className="text-lg font-semibold text-blue-300 mb-2">Company Contact Info</h3>
        <p className="text-gray-300">Email: info@faircorp.com</p>
        <p className="text-gray-300">Phone: (123) 456-7890</p>
        <p className="text-gray-300">123 Main St, City, Country</p>
      </div>
    </section>
  );
}

export default Contact; 