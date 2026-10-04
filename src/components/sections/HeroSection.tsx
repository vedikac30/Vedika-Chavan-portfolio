import React from 'react';
import { MapPin, GraduationCap, Briefcase, ChevronRight, FileText, Mail, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section id="about" className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Full Stack Developer Roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{RESUME_DATA.name}</span>.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            A <strong className="text-white font-semibold">Full Stack Developer</strong> crafting clean code, smooth interactions, and scalable systems using <span className="text-indigo-400 font-medium">React</span>, <span className="text-indigo-400 font-medium">Node.js</span>, and <span className="text-indigo-400 font-medium">MongoDB</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              {RESUME_DATA.location}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              B.Sc. Computer Science (2026)
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              Intern @ Agrawal Packers
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center space-x-2 active:scale-95"
            >
              <span>Explore Interactive Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 text-sm font-medium transition-all flex items-center space-x-2 active:scale-95 hover:border-slate-600"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Get in Touch</span>
            </a>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 text-sm font-medium transition-all flex items-center space-x-2 active:scale-95"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Profile Picture Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            {/* Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            {/* Main Card Container */}
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-3.5 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800">
                <img
                  src="./vedika-profile.jpg"
                  alt="Vedika Chavan"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Bottom floating details */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/70 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      Vedika Chavan
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </h3>
                    <p className="text-[11px] text-indigo-300 font-mono">Full Stack Developer</p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Mumbai, IN
                  </span>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>MERN & Android</span>
                </span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ready For Hire
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
