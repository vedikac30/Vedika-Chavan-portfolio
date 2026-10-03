import React from 'react';
import { RESUME_DATA } from '../../data/resumeData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            VC
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Vedika Chavan • Full Stack Developer</p>
            <p className="text-[11px] text-slate-500">Andheri (E), Mumbai 400093, Maharashtra, India</p>
          </div>
        </div>

        <div className="text-xs text-slate-400 flex items-center space-x-6">
          <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-indigo-400 transition-colors">
            {RESUME_DATA.email}
          </a>
          <span>•</span>
          <a href={`tel:${RESUME_DATA.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-indigo-400 transition-colors">
            {RESUME_DATA.phone}
          </a>
        </div>

        <p className="text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Vedika Chavan
        </p>
      </div>
    </footer>
  );
}
