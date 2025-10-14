import { ChevronDown, Code, ExternalLink, Github } from 'lucide-react';
import React, { useMemo, useState } from 'react';

export const Projects = ({ t, projects, scrollToSection }) => {
  const [showAll, setShowAll] = useState(false);

  // Ensure the toggle label only shows the first two words (e.g., "See more")
  const getTwoWordLabel = (label) => {
    if (typeof label !== 'string') return '';
    return label.trim().split(/\s+/).slice(0, 2).join(' ');
  };

  const parsePeriodEnd = (period) => {
    if (typeof period !== 'string') return new Date(0);
    const parts = period.split('-').map((p) => p.trim());
    const end = parts[1] || parts[0];
    if (/\d{2}\/\d{4}/.test(end)) {
      const [m, y] = end.split('/').map((v) => parseInt(v, 10));
      return new Date(y, m - 1, 1);
    }
    if (/\d{4}/.test(end)) return new Date(parseInt(end, 10), 0, 1);
    return new Date(0);
  };

  const sortedProjects = useMemo(() => {
    if (!Array.isArray(projects)) return [];
    return [...projects].sort((a, b) => parsePeriodEnd(b.period) - parsePeriodEnd(a.period));
  }, [projects]);

  // Limit to 3 projects initially if showAll is false
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <Code className="text-cyan-400 drop-shadow-lg" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t.projects.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
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
                {project.live && project.live !== '#' && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all hover:scale-110"
                  >
                    <ExternalLink size={16} />
                    {t.projects.liveDemo}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="relative z-10 tracking-wide">
                {showAll ? getTwoWordLabel(t.projects.seeLess) : getTwoWordLabel(t.projects.seeMore)}
              </span>
              {/* animated underline for better UX */}
              <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </button>
          </div>
        )}
        
        {/* Scroll Indicator to Education */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => scrollToSection && scrollToSection('education')}
          />
        </div>
      </div>
    </section>
  );
};

