import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScroll, useTransform } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);
  const y = useTransform(scrollY, [0, 50], [-20, 0]);

  const navItems = [
    { name: 'Experience', href: '#experience' },
    { name: 'Featured', href: '#featured-projects' },
    { name: 'Other', href: '#other-projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Languages', href: '#languages' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Services', href: '#services' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/tibu345", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sami-harb", label: "LinkedIn" },
    { icon: Mail, href: "mailto:harbs4678@gmail.com", label: "Email" }
  ];

  return (
    <>
      <motion.nav
        style={{ opacity, y }}
        className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="glass rounded-full px-4 md:px-10 py-2.5 md:py-3.5 flex items-center justify-between shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] border border-white/5 backdrop-blur-3xl">
          {/* Logo/Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500">
              <Terminal size={14} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="hidden sm:inline-block text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/90 group-hover:text-primary transition-colors">Sami Harb</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-display font-semibold uppercase tracking-widest text-white/50 hover:text-primary transition-all duration-500 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <a 
                href="https://linkedin.com/in/sami-harb" 
                target="_blank" 
                rel="noreferrer"
                className="bg-primary text-black px-5 py-2.5 rounded-full text-[10px] font-display font-bold uppercase tracking-widest transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:bg-white"
              >
                RESUME
              </a>
            </motion.div>

            <button 
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-primary hover:bg-white/5 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 md:hidden bg-black/60"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-black border-l border-white/5 p-8 pt-24 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                <p className="text-[10px] font-display font-bold uppercase tracking-[0.4em] text-primary/50 mb-4">Navigations</p>
                {navItems.map((item, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    {item.name}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" size={20} />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 hover:text-primary hover:bg-primary/10 transition-all border border-white/5"
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                
                <a 
                  href="https://linkedin.com/in/sami-harb" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-center bg-primary text-black h-14 rounded-2xl font-display font-bold uppercase tracking-widest text-xs"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
