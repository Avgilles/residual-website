import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Creative Director & Founder',
      bio: 'Visionary artist with 10+ years in immersive media, passionate about conscious technology and environmental storytelling.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'residual.immersive@gmail.com'
      }
    },
    {
      name: 'Maya Rodriguez',
      role: 'Lead VR Developer',
      bio: 'Technical innovator specializing in Unity and immersive experiences, dedicated to pushing the boundaries of virtual reality.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'residual.immersive@gmail.com'
      }
    },
    {
      name: 'Jordan Kim',
      role: 'UX Designer',
      bio: 'Human-centered designer focused on creating intuitive and meaningful interactions in virtual environments.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'residual.immersive@gmail.com'
      }
    },
    {
      name: 'Sam Thompson',
      role: 'Sound Designer',
      bio: 'Audio architect crafting immersive soundscapes that enhance the emotional depth of virtual experiences.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'residual.immersive@gmail.com'
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-cyan-400">Team</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A collective of passionate creators, technologists, and visionaries united by our mission 
            to craft meaningful immersive experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm border border-blue-700/30 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-cyan-400/30 group-hover:ring-cyan-400/60 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-full"></div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium text-sm">{member.role}</p>
                </div>
                
                <p className="text-blue-200 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-3">
                  <a 
                    href={member.social.linkedin}
                    className="p-2 rounded-full bg-blue-800/50 hover:bg-cyan-500 text-blue-200 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="p-2 rounded-full bg-blue-800/50 hover:bg-cyan-500 text-blue-200 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-full bg-blue-800/50 hover:bg-cyan-500 text-blue-200 hover:text-white transition-all duration-200 hover:scale-110"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;