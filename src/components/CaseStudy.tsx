import React from 'react';
import { ArrowLeft, Calendar, Users, Target, Lightbulb, Code, TestTube, Rocket, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Residual <span className="text-cyan-400">Case Study</span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            How we created an immersive VR meditation experience that transforms digital wellness
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
           <video 
                  controls 
                  className="w-full h-64 md:h-80 object-cover"
                  poster="/imgs/project/residual_project.png"
                >
                  <source src="/imgs/project/Trailer_V004.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20">
                <Calendar className="text-cyan-400 mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Timeline</h3>
                <p className="text-blue-200">6 months</p>
              </div>
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20">
                <Users className="text-cyan-400 mb-3" size={24} />
                <h3 className="text-white font-semibold mb-2">Team Size</h3>
                <p className="text-blue-200">4 specialists</p>
              </div>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20">
              <Target className="text-cyan-400 mb-3" size={24} />
              <h3 className="text-white font-semibold mb-2">Objective</h3>
              <p className="text-blue-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>

        {/* Process Sections */}
        <div className="space-y-20">
          {/* Research & Ideation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-3 rounded-full">
                <Lightbulb className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Research & Ideation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">Discovery Phase</h3>
                <p className="text-blue-200 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Sed do eiusmod tempor incididunt ut labore et dolore</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Ut enim ad minim veniam, quis nostrud exercitation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-200">Ullamco laboris nisi ut aliquip ex ea commodo</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-3 rounded-full">
                <Code className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Development Process</h2>
            </div>
            {/* Timeline */}
            <div className="flex flex-col md:flex-row gap-8 mb-12 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-cyan-400/30 p-3 rounded-full mb-2">
                  <Calendar className="text-cyan-400" size={24} />
                </div>
                <span className="text-white font-semibold">Kickoff</span>
                <span className="text-blue-200 text-sm">Ideation & Planning</span>
              </div>
              <div className="h-1 md:w-24 w-1 bg-cyan-400/30 mx-4 md:mx-8 rounded"></div>
              <div className="flex flex-col items-center">
                <div className="bg-cyan-400/30 p-3 rounded-full mb-2">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <span className="text-white font-semibold">Development</span>
                <span className="text-blue-200 text-sm">Prototyping & Implementation</span>
              </div>
              <div className="h-1 md:w-24 w-1 bg-cyan-400/30 mx-4 md:mx-8 rounded"></div>
              <div className="flex flex-col items-center">
                <div className="bg-cyan-400/30 p-3 rounded-full mb-2">
                  <TestTube className="text-cyan-400" size={24} />
                </div>
                <span className="text-white font-semibold">Testing</span>
                <span className="text-blue-200 text-sm">Validation & Feedback</span>
              </div>
              <div className="h-1 md:w-24 w-1 bg-cyan-400/30 mx-4 md:mx-8 rounded"></div>
              <div className="flex flex-col items-center">
                <div className="bg-cyan-400/30 p-3 rounded-full mb-2">
                  <Rocket className="text-cyan-400" size={24} />
                </div>
                <span className="text-white font-semibold">Launch</span>
                <span className="text-blue-200 text-sm">Deployment</span>
              </div>
            </div>
            {/* Columns */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 flex flex-col items-start">
                <div className="mb-3">
                  <Code className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technical Stack</h3>
                <ul className="space-y-2 list-disc list-inside text-blue-200">
                  <li>Unity 3D Engine</li>
                  <li>Oculus SDK</li>
                  <li>C# Scripting</li>
                  <li>Procedural Generation</li>
                  <li>Spatial Audio</li>
                </ul>
              </div>
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 flex flex-col items-start">
                <div className="mb-3">
                  <Lightbulb className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features</h3>
                <ul className="space-y-2 list-disc list-inside text-blue-200">
                  <li>Gesture Recognition</li>
                  <li>Adaptive Environment</li>
                  <li>Binaural Audio</li>
                  <li>Real-time Interaction</li>
                  <li>Meditation Guidance</li>
                </ul>
              </div>
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 flex flex-col items-start">
                <div className="mb-3">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Challenges</h3>
                <ul className="space-y-2 list-disc list-inside text-blue-200 text-sm">
                  <li>Performance optimization for VR hardware</li>
                  <li>Balancing immersion and accessibility</li>
                  <li>Integrating real-time gesture recognition</li>
                  <li>Designing adaptive environments</li>
                  <li>Ensuring audio spatialization quality</li>
                </ul>
              </div>
            </div>
            {/* Breakdown Video */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">Development Breakdown</h3>
                <div className="relative bg-blue-900/30 rounded-xl border border-blue-500/20 overflow-hidden shadow-2xl">
                  <video 
                    controls 
                    className="w-full h-64 md:h-80 object-cover"
                    poster="/imgs/project/residual_project.png"
                  >
                    <source src="/imgs/project/breakdown3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded">
                    Full technical breakdown of the Residual project
                  </div>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Go behind the scenes and discover the technical processes, creative decisions, and development challenges that shaped the Residual experience.
                </p>
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-cyan-400">Highlights</h3>
                <ul className="space-y-2 list-disc list-inside text-blue-200 text-sm">
                  <li>Rapid prototyping using Unity and C#</li>
                  <li>Iterative design with user feedback</li>
                  <li>Custom procedural generation algorithms</li>
                  <li>Integration of spatial audio for immersion</li>
                  <li>Testing and optimization for VR platforms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Testing & Validation */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-3 rounded-full">
                <TestTube className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Testing & Validation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">User Testing</h3>
                <p className="text-blue-200 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-blue-200 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400">Results & Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-cyan-400">95%</div>
                    <div className="text-sm text-blue-200">User Satisfaction</div>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-cyan-400">87%</div>
                    <div className="text-sm text-blue-200">Stress Reduction</div>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-cyan-400">12min</div>
                    <div className="text-sm text-blue-200">Avg. Session</div>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20 text-center">
                    <div className="text-2xl font-bold text-cyan-400">4.8/5</div>
                    <div className="text-sm text-blue-200">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Launch & Impact */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400/20 p-3 rounded-full">
                <Rocket className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Launch & Impact</h2>
            </div>
            <div className="bg-blue-900/30 p-8 rounded-xl border border-blue-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Project Outcomes</h3>
                  <p className="text-blue-200 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-blue-200 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Future Developments</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">Enhanced AI-driven personalization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">Multi-platform compatibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">Social meditation experiences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-blue-200">Advanced biometric integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create your next groundbreaking VR experience
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
