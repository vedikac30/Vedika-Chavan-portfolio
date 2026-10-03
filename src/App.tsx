import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import ProjectDetailModal from './components/modals/ProjectDetailModal';
import ResumeModal from './components/modals/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen font-sans bg-[#0a0f1d] text-slate-100">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Header / Navigation */}
      <Header 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenResume={() => setResumeModalOpen(true)} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

    </div>
  );
}