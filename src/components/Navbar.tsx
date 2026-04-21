import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScroll, useTransform } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-20, 0]);

  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Featured', href: '#featured-projects' },
    { name: 'Other', href: '#other-projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Languages', href: '#languages' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <>
      <motion.nav
        style={{ opacity, y }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className="glass rounded-full px-8 md:px-10 py-3.5 flex items-center justify-between md:justify-center gap-4 md:gap-14 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] relative border border-white/5 backdrop-blur-3xl">
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-display font-semibold uppercase tracking-widest text-white/50 hover:text-primary transition-all duration-500 relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <a 
                href="https://linkedin.com/in/sami-harb" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary text-black px-6 py-2.5 rounded-full text-[11px] font-display font-bold uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:bg-white"
              >
                RESUME
              </a>
            </motion.div>

            <button 
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-background/80 backdrop-blur-xl pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
