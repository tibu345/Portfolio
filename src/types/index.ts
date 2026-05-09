import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  impact?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
  category: string;
}

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Language {
  name: string;
  level: string;
  proficiency: string;
  width: string;
}

export interface Strength {
  title: string;
  description: string;
  points: string[];
}

export interface Service {
  title: string;
  icon: LucideIcon;
  description: string;
}
