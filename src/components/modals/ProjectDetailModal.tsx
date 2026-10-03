import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase font-mono tracking-wider text-indigo-400 font-semibold">
          {project.category} Deep Dive
        </span>
        <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map(st => (
            <span key={st} className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300 border border-slate-700 font-mono">
              {st}
            </span>
          ))}
        </div>

        <div className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>{project.description}</p>
        </div>

        <div className="mt-5">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 font-bold">
            Key Architectural Highlights
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-end border-t border-slate-800 pt-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
          >
            Close Inspection
          </button>
        </div>
      </div>
    </div>
  );
}
