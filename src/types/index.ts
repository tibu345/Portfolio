import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  /** Source code repository */
  github?: string;
  /** Live deployment */
  demo?: string;
  impact?: string;
}

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  skills: string[];
}

export type ExperienceType = 'work' | 'education' | 'volunteer';

export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: ExperienceType;
}

export interface Language {
  name: string;
  /** CEFR level, e.g. "C1" */
  level: string;
  proficiency: string;
  /** Number of filled segments out of 6 (A1 → C2) */
  score: number;
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

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  id: string;
}
