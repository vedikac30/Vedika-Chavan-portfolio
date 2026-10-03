import React, { useState } from 'react';
import { Eye, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-slate-800/80 bg-opacity-80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            VC
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              Vedika Chavan
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-[11px] block font-mono text-indigo-400">Full Stack Developer</span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-indigo-400 transition-colors">Education</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-md shadow-indigo-600/30 transition-all active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            Projects & Demos
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            Skills Matrix
          </a>
          <a 
            href="#experience" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            Experience
          </a>
          <a 
            href="#education" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            Education
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium hover:text-indigo-400"
          >
            Contact
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-xs shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>View Full Resume Snapshot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
