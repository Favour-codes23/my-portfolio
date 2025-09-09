import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Figma, Linkedin } from 'lucide-react';
import BookishCaseStudy from './BookishCaseStudy';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // If showing case study, render that instead
  if (showCaseStudy) {
    return <BookishCaseStudy onBack={() => setShowCaseStudy(false)} />;
  }

  const projects = [
    {
      title: "Book-Finder - Reading Tracker",
      category: "Full-Stack Development",
      description: "A personal reading journey tracker that solves the problem of fragmented book tracking. Built with offline-first approach, features intelligent progress monitoring, reading analytics, and complete data ownership through export/import functionality. Demonstrates full-stack thinking with React state management and Google Books API integration.",
      image: "./src/bF gif.gif",
      tools: ["React", "JavaScript", "CSS3", "Google Books API", "Local Storage", "Responsive Design"],
      type: "development",
      status: "Live",
      liveLink: "https://mybookfinder-app.netlify.app/",
      githubLink: "https://github.com/Favour-codes23/book-finder.git",
      hasCaseStudy: true
    },
    {
      title: "Furniture E-Commerce UI Design",
      category: "UI/UX Design",
      description: "Redesigned furniture shopping experience to solve the problem of overwhelming product catalogs. Created visual-first discovery system with smart filtering that reduces cognitive load by grouping products by room and style. Focused on making furniture browsing feel like interior design inspiration rather than overwhelming shopping.",
      image: "https://i.postimg.cc/SNk3svTR/mockuuups-free-ipad-pro-mockup-on-textured-fabric-and-wooden-surface.jpg",
      tools: ["Figma", "UI Design", "User Research", "Prototyping"],
      type: "design",
      figmaLink: "https://www.figma.com/design/5zQ7ESSYsQJo2tliV5bu3q/Untitled?node-id=0-1&p=f&t=gSF6Aetf0iRMB9R0-0"
    },
    {
      title: "AI-Powered Medical Dashboard",
      category: "UI/UX Design",
      description: "Designed comprehensive medical dashboard system that transforms dense patient data into actionable insights for healthcare professionals. Created information hierarchy that prioritizes critical alerts, implemented accessibility-compliant color coding, and designed workflow-based navigation that matches actual medical professional workflows.",
      image: "https://i.postimg.cc/Bnvz51GG/mockuuups-free-macbook-pro-with-female-professional.jpg",
      tools: ["Figma", "Medical UI Design", "Data Visualization", "Healthcare UX", "Multi-Screen Design"],
      type: "design",
      status: "Design Complete",
      figmaLink: "https://www.figma.com/design/omHLG7bv2kcWVqY0B3r1Wy/Untitled?node-id=0-1&p=f&t=VyoFBXzbVTcSvTSW-0"
    },
    {
      title: "Netflix Streaming Platform Redesign",
      category: "UI/UX Design",
      description: "Reimagined Netflix's content discovery to solve the overwhelming endless-scroll problem. Designed smart categorization that goes beyond genres to include mood and viewing context, enhanced preview system with better decision tools, and personalized dashboard that learns from viewing patterns without feeling invasive.",
      image: "https://i.postimg.cc/QCkzmQtj/mockuuups-iphone-15-pro-mockup-in-hand-with-neutral-background.jpg",
      tools: ["Figma", "UI Design", "Information Architecture", "User Experience"],
      type: "design",
      status: "Design Complete",
      figmaLink: "https://www.figma.com/design/hU9H5v2LPF5uxmBFVC6l4r/NETFLIX?node-id=0-1&p=f&t=g8ClaOBgQ3cjilvL-0"
    },
    {
      title: "Chrome Extension Website",
      category: "Frontend Development",
      description: "Built conversion-focused landing page that overcomes user trust barriers for browser extension adoption. Features above-the-fold demonstration with real browser screenshots, progressive information disclosure, and trust-building elements. Optimized for conversion with clear value proposition in user terms rather than technical features.",
      image: "https://i.postimg.cc/NGkYpTZy/3f-QGQIo-RGk7.png",
      tools: ["React", "JavaScript", "Tailwind CSS", "Responsive Design"],
      type: "development",
      status: "Live",
      liveLink: "https://amazing-unicorn-2b35b9.netlify.app/"
    },
    {
      title: "Color Guessing Game",
      category: "Frontend Development", 
      description: "Interactive game built with vanilla JavaScript to master core web technologies without framework dependencies. Features dynamic difficulty scaling based on player performance, smooth animations without external libraries, and responsive design. Demonstrates clean code architecture and engaging user experience using only HTML, CSS, and JavaScript.",
      image: "https://i.postimg.cc/Tw8GHcRb/3d2355eaed2.png",
      tools: ["HTML", "CSS", "JavaScript", "Game Logic"],
      type: "development",
      status: "Live",
      liveLink: "https://poetic-cuchufli-fd5f45.netlify.app/"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'design':
        return <Figma className="w-5 h-5" />;
      case 'development':
        return <Github className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'In Development':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Selected projects that demonstrate my problem-solving approach, from identifying user needs to implementing technical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`project-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                visibleProjects.includes(index) 
                  ? 'animate-slide-in-up opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="text-sm font-medium">Click to view project</p>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 animate-pulse">{project.category}</span>
                  <div className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110">
                    {getIcon(project.type)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 transform hover:scale-105"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {/* Case Study Button for Book-Finder */}
                  {project.hasCaseStudy && (
                    <button
                      onClick={() => setShowCaseStudy(true)}
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="group-hover:animate-pulse">View Case Study</span>
                    </button>
                  )}
                  
                  {/* Live Demo Button */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.hasCaseStudy ? 'px-4' : 'flex-1'} bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg group`}
                    >
                      {!project.hasCaseStudy && <span className="group-hover:animate-pulse">Live Demo</span>}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {/* Figma Button */}
                  {project.figmaLink && (
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="group-hover:animate-pulse">View Design</span>
                      <Figma className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  )}
                  
                  {/* GitHub Button */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-6 animate-slide-up">
            These projects showcase my design thinking process and attention to detail. Each project includes comprehensive case studies and design documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View All Projects
            </button>
            <a
              href="https://www.linkedin.com/in/favour-nwokocha-75ab46233/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:animate-pulse">Follow on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;