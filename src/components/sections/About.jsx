import { ChevronDown, GraduationCap } from 'lucide-react';
import React from 'react';
import { skills } from '../../data/skills';

export const About = ({ t, scrollToSection }) => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <GraduationCap className="text-cyan-400 drop-shadow-lg" />
            <span className="text-cyan-400">{t.about.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Enhanced Portrait Photo Frame for About Section */}
            <div className="relative group w-full max-w-md">
              {/* Multi-layer Glow Background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-cyan-500 rounded-[2.5rem] blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute -inset-3 bg-blue-500 rounded-[3rem] blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 animate-pulse"></div>
              </div>
              
              {/* Image Container with Dynamic Size */}
              <div className="relative w-full aspect-[3/4] md:aspect-[2/3] lg:h-[500px]">
                {/* Animated Glowing Border */}
                <div className="absolute -inset-1 bg-cyan-400 rounded-[2rem] opacity-70 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-300"></div>
                
                {/* Main Image Frame */}
                <div className="relative h-full rounded-[2rem] overflow-hidden border-4 border-slate-900/40 shadow-2xl shadow-amber-500/20 transform group-hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="./Asset/avatar2.jpg" 
                    alt="Duy Long Tran - Business Analyst" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-white/10 skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                  </div>
                  
                  {/* Info Badge on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <p className="text-white font-bold text-lg">Available for opportunities</p>
                    </div>
                    <p className="text-amber-400 font-semibold">Business Analyst</p>
                    <p className="text-gray-300 text-sm">FPT University</p>
                  </div>
                </div>
                
                {/* Modern Corner Accents */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-amber-400 rounded-tl-[2rem] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-4 border-b-4 border-cyan-400 rounded-br-[2rem] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Floating Accent Lines */}
                <div className="absolute top-0 left-1/4 w-20 h-1 bg-cyan-400 opacity-50"></div>
                <div className="absolute bottom-0 right-1/4 w-20 h-1 bg-cyan-400 opacity-50"></div>
                
                {/* Animated Particles */}
                <div className="absolute top-12 -left-6 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-16 -right-6 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/3 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {t.about.description2}
            </p>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">{t.about.skills}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-cyan-500/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-400/40 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 min-h-[60px]">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator to Experience */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => scrollToSection && scrollToSection('experience')}
          />
        </div>
      </div>
    </section>
  );
};

