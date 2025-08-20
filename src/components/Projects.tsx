import React, { useState, useEffect } from 'react';
import { ExternalLink, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Fermer la modal avec la touche Escape
  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const projects = [
    {
      title: 'Residual',
      subtitle: 'Meditative VR Installation',
      description: 'An immersive journey through an abstract digital ecosystem where users explore organic forms, ambient soundscapes, and interactive elements that respond to their presence and movements.',
      image: './public/imgs/project/residual_project.png',
      features: ['Procedural Generation', 'Binaural Audio', 'Gesture Recognition', 'Adaptive Environment'],
      status: 'Featured Project',
      year: '2025',
      video: '/public/imgs/project/Trailer_V004.mp4'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Transformative VR experiences designed to inspire, heal, and connect. 
            Each project represents our commitment to conscious technology.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Featured Project' ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30' :
                      project.status === 'In Development' ? 'bg-orange-400/20 text-orange-400 border border-orange-400/30' :
                      'bg-blue-400/20 text-blue-400 border border-blue-400/30'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-blue-300 text-sm font-medium">{project.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xl text-cyan-400 font-medium mb-4">{project.subtitle}</p>
                </div>
                
                <p className="text-lg text-blue-200 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-blue-200 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                    onClick={() => setShowModal(true)}
                  >
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <Link 
                    to="/project/residual"
                    className="border-2 border-blue-400/30 hover:border-cyan-400 text-blue-200 hover:text-cyan-400 px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block text-center"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal vidéo projet */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="relative w-full max-w-3xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <video controls autoPlay className="w-full rounded-lg shadow-lg">
                <source src={projects[0].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
