import React from 'react';

const About: React.FC = () => (
  <section className="py-8 animate-fade-in">
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-8 border border-blue-900">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">About FairCorp</h1>
      <div className="space-y-6 text-gray-200">
        <p className="text-lg">
          FairCorp is a forward-thinking company dedicated to providing innovative solutions across multiple sectors. Founded in 2010, we've grown from a small startup to a trusted industry leader with a global presence.
        </p>
        <p className="text-lg">
          Our mission is to deliver exceptional services that empower businesses and individuals to achieve their goals through cutting-edge technology and sustainable practices.
        </p>
        <h2 className="text-2xl font-semibold text-blue-200 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Innovation and excellence in everything we do</li>
          <li>Transparency and integrity in our business practices</li>
          <li>Customer satisfaction as our top priority</li>
          <li>Environmental responsibility and sustainable operations</li>
          <li>Community engagement and social impact</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 