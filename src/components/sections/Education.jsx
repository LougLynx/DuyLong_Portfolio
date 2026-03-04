import { Award } from 'lucide-react';
import React, { useState } from 'react';
import { DetailModal } from '../ui/DetailModal';

export const Education = ({ t, education }) => {
  const [openItem, setOpenItem] = useState(null);
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <Award className="text-amber-400 drop-shadow-lg" />
            <span className="text-cyan-400">{t.education.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-cyan-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <button key={index} onClick={() => setOpenItem(edu)} className="w-full text-left bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 hover:scale-[1.02] group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                  <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.details}</p>
            </button>
          ))}
        </div>
      </div>
      <DetailModal
        isOpen={!!openItem}
        onClose={() => setOpenItem(null)}
        title={openItem?.degree}
        subtitle={openItem?.institution}
        period={openItem?.period}
        description={openItem?.details}
        images={openItem?.images}
      />
    </section>
  );
};

