import React from 'react';
import { Zap, Globe, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Environmental Consciousness',
      description: 'Every project considers its environmental impact, promoting sustainability through immersive storytelling.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Social Responsibility',
      description: 'We create experiences that foster empathy, connection, and positive social change.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      description: 'Our work transcends boundaries, connecting diverse communities through shared virtual experiences.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of VR technology to create meaningful, transformative experiences.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">residual</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking creative studio dedicated to crafting VR experiences that matter. 
            Our work exists at the intersection of technology, art, and consciousness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-blue-200 mb-6 leading-relaxed">
              In a world increasingly disconnected from nature and each other, we believe virtual reality 
              can serve as a bridge connecting people to environments, emotions, and experiences that 
              inspire positive change.
            </p>
            <p className="text-lg text-blue-200 mb-6 leading-relaxed">
              Our work goes beyond entertainment. We create spaces for reflection, healing, and growth, 
              where users can explore abstract digital landscapes that mirror the complexity and beauty 
              of our natural world.
            </p>
            <p className="text-lg text-blue-200 leading-relaxed">
              Each project is carefully crafted to leave a positive residual impact on both the 
              individual and the collective consciousness.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-800/30 to-indigo-800/30 rounded-3xl overflow-hidden backdrop-blur-sm border border-blue-700/30">
              <div className="absolute inset-8 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mb-4 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-cyan-400 font-semibold">Conscious Creation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl bg-blue-800/20 hover:bg-blue-800/30 backdrop-blur-sm border border-blue-700/30 transition-all duration-300 transform hover:scale-105">
              <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-blue-200 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;