import React from 'react';
import { Headphones, Palette, Code, Users, Zap, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'VR Experience Design',
      description: 'End-to-end design and development of immersive VR experiences tailored to your vision and objectives.',
      features: ['Concept Development', 'User Experience Design', 'Prototype Testing', 'Final Implementation']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Interactive Installations',
      description: 'Large-scale interactive installations for museums, galleries, and public spaces that engage and educate.',
      features: ['Spatial Design', 'Multi-user Support', 'Custom Hardware', 'Maintenance Support']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom VR Development',
      description: 'Bespoke VR applications built from the ground up using cutting-edge technology and creative innovation.',
      features: ['Unity Development', 'Cross-platform Support', 'Performance Optimization', 'Quality Assurance']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consultation & Strategy',
      description: 'Expert guidance on VR strategy, technology selection, and project planning for your organization.',
      features: ['Technology Assessment', 'Project Planning', 'Team Training', 'Long-term Strategy']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and audience through comprehensive research and analysis.'
    },
    {
      step: '02',
      title: 'Concept',
      description: 'Developing creative concepts and technical approaches that align with your objectives.'
    },
    {
      step: '03',
      title: 'Prototype',
      description: 'Building interactive prototypes to test and refine the user experience.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Full-scale development with regular feedback cycles and quality assurance.'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deployment, user training, and ongoing support to ensure project success.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive VR development services 
            that bring your vision to life with purpose and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-blue-800/20 hover:bg-blue-800/30 backdrop-blur-sm border border-blue-700/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-blue-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm border border-blue-700/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Process</span>
            </h3>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              A collaborative approach that ensures every project delivers meaningful impact 
              and exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    {phase.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-cyan-400/30 -translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{phase.title}</h4>
                <p className="text-sm text-blue-200 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;