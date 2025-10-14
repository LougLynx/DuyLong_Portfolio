import { User } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { DetailModal } from '../ui/DetailModal';

export const Activities = ({ t, activities, scrollToSection }) => {
  const [openItem, setOpenItem] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const parseMonthYear = (value) => {
    if (typeof value === 'string' && /\d{2}\/\d{4}/.test(value)) {
      const [m, y] = value.split('/').map((v) => parseInt(v, 10));
      return new Date(y, m - 1, 1);
    }
    return new Date(value);
  };

  const sortedActivities = useMemo(() => {
    if (!Array.isArray(activities)) return [];
    return [...activities].sort((a, b) => parseMonthYear(b.date) - parseMonthYear(a.date));
  }, [activities]);

  const visibleActivities = expanded ? sortedActivities : sortedActivities.slice(0, 3);
  return (
    <section id="activities" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            <User className="text-cyan-400 drop-shadow-lg" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t.activities.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {visibleActivities.map((activity, index) => (
            <button key={index} onClick={() => setOpenItem(activity)} className="text-left bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{activity.name}</h3>
                <span className="text-gray-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 text-sm">{activity.date}</span>
              </div>
              <p className="text-gray-300">{activity.description}</p>
            </button>
          ))}
        </div>
        {sortedActivities.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group relative px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="relative z-10 tracking-wide">
                {(expanded ? t.activities.seeLess : t.activities.seeMore).trim().split(/\s+/).slice(0,2).join(' ')}
              </span>
              <span className="pointer-events-none absolute left-6 right-6 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 opacity-0 scale-x-0 origin-left transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"></span>
            </button>
          </div>
        )}
      </div>
      <DetailModal
        isOpen={!!openItem}
        onClose={() => setOpenItem(null)}
        title={openItem?.name}
        period={openItem?.date}
        description={openItem?.description}
        images={openItem?.images}
        link={openItem?.link}
        linkText={t.activities.visitPage}
      />
      {/* Scroll indicator removed as requested */}
    </section>
  );
};

