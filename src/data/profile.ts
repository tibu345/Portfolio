import { Github, Linkedin, Mail } from 'lucide-react';
import type { NavItem, SocialLink } from '@/types';

export const PROFILE = {
  name: 'Sami Harb',
  role: 'Computer Engineer',
  email: 'harbs4678@gmail.com',
  linkedin: 'linkedin.com/in/sami-harb',
  github: 'github.com/tibu345',
  location: 'Beirut, Lebanon',
  graduation: 'Fall 2026',
  focus: 'IT Systems, ML',
  availability: 'Internship-ready',
  status: 'Active for Summer 2026 internships',
};

/**
 * Link used by the "Resume" buttons. Drop a PDF at `public/resume.pdf`
 * and change this to `'./resume.pdf'` to link to it directly.
 */
export const RESUME_URL = `https://${PROFILE.linkedin}`;

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: `https://${PROFILE.github}`, icon: Github },
  { label: 'LinkedIn', href: `https://${PROFILE.linkedin}`, icon: Linkedin },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
];

/** Ordered to match the sections on the page. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Strengths', id: 'strengths' },
  { label: 'Contact', id: 'contact' },
];
