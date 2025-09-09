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
            A passionate designer and developer creating digital experiences that solve real problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl hover-lift hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Discovery Into Design & Development
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I discovered my passion for UI/UX design through a simple frustration: every app I used daily 
                had something that bothered me. Small details like confusing navigation, overwhelming interfaces, 
                or features that seemed designed for the designer rather than the user. I realized I wasn't 
                just being picky - I was thinking like a designer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over the past year, I've immersed myself in user-centered design principles, learning that 
                good design isn't about making things look pretty - it's about solving real problems. 
                Six months ago, I evolved into frontend development to bridge the gap between design thinking 
                and building functional solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Based in Lagos, Nigeria, I understand that good design must work across different devices, 
                connection speeds, and user contexts - not just in ideal conditions. Every project starts 
                with the question: "What problem am I really solving?"
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
                My Problem-Solving Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>User-Centered Thinking:</strong> I start by understanding the real problem users face, 
                    not just what they say they need. Every interface decision serves a purpose in the user's journey.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>Build-Measure-Learn:</strong> I learn best by building things that solve real problems. 
                    Each project represents a learning journey where I tackle specific challenges and grow my skills.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                  <p className="text-gray-700">
                    <strong>Bridge Design & Development:</strong> I understand both domains because the best 
                    digital experiences come from knowing how design decisions affect implementation and user experience.
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