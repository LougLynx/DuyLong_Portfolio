import { Briefcase, ChevronDown } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { DetailModal } from '../ui/DetailModal';

export const Experience = ({ t, experience, scrollToSection }) => {
  const [openItem, setOpenItem] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const parsePeriodEnd = (period) => {
    // Try to extract end date from formats like "01/2023 - 06/2024" or "2023 - Present"
    if (typeof period !== 'string') return new Date(0);
    const parts = period.split('-').map((p) => p.trim());
    const end = parts[1] || parts[0];
    if (/present|nay|hiện/i.test(end)) return new Date(3000, 0, 1); // treat Present as far future
    if (/\d{2}\/\d{4}/.test(end)) {
      const [m, y] = end.split('/').map((v) => parseInt(v, 10));
      return new Date(y, m - 1, 1);
    }
    if (/\d{4}/.test(end)) return new Date(parseInt(end, 10), 0, 1);
    return new Date(0);
  };

  const sortedExperience = useMemo(() => {
    if (!Array.isArray(experience)) return [];
    return [...experience].sort((a, b) => parsePeriodEnd(b.period) - parsePeriodEnd(a.period));
  }, [experience]);

  const visibleExperience = expanded ? sortedExperience : sortedExperience.slice(0, 3);
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <Briefcase className="text-cyan-400 drop-shadow-lg" />
            <span className="text-cyan-400">{t.experience.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="space-y-8">
          {visibleExperience.map((job, index) => (
            <button key={index} onClick={() => setOpenItem(job)} className="w-full text-left bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{job.position}</h3>
                  <p className="text-cyan-400 font-semibold">{job.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">{job.period}</span>
              </div>
              <ul className="space-y-2 text-gray-300">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cyan-400 mr-2 text-xl">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        {sortedExperience.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="relative z-10 tracking-wide">
                {(expanded ? t.experience.seeLess : t.experience.seeMore).trim().split(/\s+/).slice(0,2).join(' ')}
              </span>
              <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-cyan-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </button>
          </div>
        )}
        
        {/* Scroll Indicator to Projects */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown
            className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 cursor-pointer hover:text-amber-400 transition-colors"
            onClick={() => scrollToSection && scrollToSection('projects')}
          />
        </div>
      </div>
      <DetailModal
        isOpen={!!openItem}
        onClose={() => setOpenItem(null)}
        title={openItem?.position}
        subtitle={openItem?.company}
        period={openItem?.period}
        description={openItem?.details}
        images={openItem?.images}
      />
    </section>
  );
};

