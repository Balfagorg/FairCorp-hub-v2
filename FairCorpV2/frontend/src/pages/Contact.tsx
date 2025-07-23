import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact: React.FC = () => (
  <section className="py-8 animate-fade-in">
    <div className="bg-gray-900/80 backdrop-blur-xs rounded-2xl shadow-xl p-8 border border-blue-900 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-gray-200 mb-6">
            We'd love to hear from you! Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-blue-300">Address:</span><br />
              123 Tech Park Avenue,<br />
              Innovation District,<br />
              San Francisco, CA 94107
            </p>
            <p>
              <span className="font-semibold text-blue-300">Email:</span><br />
              info@faircorp.example.com
            </p>
            <p>
              <span className="font-semibold text-blue-300">Phone:</span><br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 