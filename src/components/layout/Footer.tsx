import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons';
import { RESUME_DATA } from '../../data/resumeData';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
            VC
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Vedika Chavan • Full Stack Developer</p>
            <p className="text-[11px] text-slate-500">Andheri (E), Mumbai 400093, Maharashtra, India</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
          <a
            href={RESUME_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-slate-300" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={RESUME_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-[#0a66c2] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a 
            href={`mailto:${RESUME_DATA.email}`} 
            className="flex items-center space-x-1.5 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>{RESUME_DATA.email}</span>
          </a>
          <span>•</span>
          <a 
            href={`tel:${RESUME_DATA.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{RESUME_DATA.phone}</span>
          </a>
        </div>

        <p className="text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Vedika Chavan
        </p>
      </div>
    </footer>
  );
}
