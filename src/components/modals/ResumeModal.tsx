import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import { RESUME_DATA } from '../../data/resumeData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [activeTab, setActiveTab] = useState<'pdf' | 'interactive'>('pdf');
  const [pdfTimestamp] = useState(() => Date.now());
  const resumePdfUrl = `./vedika-chavan-resume.pdf?v=${pdfTimestamp}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative text-slate-200 overflow-hidden">

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{RESUME_DATA.name}</span>
              </h2>
              <p className="text-xs text-indigo-400 font-medium">{RESUME_DATA.role}</p>
            </div>
          </div>

          {/* View Mode Toggle & Close Button */}
          <div className="flex items-center space-x-2">
            <div className="flex bg-slate-800/90 rounded-xl p-1 border border-slate-700/80">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${activeTab === 'pdf'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${activeTab === 'interactive'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
                  }`}
              >
                Overview
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {activeTab === 'pdf' ? (
            <div className="space-y-4">
              {/* PDF Container */}
              <div className="w-full h-[65vh] rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-inner flex flex-col">
                <iframe
                  src={`${resumePdfUrl}#view=FitH`}
                  title="Vedika Chavan Resume"
                  className="w-full h-full border-0"
                />
              </div>

              {/* Quick links & notice */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 gap-2">
                <span>Rendering updated document: <strong>vedika-chavan-resume.pdf</strong></span>
                <a
                  href={resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline flex items-center space-x-1"
                >
                  <span>Open PDF in full browser tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Structured View */
            <div className="space-y-6">
              {/* Summary description */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold mb-2">
                  ABOUT ME
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {RESUME_DATA.about}
                </p>
              </div>

              <div className="border-b border-slate-800" />

              {/* Experience & Education Snapshot */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold">
                  EXPERIENCE & EDUCATION SNAPSHOT
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-1">
                    <p className="font-bold text-white text-sm">Full Stack Developer Intern</p>
                    <p className="text-indigo-400 font-medium">Agrawal Packers and Movers Limited</p>
                    <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                      Focus: React.js UI modules, data fetch optimization, and responsive design.
                    </p>
                  </div>
                  <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-1">
                    <p className="font-bold text-white text-sm">B.Sc. In Computer Science (2026)</p>
                    <p className="text-indigo-400 font-medium">Patkar Varde College of Arts & Science</p>
                    <p className="text-[11px] text-emerald-400 font-mono pt-1">
                      Academic CGPA: 7.95 (SEM 6)
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b border-slate-800" />

              {/* Primary Core Technologies */}
              <div className="space-y-2">
                <h3 className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-bold">
                  PRIMARY CORE TECHNOLOGIES
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  <strong className="text-white">Stack:</strong> React.js, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, Java, JavaScript, Python, REST APIs, JWT, Git, Android Studio.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/95 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <a
              href={RESUME_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href={RESUME_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-[#0a66c2] transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1.5 transition-colors border border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={resumePdfUrl}
              download="Vedika_Chavan_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
