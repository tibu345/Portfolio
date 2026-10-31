import type { Project } from '@/types';

import cedarsImg from '@/assets/cedars.png';
import docucaptionImg from '@/assets/Docucaption.png';
import headerImg from '@/assets/header.png';
import istidlalImg from '@/assets/istidlal-v2.png';
import kernelImg from '@/assets/kernel.png';
import samLibrariesImg from '@/assets/sam-libraries.png';
import wasteProjectImg from '@/assets/waste-project.png';

export const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Cedar Heights',
    description:
      'Premium React, Vite, and Tailwind real estate landing page concept for construction and property development pitches. Presents residences, location value, amenities, galleries, inquiries, and site visit booking in a polished single-page experience.',
    tags: ['React', 'Vite', 'Tailwind', 'Real Estate'],
    image: cedarsImg,
    demo: 'https://tibu345.github.io/cedar-heights/',
    impact: 'Created a high-end property development website concept for presenting residential projects and capturing buyer inquiries.',
  },
  {
    title: 'Docucaption',
    description:
      'Word document automation platform for academic and professional writing. Detects figures and tables in DOCX files, generates editable captions, and exports corrected Word documents with native Microsoft Word fields.',
    tags: ['Word Automation', 'DOCX', 'Academic Tool', 'Productivity'],
    image: docucaptionImg,
    demo: 'https://tibu345.github.io/DocuCaption-Pro/',
    impact: 'Automated the tedious process of captioning and cross-referencing in academic and professional documents.',
  },
  {
    title: 'Smart Waste Monitoring System',
    description:
      'A computer vision pipeline using YOLO to detect garbage trucks and waste bags. Integrates sensor data to optimize municipal collection routes and reduce illegal dumping.',
    tags: ['Computer Vision', 'YOLO', 'Analytics', 'Sensors'],
    image: wasteProjectImg,
    impact: 'Proposed a system to verify garbage collection events and monitor waste accumulation through real-time event detection workflows.',
  },
  {
    title: 'Food Delivery User Behavior Prediction',
    description:
      'ML pipeline estimating order completion based on session behavior and promotions. Feature engineering and model tuning within a competitive data science environment.',
    tags: ['Python', 'Machine Learning', 'Feature Engineering', 'EDA'],
    image: headerImg,
    github: 'https://github.com/tibu345/AUC-hunters',
    impact: 'Trained multiple classification models and optimized performance using ROC-AUC, cross-validation, and hyperparameter tuning.',
  },
  {
    title: 'ISTIDLAL',
    description:
      'Educational platform for science and tech discovery. Transforms curated YouTube content into structured topic exploration with deterministic learning paths for students.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'SQLite'],
    image: istidlalImg,
    github: 'https://github.com/tibu345/ISTIDLAL',
    impact: 'Designed a topic-first experience with curated collections and deterministic learning paths.',
  },
  {
    title: 'Simple Mini-Kernel Simulator',
    description:
      'Kernel simulator modeling process management, CPU scheduling, and memory behavior. Features a teaching-oriented CLI and GUI for visualizing OS internals.',
    tags: ['C', 'Python', 'PyQt', 'ctypes'],
    image: kernelImg,
    github: 'https://github.com/tibu345/OSproj',
    impact: 'Implemented FCFS, Round Robin, and Priority scheduling with memory management.',
  },
  {
    title: 'SAM-Libraries',
    description:
      'Database-driven management platform for inventory and transactions. Uses FastAPI and Angular to provide a responsive administrative interface for large-scale cataloging.',
    tags: ['FastAPI', 'Python', 'MySQL', 'Angular'],
    image: samLibrariesImg,
    github: 'https://github.com/tibu345/SAM-Libraries-',
    impact: 'Implemented backend services with FastAPI and integrated with Angular frontend.',
  },
  {
    title: '961-STORE',
    description:
      'Collaborative e-commerce platform focused on smooth user flows and iterative delivery. Supported end-to-end shopping workflows and improved usability in team settings.',
    tags: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800&h=450',
    github: 'https://github.com/tibu345/961Store',
    impact: 'Supported end-to-end shopping workflows and improved usability in a collaborative setup.',
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: 'Car Transmission System',
    description:
      'Designed and simulated a transmission control system to apply sequential logic, state-driven design, and verification practices.',
    tags: ['Verilog', 'Digital Logic', 'Simulation'],
    image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=600&h=600',
    impact: 'Modeled combinational and sequential logic behavior using state-machine driven control.',
  },
  {
    title: 'Solar Panel Tracker',
    description:
      'Built an automated tracking system that adjusts panel orientation using sensors, actuator control, and closed-loop logic.',
    tags: ['Electronics', 'Control Systems', 'Sensors'],
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=600&h=600',
    impact: 'Integrated sensing inputs for light-aware positioning and efficiency-oriented feedback.',
  },
];
