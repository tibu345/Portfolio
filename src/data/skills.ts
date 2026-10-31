import { Brain, Code2, Cpu, Database, Globe, Palette, Smartphone, Wrench } from 'lucide-react';
import type { Language, Service, SkillGroup, Strength } from '@/types';

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Programming', icon: Code2, skills: ['Python', 'C++', 'Java', 'C', 'TypeScript'] },
  { category: 'AI & ML', icon: Brain, skills: ['Machine Learning', 'Computer Vision', 'YOLO', 'Feature Engineering', 'LLMs & RAG'] },
  { category: 'Data', icon: Database, skills: ['SQL', 'MySQL', 'NumPy', 'OpenCV', 'EDA'] },
  { category: 'Systems & Hardware', icon: Cpu, skills: ['Linux', 'Bash', 'VHDL', 'Verilog', 'MATLAB', 'LTE / Networking'] },
  { category: 'Tools & Frameworks', icon: Wrench, skills: ['Git', 'GitHub', 'React', 'FastAPI', 'Tailwind'] },
];

export const LANGUAGES: Language[] = [
  { name: 'Arabic', level: 'C1', proficiency: 'Native / fluent communication', score: 5 },
  { name: 'French', level: 'B2', proficiency: 'Professional working proficiency', score: 4 },
  { name: 'English', level: 'B2', proficiency: 'Professional working proficiency', score: 4 },
];

export const STRENGTHS: Strength[] = [
  {
    title: 'Analytical Thinking',
    description: 'I focus on structuring work clearly, debugging methodically, and keeping solutions maintainable through problem decomposition.',
    points: ['Problem-solving', 'Troubleshooting mindset', 'Attention to detail'],
  },
  {
    title: 'Team Collaboration',
    description: 'Built through team projects, peer reviews, and cross-functional work where clear communication is vital.',
    points: ['Clear communication', 'Team collaboration', 'Feedback integration'],
  },
  {
    title: 'Adaptability & Learning',
    description: 'Able to move across backend, ML, electronics, and systems contexts quickly without losing depth.',
    points: ['Fast learner', 'Adaptability', 'Cross-domain agility'],
  },
  {
    title: 'Leadership & Initiative',
    description: 'Experienced in leading technical clubs and academic initiatives, fostering a culture of collaboration and precision.',
    points: ['Leadership', 'Project management', 'IEEE AI Club'],
  },
];

export const SERVICES: Service[] = [
  { title: 'Web Development', icon: Globe, description: 'Building robust, scalable web applications with modern frameworks.' },
  { title: 'Web Design', icon: Palette, description: 'Creating intuitive, visually striking user interfaces and experiences.' },
  { title: 'Mobile App Development', icon: Smartphone, description: 'Developing cross-platform mobile solutions for seamless user engagement.' },
];
