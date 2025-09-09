import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Favour Ifunanya Nwokocha</h3>
            <p className="text-gray-400">UI/UX Designer & Frontend Developer</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Lagos, Nigeria</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              © 2024 Favour Nwokocha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;