import { Briefcase } from 'lucide-react';
import React from 'react';

export const Experience = ({ t, experience }) => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/30 via-blue-950/30 to-black/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-amber-400 drop-shadow-lg" />
            <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">{t.experience.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-cyan-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{job.position}</h3>
                  <p className="text-transparent bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text font-semibold">{job.company}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

