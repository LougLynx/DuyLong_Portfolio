import { User } from 'lucide-react';
import React from 'react';

export const Activities = ({ t, activities }) => {
  return (
    <section id="activities" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <User className="text-cyan-400 drop-shadow-lg" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t.activities.title}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-amber-500 mx-auto rounded-full shadow-lg shadow-cyan-500/50"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 group">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{activity.name}</h3>
                <span className="text-gray-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 text-sm">{activity.date}</span>
              </div>
              <p className="text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

