import React from 'react';
import { 
  Figma, 
  Palette, 
  Users, 
  Smartphone, 
  Code, 
  Globe,
  Database,
  Zap
} from 'lucide-react';

const Skills = () => {
  const designSkills = [
    { name: 'UI/UX Design', icon: Palette, level: 90 },
    { name: 'Figma', icon: Figma, level: 85 },
    { name: 'User Research', icon: Users, level: 75 },
    { name: 'Mobile Design', icon: Smartphone, level: 80 },
  ];

  const devSkills = [
    { name: 'React', icon: Code, level: 70 },
    { name: 'JavaScript', icon: Zap, level: 75 },
    { name: 'Tailwind CSS', icon: Globe, level: 75 },
    { name: 'HTML/CSS', icon: Code, level: 80 },
  ];

  const SkillBar = ({ skill, category }) => {
    const Icon = skill.icon;
    const colorClass = category === 'design' ? 'bg-blue-600' : 'bg-teal-600';
    
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Icon size={20} className={`${category === 'design' ? 'text-blue-600' : 'text-teal-600'}`} />
            <span className="font-medium text-gray-900">{skill.name}</span>
          </div>
          <span className="text-sm text-gray-600">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${colorClass}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-text-reveal">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            A blend of creative design thinking and technical implementation skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Design Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Palette className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Design Skills</h3>
                <p className="text-gray-600">1 year of experience</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} category="design" />
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover-lift hover:shadow-2xl transition-all duration-500 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Development Skills</h3>
                <p className="text-gray-600">6 months of experience</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {devSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} category="development" />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg hover-lift hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center animate-text-reveal">
            Additional Capabilities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-purple-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">User Research</h4>
              <p className="text-sm text-gray-600">Interviews & Testing</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-green-200 transition-colors duration-300">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Responsive Design</h4>
              <p className="text-sm text-gray-600">Mobile-First Approach</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-yellow-200 transition-colors duration-300">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Web Standards</h4>
              <p className="text-sm text-gray-600">Accessibility & SEO</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-red-200 transition-colors duration-300">
                <Zap className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Performance</h4>
              <p className="text-sm text-gray-600">Optimization & Speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;