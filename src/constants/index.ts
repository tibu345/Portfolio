import { 
  Cpu, 
  Code2, 
  Globe, 
  Database, 
  Smartphone, 
  Server, 
  Microchip, 
  Palette, 
  Mail,
  Linkedin,
  Github,
  Terminal as TerminalIcon,
  Brain,
  Eye,
  Settings,
  Activity
} from 'lucide-react';
import { Project, Skill, Experience, Language, Strength, Service } from '../types';

// Asset Imports
import istidlalImg from '../assets/istidlal-v2.png';
import kernelImg from '../assets/kernel.png';
import samLibrariesImg from '../assets/sam-libraries.png';
import headerImg from '../assets/header.png';
import wasteProjImg from '../assets/waste proj.png';

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Smart Waste Monitoring System",
    description: "Designed a computer vision pipeline using YOLO/CNN-based detection for garbage trucks, waste bags, and illegal dumping. Combined camera analytics with sensor data to reduce false alarms.",
    tags: ["Computer Vision", "YOLO", "Analytics", "Sensors"],
    image: wasteProjImg,
    impact: "Proposed a system to verify garbage collection events and monitor waste accumulation through real-time event detection workflows.",
    featured: true
  },
  {
    title: "Food Delivery User Behavior Prediction",
    description: "Developed a predictive ML pipeline to estimate order completion from session-level behavior, promotions, and cart interaction signals. Participated in a Kaggle-style competition.",
    tags: ["Python", "Machine Learning", "Feature Engineering", "EDA"],
    image: headerImg,
    impact: "Trained multiple classification models and optimized performance using ROC-AUC, cross-validation, and hyperparameter tuning.",
    featured: true
  },
  {
    title: "ISTIDLAL",
    description: "Built a browse-first educational platform for science and technology discovery that turns curated YouTube content into structured topic exploration.",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    image: istidlalImg,
    github: "https://github.com/tibu345/ISTIDLAL",
    impact: "Designed a topic-first experience with curated collections and deterministic learning paths."
  },
  {
    title: "Simple Mini-Kernel Simulator",
    description: "Built a teaching-oriented kernel simulator that models process management, scheduling, and memory behavior through both CLI and GUI views.",
    tags: ["C", "Python", "PyQt", "ctypes"],
    image: kernelImg,
    github: "https://github.com/tibu345/OSproj.git",
    impact: "Implemented FCFS, Round Robin, and Priority scheduling with memory management."
  },
  {
    title: "SAM-Libraries",
    description: "Built a database-driven library management platform with API services for inventory, customer data, and transaction flows.",
    tags: ["FastAPI", "Python", "MySQL", "Angular"],
    image: samLibrariesImg,
    github: "https://github.com/tibu345/SAM-Libraries-.git",
    impact: "Implemented backend services with FastAPI and integrated with Angular frontend."
  },
  {
    title: "961-STORE",
    description: "Contributed to a team-built e-commerce platform with attention to smooth user flows, debugging, and iterative feature delivery.",
    tags: ["React", "Node.js", "MongoDB", "JS"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=600",
    github: "https://github.com/tibu345/961Store.git",
    impact: "Supported end-to-end shopping workflows and improved usability in a collaborative setup."
  }
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: "Car Transmission System",
    description: "Designed and simulated a transmission control system to apply sequential logic, state-driven design, and verification practices.",
    tags: ["Verilog", "Digital Logic", "Simulation"],
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=800&h=600",
    impact: "Modeled combinational and sequential logic behavior using state-machine driven control."
  },
  {
    title: "Solar Panel Tracker",
    description: "Built an automated tracking system that adjusts panel orientation using sensors, actuator control, and closed-loop logic.",
    tags: ["Electronics", "Control Systems", "Sensors"],
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800&h=600",
    impact: "Integrated sensing inputs for light-aware positioning and efficiency-oriented feedback."
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", icon: Code2, level: 95, category: "Programming" },
  { name: "C++ / Java", icon: Code2, level: 90, category: "Programming" },
  { name: "SQL / MySQL", icon: Database, level: 90, category: "Databases" },
  { name: "Machine Learning", icon: Brain, level: 90, category: "AI & ML" },
  { name: "Computer Vision", icon: Eye, level: 85, category: "AI & ML" },
  { name: "OpenCV / NumPy", icon: Settings, level: 85, category: "Tools & Frameworks" },
  { name: "Linux / Bash", icon: TerminalIcon as any, level: 85, category: "Systems" },
  { name: "MATLAB / VHDL", icon: Activity, level: 80, category: "Engineering tools" },
  { name: "Git / GitHub", icon: Github, level: 90, category: "Tools & Frameworks" }
];

export const EXPERIENCE: Experience[] = [
  {
    title: "BE in Computer Engineering",
    organization: "Lebanese American University",
    period: "Fall 2022 - Fall 2026",
    description: [
      "Active in IEEE AI Club and the Software Engineering Club",
      "Coursework includes machine learning, mobile robotics, and systems design"
    ],
    type: "education"
  },
  {
    title: "After-school Intern",
    organization: "TUMO Beirut",
    period: "Oct 2019 - Jan 2020",
    description: [
      "Completed an after-school internship focused on creative technology and hands-on digital learning.",
      "Worked across robotics, Scratch, and web design labs"
    ],
    type: "work"
  }
];

export const LANGUAGES: Language[] = [
  { name: "Arabic", level: "C1", proficiency: "Native / fluent communication", width: "95%" },
  { name: "French", level: "B2", proficiency: "Professional working proficiency", width: "75%" },
  { name: "English", level: "B2", proficiency: "Professional working proficiency", width: "75%" }
];

export const STRENGTHS: Strength[] = [
  {
    title: "Analytical Thinking",
    description: "I focus on structuring work clearly, debugging methodically, and keeping solutions maintainable through problem decomposition.",
    points: ["Problem-solving", "Analytical thinking", "Troubleshooting mindset", "Attention to Detail"]
  },
  {
    title: "Team Collaboration",
    description: "Built through team projects, peer reviews, and cross-functional work where clear communication is vital.",
    points: ["Clear communication", "Team collaboration", "Feedback integration"]
  },
  {
    title: "Adaptability & Learning",
    description: "Able to move across backend, ML, electronics, and systems contexts quickly without losing depth.",
    points: ["Fast learner", "Adaptability", "Cross-domain agility"]
  }
];

export const SERVICES: Service[] = [
  { title: "Web Development", icon: Globe, description: "Building robust, scalable web applications with modern frameworks." },
  { title: "Web Design", icon: Palette, description: "Creating intuitive, visually striking user interfaces and experiences." },
  { title: "Mobile App Development", icon: Smartphone, description: "Developing cross-platform mobile solutions for seamless user engagement." }
];

export const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/tibu345", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sami-harb", label: "LinkedIn" },
  { icon: Mail, href: "mailto:harbs4678@gmail.com", label: "Email" }
];

export const CONTACT_INFO = {
  email: "harbs4678@gmail.com",
  linkedin: "linkedin.com/in/sami-harb",
  location: "Beirut, Lebanon"
};
