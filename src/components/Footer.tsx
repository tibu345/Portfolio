import { Mail, Linkedin, Github, Terminal as TerminalIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="py-16 bg-black/80 backdrop-blur-xl border-t border-white/5 relative overflow-hidden">
      {/* Subtle Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-5 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/50">
              <TerminalIcon size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl uppercase tracking-wider text-white leading-none">Sami Harb</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-medium mt-1 leading-tight">
                Computer <br /> Engineer
              </span>
            </div>
          </div>
          
          <p className="text-sm text-white/30 font-light tracking-wide text-center">
            &copy; {new Date().getFullYear()} Sami Harb. Built with <span className="text-white">React</span>, <span className="text-white">Tailwind</span>, and <span className="text-primary italic font-serif">Passion</span>.
          </p>

          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/30 hover:text-primary transition-all duration-500 hover:scale-125"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
