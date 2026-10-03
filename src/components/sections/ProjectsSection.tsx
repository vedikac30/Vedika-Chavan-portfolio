import React, { useState, useMemo } from 'react';
import { ArrowUpRight, CheckCircle2, FolderGit2 } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';
import { Project } from '../../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'Full Stack' | 'Frontend' | 'Mobile'>('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return RESUME_DATA.projects;
    return RESUME_DATA.projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="relative z-10 py-20 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold">Featured Portfolio Work</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Showcasing full-stack architectures, responsive web applications, and robust software solutions.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex p-1 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs font-medium">
            {(['All', 'Full Stack', 'Frontend', 'Mobile'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Projects (3)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-2xl bg-slate-800/60 border border-slate-700/70 overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col justify-between group shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/20">
                    {project.category}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs text-slate-400 hover:text-indigo-300 flex items-center space-x-1"
                  >
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-700/60">
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Key Highlights:</p>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/60">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-700/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-medium text-xs border border-indigo-500/30 transition-colors text-center"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
