import { Award, ChevronDown, ExternalLink } from 'lucide-react';
import React, { useMemo, useState } from 'react';

export const Certificates = ({ t, certificates, scrollToSection }) => {
  const [expanded, setExpanded] = useState(false);

  // Ensure the toggle label only shows the first two words (e.g., "See more")
  const getTwoWordLabel = (label) => {
    if (typeof label !== 'string') return '';
    return label.trim().split(/\s+/).slice(0, 2).join(' ');
  };

  const parseMonthYear = (value) => {
    // Expecting format MM/YYYY; fallback to Date parsing if different
    if (typeof value === 'string' && /\d{2}\/\d{4}/.test(value)) {
      const [month, year] = value.split('/').map((v) => parseInt(v, 10));
      return new Date(year, month - 1, 1);
    }
    return new Date(value);
  };

  const sortedCertificates = useMemo(() => {
    if (!Array.isArray(certificates)) return [];
    return [...certificates].sort((a, b) => parseMonthYear(b.date) - parseMonthYear(a.date));
  }, [certificates]);

  const visibleCertificates = expanded ? sortedCertificates : sortedCertificates.slice(0, 3);

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <Award className="text-cyan-400 drop-shadow-lg" />
            <span className="text-cyan-400">{t.certificates.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCertificates.map((cert, index) => (
            <div key={index} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-cyan-500/20 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-gray-400 text-sm bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">{cert.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-all">{cert.title}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{cert.issuer}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/30 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={cert.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group/link"
              >
                <span className="text-sm">{t.certificates.viewCredential}</span>
                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        {sortedCertificates.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="relative z-10 tracking-wide">
                {expanded ? getTwoWordLabel(t.certificates.seeLess) : getTwoWordLabel(t.certificates.seeMore)}
              </span>
              {/* animated underline for better UX */}
              <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-cyan-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </button>
          </div>
        )}
        
        {/* Scroll Indicator to Activities */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => scrollToSection && scrollToSection('activities')}
          />
        </div>
      </div>
    </section>
  );
};

