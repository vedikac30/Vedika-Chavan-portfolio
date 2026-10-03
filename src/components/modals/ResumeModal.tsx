import React from 'react';
import { X, Download } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-slate-800 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">{RESUME_DATA.name}</h2>
              <p className="text-sm font-semibold text-indigo-400">{RESUME_DATA.role}</p>
            </div>
            <div className="text-right text-xs text-slate-400 font-mono">
              <p>{RESUME_DATA.location}</p>
              <p>{RESUME_DATA.phone}</p>
              <p>{RESUME_DATA.email}</p>
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-4 leading-relaxed">
            {RESUME_DATA.about}
          </p>
        </div>

        {/* Quick Education & Internship Summary */}
        <div className="py-5 border-b border-slate-800 space-y-4">
          <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold">
            Experience & Education Snapshot
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <p className="font-bold text-white">Full Stack Developer Intern</p>
              <p className="text-indigo-400">Agrawal Packers and Movers Limited</p>
              <p className="text-[11px] text-slate-400 mt-1">Focus: React.js UI modules, data fetch optimization, and responsive design.</p>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <p className="font-bold text-white">B.Sc. in Computer Science (2026)</p>
              <p className="text-indigo-400">Patkar Varde College of Arts & Science</p>
              <p className="text-[11px] text-emerald-400 mt-1">Academic CGPA: 7.95 (SEM 6)</p>
            </div>
          </div>
        </div>

        {/* Skills & Projects */}
        <div className="py-5 space-y-3">
          <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold">
            Primary Core Technologies
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            <strong className="text-white">Stack:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, Java, JavaScript, Python, REST APIs, JWT, Git, Android Studio.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-mono">
            Official resume representation of Vedika Chavan
          </span>
          <div className="flex space-x-2">
            <a
              href="./vedika-chavan-resume.pdf"
              download="Vedika_Chavan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
