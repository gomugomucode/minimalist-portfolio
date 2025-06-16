import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Get In Touch</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Looking for opportunities to collaborate and grow as a developer! 
              Whether you have a project in mind or want to discuss tech, anime, or the beauty of minimal code, 
              feel free to reach out! 🚀
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={20} />
                <a href="mailto:alinedtwins@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">alinedtwins@gmail.com</a>
              </div>
              <div className="flex items-center space-x-4">
                <Github className="text-blue-400" size={20} />
                <a href="https://github.com/gomugomucode" className="text-gray-300 hover:text-blue-400 transition-colors">
                  github.com/gomugomucode
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Linkedin className="text-blue-400" size={20} />
                <a href="https://www.linkedin.com/in/unish06/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  linkedin.com/in/unish06
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleFormSubmit}
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;