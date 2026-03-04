import { Mail, Phone, User } from 'lucide-react';
import React, { useState } from 'react';

export const References = ({ t, references }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleRefs = expanded ? references : references.slice(0, 3);

  const getTwoWordLabel = (label) => {
    if (typeof label !== 'string') return '';
    return label.trim().split(/\s+/).slice(0, 2).join(' ');
  };
  return (
    <section id="references" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <User className="text-cyan-400 drop-shadow-lg" />
            <span className="text-cyan-400">{t.references.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="space-y-6">
          {visibleRefs.map((reference, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{reference.name}</h3>
              <p className="text-cyan-400 font-semibold mb-4">{reference.position}</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={16} className="text-cyan-400" />
                  <a href={`mailto:${reference.email}`} className="hover:text-cyan-400 transition-colors">{reference.email}</a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={16} className="text-amber-400" />
                  <a href={`tel:${reference.phone}`} className="hover:text-amber-400 transition-colors">{reference.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {references.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="relative z-10 tracking-wide">
                {expanded ? getTwoWordLabel(t.references.seeLess) : getTwoWordLabel(t.references.seeMore)}
              </span>
              <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-cyan-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

