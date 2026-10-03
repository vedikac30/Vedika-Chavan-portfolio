export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile';
  stack: string[];
  summary: string;
  description: string;
  keyFeatures: string[];
  interactiveType: 'audio-sim' | 'employee-sim' | 'compression-sim';
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools' | 'Core';
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface Education {
  institution: string;
  degree: string;
  cgpa: string;
  passingYear: string;
  status: string;
}

export interface ResumeData {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  about: string;
  education: Education;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
}
