import React from 'react';
import { Palette, Code, Calendar, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A passionate designer and developer creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At 24, I've spent the last year mastering the art of UI/UX design, 
                creating user-centered experiences that not only look beautiful but solve 
                real problems. Recently, I've expanded my toolkit by diving into frontend 
                development, bringing my designs to life with clean, efficient code.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Based in the vibrant tech hub of Lagos, Nigeria, I'm passionate about 
                creating digital solutions that resonate with users across cultures and 
                contexts. Every project is an opportunity to learn, grow, and make an impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl text-center hover-lift hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                <Palette className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">UI/UX Design</h4>
                <p className="text-sm text-gray-600">1 Year Experience</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl text-center hover-lift hover:bg-teal-100 transition-all duration-300 transform hover:scale-105">
                <Code className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Frontend Dev</h4>
                <p className="text-sm text-gray-600">6 Months Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What Drives Me
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>User-Centered Design:</strong> Every pixel serves a purpose, 
                    every interaction tells a story.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>Continuous Learning:</strong> The tech world never stops evolving, 
                    and neither do I.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>Impact Through Design:</strong> Creating solutions that improve 
                    lives, one interface at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl text-center hover-lift hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Age</h4>
                <p className="text-sm text-gray-600">24 Years</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center hover-lift hover:bg-green-100 transition-all duration-300 transform hover:scale-105">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-sm text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;