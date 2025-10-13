import { Github, Languages, Linkedin } from 'lucide-react';
import React from 'react';

export const Navigation = ({ t, language, toggleLanguage, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900/80 via-blue-900/80 to-slate-900/80 backdrop-blur-xl z-50 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
            Duy Long Tran
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.about}</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.experience}</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.projects}</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.education}</button>
            <button onClick={() => scrollToSection('activities')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.activities}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">{t.nav.contact}</button>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="hover:text-cyan-400 transition-all duration-300 hover:scale-125 flex items-center gap-1"
              title={language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang tiếng Anh'}
            >
              <Languages size={20} />
              <span className="text-xs font-semibold">{language === 'en' ? 'VI' : 'EN'}</span>
            </button>
            
            <a href="https://github.com/Louglynx" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:rotate-6">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/louglynx204" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-all duration-300 hover:scale-125 hover:rotate-6">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

