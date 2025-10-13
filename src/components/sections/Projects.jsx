import { Code, ExternalLink, Github } from 'lucide-react';
import React from 'react';

export const Projects = ({ t, projects }) => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Code className="text-cyan-400 drop-shadow-lg" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t.projects.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400/50 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110"
                >
                  <Github size={16} />
                  {t.projects.code}
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all hover:scale-110"
                >
                  <ExternalLink size={16} />
                  {t.projects.liveDemo}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

