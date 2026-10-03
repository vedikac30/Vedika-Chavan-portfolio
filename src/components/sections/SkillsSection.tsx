import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../../data/resumeData';

export default function SkillsSection() {
  const [skillCategory, setSkillCategory] = useState('All');
  const [skillSearch, setSkillSearch] = useState('');

  const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools', 'Core'];

  const filteredSkills = useMemo(() => {
    return RESUME_DATA.skills.filter(s => {
      const matchesCategory = skillCategory === 'All' || s.category === skillCategory;
      const matchesSearch = s.name.toLowerCase().includes(skillSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [skillCategory, skillSearch]);

  return (
    <section id="skills" className="relative z-10 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold">Technical Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-1">
            Skills & Core Competencies
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Categorized proficiency matrix across modern full-stack development, software architecture, and developer tooling.
          </p>
        </div>

        {/* Search skill bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search skill (e.g. React, JWT, Java)..."
            value={skillSearch}
            onChange={(e) => setSkillSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-800/90 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Skill Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {skillCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSkillCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              skillCategory === cat 
                ? 'bg-indigo-600 text-white shadow' 
                : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.name}
            className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 hover:border-indigo-500/40 transition-all hover:bg-slate-800/80 group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm text-white group-hover:text-indigo-300 transition-colors">
                {skill.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
                {skill.category}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mt-3">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-1.5">
              <span>Proficiency</span>
              <span className="text-indigo-400 font-semibold">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Strengths Banner */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-slate-900/50 border border-indigo-500/30">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Academic & Engineering Strengths
        </h4>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Full Development Cycle</strong>
            Sound grasp of requirements analysis, responsive UI prototyping, REST API structuring, and unit/integration testing.
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Analytical Problem Solving</strong>
            Rigorous approach to data structures, modular component hierarchy, and algorithmic optimization.
          </div>
          <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
            <strong className="text-white block mb-1">Adaptability & Growth</strong>
            Quick learner with immediate curiosity towards emerging frameworks, security paradigms, and clean architectural design.
          </div>
        </div>
      </div>

    </section>
  );
}
