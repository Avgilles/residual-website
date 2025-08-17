import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">residual</span>
            </div>
            <p className="text-blue-200 text-lg leading-relaxed mb-6 max-w-md">
              Creating socially and environmentally conscious VR experiences that inspire 
              positive change and connection.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Conscious Technology • Sustainable Design</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">VR Experience Design</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">Interactive Installations</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">Custom Development</a></li>
              <li><a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:hello@residual.studio" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">
                  hello@residual.studio
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+15551234567" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-blue-300">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-300 text-sm">
              © {currentYear} residual creative studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-blue-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Sustainability
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;