import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors duration-200"
        >
          <X size={32} />
        </button>
        
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1200"
          >
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Digital Garden Experience</h3>
          <p className="text-blue-200">A meditative journey through abstract digital landscapes</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;