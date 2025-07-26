import React from 'react';

const About: React.FC = () => (
  <section className="max-w-6xl mx-auto py-8 sm:py-12 px-4 animate-fade-in mt-16 sm:mt-20">
    {/* Hero Section */}
    <div className="text-center mb-8 sm:mb-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-4 sm:mb-6 animate-slide-up">
        About FairCorp
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
        Pioneering innovative solutions and exceptional experiences through technology, creativity, and unwavering commitment to excellence.
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
      {/* Company Story */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4 sm:mb-6 flex items-center">
          <span className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-blue-400 mr-3 sm:mr-4"></span>
          Our Story
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          Founded with the initial goal of creating the perfect game for the founders, FairCorp has evolved into a technological ecosystem of projects and products that we hope to might make a difference, however small, in the lives of an average person.
        </p>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          Today, we work tirelessly to create products and solutions at low expense to the consumer, while maintaining our core values of innovation, integrity, and collaboration.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4 sm:mb-6 flex items-center">
          <span className="w-6 h-0.5 sm:w-8 sm:h-0.5 bg-blue-400 mr-3 sm:mr-4"></span>
          Mission & Vision
        </h2>
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To empower businesses through innovative technology solutions while fostering a culture of continuous learning and sustainable growth.
            </p>
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              To be the leading force in innovation of advanced technology, making cutting-edge solutions accessible and affordable to organizations and individualsworldwide.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Core Values */}
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50 mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-6 sm:mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          {
            title: "Innovation",
            description: "Constantly pushing boundaries and exploring new possibilities in technology and business solutions."
          },
          {
            title: "Integrity",
            description: "Maintaining the highest ethical standards in all our interactions and business practices."
          },
          {
            title: "Collaboration",
            description: "Fostering partnerships and teamwork to achieve greater outcomes than individual efforts."
          },
          {
            title: "Excellence",
            description: "Striving for the highest quality in every project, service, and interaction."
          },
          {
            title: "Entertainment",
            description: "Creating engaging and enjoyable experiences that captivate and inspire our audiences."
          },
          {
            title: "Equal Opportunities",
            description: "Ensuring fair access to opportunities and resources for all stakeholders and communities."
          },
          {
            title: "Education",
            description: "Committed to continuous learning and knowledge sharing across our organization."
          },
          {
            title: "Sustainability",
            description: "Building solutions that are environmentally conscious and socially responsible."
          }
        ].map((value, index) => (
          <div key={index} className="bg-blue-900/20 rounded-lg p-4 sm:p-6 border border-blue-800/30 hover:border-blue-600/50 transition-all duration-300">
            <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2 sm:mb-3">{value.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* What We Do */}
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8 border border-blue-900/50 mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-6 sm:mb-8 text-center">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Technology Solutions</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Custom software development, web applications, and digital transformation services tailored to your business needs.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Business Growth</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Strategic consulting and scalable solutions to help businesses expand, optimize operations, and achieve sustainable growth.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Game Development</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Creating immersive gaming experiences with cutting-edge technology, engaging storytelling, and innovative gameplay mechanics.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Innovation & Education</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Research and development of cutting-edge technologies combined with educational programs to empower the next generation.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Easily Available Technology</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Making advanced technology accessible and affordable to everyone through user-friendly solutions and cost-effective implementations.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-blue-300 mb-2">Extending Opportunities to All</h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Creating inclusive pathways for individuals from all backgrounds to access technology, education, and career opportunities.
          </p>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl shadow-xl p-6 sm:p-8 border border-blue-800/50 text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-300 mb-3 sm:mb-4">Ready to Get Started?</h2>
      <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
        Discover how FairCorp Hub can transform your business with our innovative solutions and dedicated team of experts.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <a 
          href="/staff" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg text-sm sm:text-base"
        >
          Meet Our Team
        </a>
        <a 
          href="/contact" 
          className="border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default About; 