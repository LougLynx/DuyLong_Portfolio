import React from 'react';

export const Footer = ({ t }) => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          &copy; 2025 <span className="text-cyan-400 font-semibold">Duy Long Tran</span>. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

