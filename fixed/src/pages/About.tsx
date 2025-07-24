import React from 'react';

const About: React.FC = () => (
  <section className="max-w-3xl mx-auto py-12 animate-fade-in">
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-10 border border-blue-900">
      <h2 className="text-3xl font-bold text-blue-300 mb-4 animate-slide-up">About FairCorp Hub</h2>
      <p className="text-lg text-gray-300 mb-6 animate-fade-in">
        Welcome to FairCorp Hub, the central gateway to all things FairCorp. Our mission is to deliver innovative solutions and exceptional service to our clients and partners.
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Our Mission</h3>
        <p className="text-gray-300">To empower businesses and individuals through technology, integrity, and collaboration.</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-2">Our Values</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Collaboration</li>
          <li>Excellence</li>
        </ul>
      </div>
      <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
        <span className="text-blue-300 font-medium">Meet Our Team:</span> See the <a href="/staff" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-all duration-200">Staff</a> page for more about our people.
      </div>
    </div>
  </section>
);

export default About; 