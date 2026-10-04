import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  name: "Vedika Chavan",
  role: "Full Stack Developer",
  location: "Andheri (E), Mumbai 400093",
  email: "chavanvedika3012@gmail.com",
  phone: "+91 8591294213",
  github: "github.com/vedikac30",
  githubUrl: "https://github.com/vedikac30",
  linkedin: "linkedin.com/in/vedika-chavan",
  linkedinUrl: "https://linkedin.com/in/vedika-chavan",
  about:
    "Motivated and detail-oriented Full Stack Developer with hands-on experience in developing responsive web applications using React.js, Node.js, Express.js, and MongoDB. Strong understanding of REST APIs, authentication using JWT, and responsive UI development with Tailwind CSS. Passionate about building scalable applications, learning new technologies, and solving real-world problems through software development. Seeking an opportunity to contribute as a Full Stack Developer while continuously enhancing technical skills.",
  education: {
    institution: "Chitkitsaka Samuha Sir Sitaram and Lady Shatabai Patkar Varde College of Arts",
    degree: "B.Sc. in Computer Science",
    cgpa: "7.95 (SEM 6)",
    passingYear: "2026",
    status: "Final Year Undergraduate (Passing 2026)"
  },
  academicStrengths: [
    "Strong understanding of full development process.",
    "Excellent analytical and problem-solving skills.",
    "Quick learner, adaptable to new technologies."
  ],
  experience: [
    {
      company: "Agrawal Packers and Movers Limited",
      role: "Full Stack Developer Intern",
      location: "Mumbai, India",
      period: "Internship • Present",
      highlights: [
        "Developed and maintained web application features using React.js, JavaScript, and other relevant technologies.",
        "Improved UI components to enhance usability and responsiveness.",
        "Identified and resolved issues related to data fetching and application functionality.",
        "Simplified page content and layouts to improve the user experience.",
        "Implemented new features based on project requirements and feedback from senior developers."
      ],
      skillsUsed: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "UI/UX Optimization"]
    }
  ],
  skills: [
    { name: "JavaScript", category: "Languages", level: 90, icon: "Code2" },
    { name: "Java", category: "Languages", level: 85, icon: "Terminal" },
    { name: "Python", category: "Languages", level: 75, icon: "Terminal" },
    { name: "HTML5 & CSS3", category: "Languages", level: 95, icon: "Code2" },
    { name: "React.js", category: "Frontend", level: 92, icon: "Layers" },
    { name: "Tailwind CSS", category: "Frontend", level: 90, icon: "Layers" },
    { name: "Responsive Design", category: "Frontend", level: 94, icon: "Laptop" },
    { name: "Node.js", category: "Backend", level: 84, icon: "Terminal" },
    { name: "Express.js", category: "Backend", level: 82, icon: "Terminal" },
    { name: "REST APIs", category: "Backend", level: 88, icon: "Terminal" },
    { name: "JWT Auth", category: "Backend", level: 86, icon: "Wrench" },
    { name: "MongoDB", category: "Databases", level: 85, icon: "Database" },
    { name: "MySQL", category: "Databases", level: 80, icon: "Database" },
    { name: "Git & GitHub", category: "Tools", level: 88, icon: "Wrench" },
    { name: "VS Code", category: "Tools", level: 95, icon: "Wrench" },
    { name: "Android Studio", category: "Tools", level: 78, icon: "Wrench" },
    { name: "Postman", category: "Tools", level: 86, icon: "Wrench" },
    { name: "Selenium", category: "Tools", level: 72, icon: "Wrench" },
    { name: "Data Structures & Algorithms", category: "Core", level: 80, icon: "Code2" },
    { name: "OOP Concepts", category: "Core", level: 88, icon: "Code2" },
    { name: "MVC Architecture", category: "Core", level: 86, icon: "Layers" }
  ],
  projects: [
    {
      id: "music-streaming",
      title: "Music Streaming Web Application",
      category: "Full Stack",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
      summary: "Full-stack music streaming platform featuring dual user/artist portals, encrypted JWT authentication, seamless music streaming playback, and playlist curation.",
      description: "A comprehensive digital music platform engineered with the MERN stack. Includes robust role-based access control (RBAC), multi-track uploading for authorized artists, real-time playlist management, and a dynamic audio playback interface with continuous progress tracking.",
      keyFeatures: [
        "Role-Based Access Control (Listeners vs. Certified Artists)",
        "Secure JWT token-based authentication & encrypted passwords with bcrypt",
        "Dynamic audio player with queueing, volume control, and timeline scrubbing",
        "Custom playlist creation, favorite tracks bookmarking, and search queries",
        "RESTful API endpoints engineered with Express & MongoDB Aggregations"
      ],
      interactiveType: "audio-sim"
    },
    {
      id: "employee-management",
      title: "Role-Based Employee Management System",
      category: "Frontend",
      stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "LocalStorage", "Context API"],
      summary: "High-performance enterprise HR dashboard with granular role permissions (Admin vs. Employee), task delegation, and persistent local client storage.",
      description: "Designed to solve administrative overhead by providing human resource coordinators and team leads with a sleek interface for handling staff profiles, departments, active projects, performance statuses, and leave tracking without server roundtrips.",
      keyFeatures: [
        "Dual portal login with instant toggle between Admin & Team Member perspectives",
        "Real-time employee directory CRUD operations with instant search & filter",
        "Department-based allocation metrics and productivity indicators",
        "Persistent client-side state synchronized to LocalStorage",
        "Modern clean UI with dark/light visual clarity and responsive tabular layouts"
      ],
      interactiveType: "employee-sim"
    },
    {
      id: "enhancio-compression",
      title: "Enhancio - Media Compression App",
      category: "Mobile",
      stack: ["Kotlin", "XML Layouts", "Android Studio", "Compression Algorithms", "Android SDK"],
      summary: "Native Android utility application capable of processing and significantly reducing file sizes for images, videos, audio clips, and PDF documents while preserving fidelity.",
      description: "Engineered specifically to solve bandwidth and device storage constraints. Enhancio offers batch compression workflows, customized quality profiles (High, Medium, Aggressive), and a native Android interface built according to Google Material Design standards.",
      keyFeatures: [
        "Multi-format support: JPEG, PNG, MP4, MP3, and document PDFs",
        "Adjustable compression bitrates and resolution scalers",
        "Pre-compression versus Post-compression visual side-by-side comparison",
        "Efficient background threading using Android Coroutines to avoid UI lockups",
        "Direct export & share sheets integration for WhatsApp, Drive, and Email"
      ],
      interactiveType: "compression-sim"
    }
  ]
};
