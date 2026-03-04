import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const Hero = ({ t, scrollToSection, language }) => {
  // Typing animation for dynamic roles
  const roles = [
    'Business Analyst',
    'Requirements Analyst',
    'Process Analyst',
    'Data Analyst'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100; // ms per character while typing
  const deletingSpeed = 60; // ms per character while deleting
  const pauseAfterType = 1200; // ms pause when a word is fully typed
  const pauseAfterDelete = 400; // ms pause before typing next word

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeoutId;

    if (!isDeleting && charIndex < currentRole.length) {
      timeoutId = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && charIndex > 0) {
      timeoutId = setTimeout(() => setCharIndex((c) => c - 1), deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedRole = roles[roleIndex].slice(0, charIndex);
  const isTyping = !isDeleting && charIndex < roles[roleIndex].length;
  const displayedText = isTyping ? `${displayedRole}...` : displayedRole;

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          {/* Left Side - Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group w-full max-w-lg">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 -z-10"></div>
              <div className="absolute inset-0 bg-cyan-500 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -inset-4 bg-blue-500 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
              {/* Main Photo Container - Increased Height */}
              <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:h-[600px]">
                {/* Glowing Border Layer */}
                <div className="absolute -inset-1 bg-cyan-400 rounded-[2rem] opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300"></div>
                
                {/* Image Frame */}
                <div className="relative h-full rounded-[2rem] overflow-hidden border-4 border-slate-900/50 shadow-2xl shadow-cyan-500/30 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="/Asset/avatar.jpg" 
                    alt={language === 'vi' ? 'Trần Duy Long - Business Analyst' : 'Long Tran Duy - Business Analyst'}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/30 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-white font-bold text-lg">{t.hero.name}</p>
                        <p className="text-cyan-400 text-sm font-medium tracking-wide">
                          {displayedText}
                          <span className="ml-0.5 inline-block w-[1ch] -translate-y-px border-r-2 border-cyan-400 animate-pulse" aria-hidden="true"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-cyan-400 rounded-tl-3xl opacity-60"></div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-4 border-b-4 border-amber-400 rounded-br-3xl opacity-60"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-10 -left-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute bottom-20 -right-6 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        
          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">{t.hero.greeting}</span>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-cyan-400">
               {t.hero.name}
              </span>
            </h1>
            
            {/* Title */}
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                <span className="inline-flex items-center">
                  {displayedText}
                  <span className="ml-0.5 inline-block w-[1ch] -translate-y-px border-r-2 border-cyan-400 animate-pulse" aria-hidden="true"></span>
                </span>
              </h2>
              <div className="h-1 bg-cyan-400 rounded-full"></div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl lg:max-w-none">
              {t.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 hover:bg-cyan-500 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.hero.viewWork}
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 rotate-[-90deg]" />
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 rounded-xl font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
              >
                {t.hero.getInTouch}
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com/Louglynx" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-110 transition-all duration-300">
                <Github size={20} className="text-cyan-400" />
              </a>
              <a href="https://linkedin.com/in/louglynx204" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 hover:scale-110 transition-all duration-300">
                <Linkedin size={20} className="text-blue-400" />
              </a>
              <a href="mailto:Longtd204@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800/50 border border-amber-500/30 flex items-center justify-center hover:bg-amber-500/20 hover:border-amber-400 hover:scale-110 transition-all duration-300">
                <Mail size={20} className="text-amber-400" />
              </a>
            </div>
          </div>
        
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <ChevronDown 
            className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors" 
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};
