import React from 'react';

const services = [
  {
    id: 1,
    title: 'Cloud Solutions',
    description: 'Enterprise-grade cloud infrastructure and services for businesses of all sizes. Includes storage, computing, and managed services.',
    link: 'https://cloud.faircorp.example.com',
  },
  {
    id: 2,
    title: 'Data Analytics',
    description: 'Advanced analytics solutions to help you understand your data and make informed business decisions.',
    link: 'https://analytics.faircorp.example.com',
  },
  {
    id: 3,
    title: 'Digital Transformation',
    description: 'Comprehensive consulting and implementation services to modernize your business processes and technology.',
    link: 'https://transform.faircorp.example.com',
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Protect your business with our enterprise security solutions, including threat detection, prevention, and response.',
    link: 'https://security.faircorp.example.com',
  },
  {
    id: 5,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business.',
    link: 'https://ai.faircorp.example.com',
  },
];

const Services: React.FC = () => (
  <section className="py-8 animate-fade-in">
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-8 border border-blue-900 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">Our Services</h1>
      <p className="text-lg text-gray-200 mb-8">
        FairCorp offers a comprehensive range of services designed to help businesses thrive in the digital age. Explore our offerings below:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-800/70 backdrop-blur-xs rounded-xl p-6 border border-gray-700 hover:border-blue-600 transition-all duration-300 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-200 mb-3">{service.title}</h2>
            <p className="text-gray-300 mb-4 h-24">{service.description}</p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 