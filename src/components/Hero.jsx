import React from 'react';
import { ArrowDown, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="flex flex-col items-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl ring-4 ring-white transform transition-all duration-500 hover:scale-110 hover:ring-8 hover:ring-blue-200">
              <img
                src="./Images/headshot.jpg"
                alt="Favour Ifunanya Nwokocha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 animate-text-reveal">
              <span className="text-blue-600">Favour</span>{' '}
              <span className="text-teal-600">Ifunanya</span>
              <br />
              <span className="text-gray-700">Nwokocha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              UI/UX Designer & Frontend Developer crafting beautiful, 
              functional digital experiences from Lagos, Nigeria
            </p>

            <div className="flex items-center justify-center space-x-2 text-gray-500 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <MapPin size={20} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg animate-bounce-subtle"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <ArrowDown size={24} className="text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;