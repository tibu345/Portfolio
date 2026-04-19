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
  Terminal as TerminalIcon
} from 'lucide-react';
import { Project, Skill, Experience, Language, Strength, Service } from '../types';

// Asset Imports
import istidlalImg from '../assets/istidlal-v2.png';
import kernelImg from '../assets/kernel.png';
import samLibrariesImg from '../assets/sam-libraries.png';

export const FEATURED_PROJECTS: Project[] = [
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
    impact: "Implemented FCFS, Round Robin, and Priority scheduling with memory management.",
    featured: true
  },
  {
    title: "User Behavior Prediction",
    description: "Developed a predictive ML pipeline to estimate order completion from session-level behavior, promotions, and cart interaction signals.",
    tags: ["Python", "Pandas", "scikit-learn", "ML"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    impact: "Engineered features around promotions and engagement to evaluate models using AUC.",
    featured: true
  },
  {
    title: "SAM-Libraries",
    description: "Built a database-driven library management platform with API services for inventory, customer data, and transaction flows.",
    tags: ["FastAPI", "Python", "MySQL", "Angular"],
    image: samLibrariesImg,
    github: "https://github.com/tibu345/SAM-Libraries-.git",
    impact: "Implemented backend services with FastAPI and integrated with Angular frontend.",
    featured: true
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
  { name: "Java", icon: Code2, level: 90, category: "Programming" },
  { name: "Python", icon: Code2, level: 95, category: "Programming" },
  { name: "SQL", icon: Database, level: 90, category: "Databases" },
  { name: "FastAPI", icon: Server, level: 85, category: "Web/Backend" },
  { name: "React", icon: Globe, level: 85, category: "Web/Backend" },
  { name: "Linux", icon: TerminalIcon as any, level: 80, category: "Systems" },
  { name: "Machine Learning", icon: Cpu, level: 80, category: "AI" },
  { name: "Embedded Systems", icon: Microchip, level: 75, category: "Hardware" },
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
    title: "Machine Learning Coursework",
    organization: "Lebanese American University",
    period: "Ongoing",
    description: [
      "Built end-to-end Python workflows for training and evaluation",
      "Worked with feature engineering, optimization, and neural network fundamentals"
    ],
    type: "education"
  },
  {
    title: "Mobile Robotics Coursework",
    organization: "Lebanese American University",
    period: "Ongoing",
    description: [
      "Integrated sensors and processed motion-related data",
      "Explored localization, mapping, and navigation algorithms"
    ],
    type: "education"
  },
  {
    title: "After-school Intern",
    organization: "TUMO Beirut",
    period: "Oct 2019 - Apr 2020",
    description: [
      "Worked across robotics, Scratch, and web design labs",
      "Built prototypes weekly under mentor guidance"
    ],
    type: "work"
  },
  {
    title: "Volunteer",
    organization: "Makassed Volunteers",
    period: "Apr 2020 - Apr 2021",
    description: [
      "Supported local community and social well-being initiatives",
      "Developed teamwork, communication, and organizational skills"
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
    title: "Systems Thinking",
    description: "Comfortable working through technical problems as connected systems rather than isolated tasks.",
    points: ["Operating systems concepts", "Database-backed applications", "Engineering tradeoff awareness"]
  },
  {
    title: "Analytical Execution",
    description: "I focus on structuring work clearly, debugging methodically, and keeping solutions maintainable.",
    points: ["Analytical thinking", "Problem decomposition", "Structured debugging", "Readable implementation"]
  },
  {
    title: "Collaboration",
    description: "Built through team projects, code reviews, and cross-functional coursework where communication mattered.",
    points: ["Team-based delivery", "Peer reviews", "Clear technical communication"]
  },
  {
    title: "Learning Agility",
    description: "Able to move across backend, ML, electronics, and systems contexts without losing depth or discipline.",
    points: ["Fast adaptation", "Cross-domain engineering", "Strong academic foundation"]
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
