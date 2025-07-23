import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'With over 15 years of industry experience, Sarah leads FairCorp with vision and expertise.',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CTO',
    bio: 'David brings technical excellence and innovation to drive our technology strategy.',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    role: 'Head of Operations',
    bio: 'Michael ensures smooth day-to-day operations across all departments.',
  },
  {
    id: 4,
    name: 'Lisa Taylor',
    role: 'Chief Marketing Officer',
    bio: 'Lisa crafts our brand story and oversees all marketing initiatives.',
  },
  {
    id: 5,
    name: 'James Wilson',
    role: 'Lead Developer',
    bio: 'James leads our development team with innovative solutions and technical expertise.',
  },
  {
    id: 6,
    name: 'Emily Chang',
    role: 'Customer Success Manager',
    bio: 'Emily ensures our clients receive exceptional support and achieve their goals.',
  },
];

const Staff: React.FC = () => (
  <section className="py-8 animate-fade-in">
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-8 border border-blue-900 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">Our Team</h1>
      <p className="text-lg text-gray-200 mb-8">
        Meet the dedicated professionals who make FairCorp a leader in the industry.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-gray-800/70 backdrop-blur-xs rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-200">{member.name}</h2>
            <p className="text-blue-400 mb-2">{member.role}</p>
            <p className="text-gray-300">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Staff; 