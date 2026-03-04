import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export const Contact = ({ t, scrollToSection }) => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">
          <span className="text-cyan-400">{t.contact.title}</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          {t.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="mailto:Longtd204@gmail.com" 
            className="group flex items-center justify-center gap-2 bg-cyan-600 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-500 hover:shadow-xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 relative overflow-hidden text-white"
          >
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">{t.contact.email}</span>
          </a>
          <a 
            href="https://linkedin.com/in/louglynx204" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-amber-400 px-8 py-3 rounded-xl font-semibold hover:bg-amber-400/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all backdrop-blur-sm"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/Louglynx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-sm"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

