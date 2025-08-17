import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@residual.studio',
      link: 'mailto:hello@residual.studio'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: 'Schedule',
      value: 'Book a Meeting',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create <span className="text-cyan-400">Together</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We'd love to hear about your project 
            and explore how we can create something meaningful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Let's start a conversation about how VR can serve your mission.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-blue-800/20 hover:bg-blue-800/30 backdrop-blur-sm border border-blue-700/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-300 uppercase tracking-wide">{info.label}</p>
                    <p className="text-lg font-semibold text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Why Work With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-blue-200">Expertise in conscious technology and sustainable design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-blue-200">Collaborative approach with transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-blue-200">Focus on meaningful impact and user well-being</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-blue-200">Proven track record in immersive experience design</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-800/20 backdrop-blur-sm border border-blue-700/30 rounded-3xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors duration-200 text-white placeholder-blue-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors duration-200 text-white placeholder-blue-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-200 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors duration-200 text-white placeholder-blue-300"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-blue-200 mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors duration-200 text-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="vr-experience">VR Experience</option>
                    <option value="installation">Interactive Installation</option>
                    <option value="consultation">Consultation</option>
                    <option value="custom">Custom Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-blue-600/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors duration-200 resize-none text-white placeholder-blue-300"
                  placeholder="Tell us about your project, goals, and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;