import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-20 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Professional Internship Experience */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center space-x-2 text-indigo-400">
              <Briefcase className="w-4 h-4" />
              <span className="text-[11px] uppercase font-mono tracking-widest font-semibold">Hands-on Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Work History</h2>

            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{exp.role}</h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-400 mt-0.5">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-medium">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-1 flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((sk) => (
                    <span key={sk} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic Journey Section */}
          <div id="education" className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-2 text-indigo-400">
              <GraduationCap className="w-4 h-4" />
              <span className="text-[11px] uppercase font-mono tracking-widest font-semibold">Education</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Academic Degrees</h2>

            <div className="p-5 sm:p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Graduating {RESUME_DATA.education.passingYear}
                </span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-mono">
                  CGPA: {RESUME_DATA.education.cgpa}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{RESUME_DATA.education.degree}</h3>
                <p className="text-xs text-slate-300 mt-0.5 leading-snug">
                  {RESUME_DATA.education.institution}
                </p>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white text-xs">Relevant Computer Science Coursework:</p>
                <p className="text-slate-400 text-[11px]">Data Structures, Algorithms, Database Management (RDBMS & NoSQL), Web Technologies, Object-Oriented Programming (Java/Python), Software Engineering.</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Location & Commute</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Based in Andheri (E), Mumbai 400093. Open to on-site opportunities across MMR or remote worldwide.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
