import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Code, Zap, Target, CheckCircle } from 'lucide-react';

const BookishCaseStudy = ({ onBack }) => {
  const techStack = [
    'React', 'JavaScript', 'CSS3', 'Google Books API', 'LocalStorage', 'Vite'
  ];

  const keyFeatures = [
    {
      title: 'Smart Book Search',
      description: 'Google Books API integration with data normalization for consistent results',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Progress Tracking',
      description: 'Percentage-based progress system that works with any book format',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Reading Analytics',
      description: 'Personal insights including reading velocity, genre preferences, and streaks',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: 'Data Ownership',
      description: 'Complete export/import functionality with no vendor lock-in',
      icon: <User className="w-6 h-6" />
    }
  ];

  const challenges = [
    {
      problem: "Fragmented tracking across multiple apps",
      solution: "Built complete reading lifecycle in one intuitive interface"
    },
    {
      problem: "Data lock-in with existing platforms",
      solution: "Implemented export/import with full data portability"
    },
    {
      problem: "Overwhelming social features when wanting personal tracking",
      solution: "Created privacy-first, personal-focused experience"
    }
  ];

  const technicalAchievements = [
    "Zero runtime errors in production after 3 months",
    "Sub-2 second load times on 3G connections", 
    "100% responsive across all tested devices",
    "Offline functionality with service worker implementation"
  ];

  const learnings = [
    "State structure should mirror real-world user workflows",
    "User-centered design drives better technical decisions",
    "Building for personal use provides immediate, honest feedback",
    "Data ownership is crucial for user trust and adoption"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Book-Finder</h1>
              <p className="text-xl text-gray-600">A Personal Reading Journey Tracker</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a
                href="https://mybookfinder-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a
                href="https://github.com/Favour-codes23/book-finder.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Problem Statement */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-gray-900">The Problem I Identified</h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As someone who reads multiple books simultaneously, I struggled with existing reading tracking solutions. 
              Most apps either prioritize social features over personal tracking or lack the comprehensive progress 
              monitoring that serious readers need.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-red-600 mb-3">Challenge</h4>
                  <p className="text-gray-700 mb-4 text-sm">{challenge.problem}</p>
                  <h4 className="font-semibold text-green-600 mb-2">My Solution</h4>
                  <p className="text-gray-700 text-sm">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Role:</span>
                    <span className="font-medium">Solo Full-Stack Frontend Developer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">Live Production</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                I wanted to create a solution that would track the complete reading journey from discovery to completion, 
                provide meaningful analytics, work offline-first without requiring user accounts, and feel warm and 
                inviting rather than clinical. The focus was on creating a personal-first experience that respects 
                user privacy and data ownership.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features & Innovations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex space-x-4 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Architecture Decisions</h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    <strong>React State Management:</strong> I chose React's built-in state management over external 
                    libraries because the app's state is relatively simple and I wanted to keep the bundle size minimal.
                  </p>
                  <p className="text-gray-700">
                    <strong>LocalStorage Strategy:</strong> Instead of requiring user accounts, I implemented a robust 
                    localStorage system with automatic backups and error handling for storage quota issues.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">API Integration Challenges</h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    <strong>Google Books API Limitations:</strong> The API had inconsistent data quality and rate limiting issues.
                  </p>
                  <p className="text-gray-700">
                    <strong>My Solution:</strong> Built a data normalization layer that handles missing fields gracefully 
                    and implemented request debouncing with fallback search strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Learnings */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Key Learnings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Technical Achievements</h3>
                </div>
                <ul className="space-y-3">
                  {technicalAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Key Learnings</h3>
                </div>
                <ul className="space-y-3">
                  {learnings.map((learning, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Development Process</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Week 1: Foundation & Core Features</h3>
                <p className="text-gray-700">Project setup, component architecture, Google Books API integration, and basic CRUD operations for book management.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Week 2: Advanced Features & Polish</h3>
                <p className="text-gray-700">Reading progress tracking, analytics dashboard, export/import functionality, testing, and deployment.</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Build-Measure-Learn Approach</h3>
              <p className="text-gray-700">
                I followed an iterative approach: built the MVP first, measured my own usage patterns, 
                learned what features I actually used versus what I thought I'd need, then iterated based on real usage data.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Project Matters</h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                This project represents more than just a reading tracker - it demonstrates my ability to:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Identify and solve real problems</strong> through thoughtful user experience design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Handle full development lifecycle</strong> from conception through deployment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Make technical decisions</strong> that prioritize user needs and data privacy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Build maintainable, performant applications</strong> using modern web technologies</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-6">
                The success metric I'm most proud of: I still use this app every day, and it has genuinely 
                improved my reading habits and awareness of my reading patterns.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BookishCaseStudy;