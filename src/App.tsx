import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScroll, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight,
  MapPin,
  Calendar,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ExperienceTimeline from './components/ExperienceTimeline';
import CustomCursor from './components/CustomCursor';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { cn } from '@/lib/utils';

// Constants
import { 
  FEATURED_PROJECTS, 
  OTHER_PROJECTS, 
  SKILLS, 
  EXPERIENCE, 
  LANGUAGES, 
  STRENGTHS, 
  SERVICES 
} from './constants';

// Assets
import profileImg from './assets/profile.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export default function App() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, FEATURED_PROJECTS.length - visibleCards);
  
  const nextProject = () => setCurrentProjectIndex(prev => Math.min(maxIndex, prev + 1));
  const prevProject = () => setCurrentProjectIndex(prev => Math.max(0, prev - 1));

  const gapValue = visibleCards === 1 ? '0px' : (visibleCards === 2 ? '2rem' : '3rem');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-black text-foreground selection:bg-primary selection:text-background"
    >
      <div className="fixed inset-0 bg-noise z-[60] pointer-events-none" />
      <CustomCursor />
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-background shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:scale-110 transition-transform"
          >
            <ArrowUpRight className="-rotate-45" size={24} />
          </motion.button>
        ) : null}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        {/* Deep Atmospheric Blobs & Continuous Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              x: [-100, 100, -100],
              y: [-50, 50, -50],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-[180px]" 
          />
          <motion.div 
            animate={{ 
              x: [100, -100, 100],
              y: [150, -150, 150],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[160px]" 
          />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="px-4 py-1.5 border border-primary/20 text-primary bg-primary/5 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Active for Summer 2026 internships
              </div>
            </div>
            
            <div className="relative inline-block mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -top-16 -left-20 text-[100px] md:text-[140px] font-editorial text-white/[0.03] pointer-events-none select-none tracking-tighter"
              >
                COMPUTER
              </motion.div>
              <h1 className="text-6xl md:text-[10rem] font-display font-bold tracking-tighter leading-[0.85] relative z-10 text-glow">
                Sami Harb <br />
                <span className="text-primary italic font-serif text-[0.7em]">Engineering</span>
              </h1>
            </div>
            
            <p className="max-w-xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed font-light">
              Crafting high-performance systems and 
              <span className="text-foreground font-medium"> intelligent software</span> with 
              <span className="text-foreground font-medium"> precision engineering</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <a href="#featured-projects" className="inline-flex items-center justify-center rounded-full px-10 h-14 font-bold bg-primary text-black hover:bg-white transition-all duration-500 group shadow-lg shadow-primary/10 tracking-widest text-xs">
                EXPLORE WORK
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-full px-10 h-14 font-bold border border-white/10 glass hover:bg-white/10 transition-all duration-500 tracking-widest text-xs"
              >
                LET'S TALK
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground opacity-50"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold font-serif italic text-primary">Scroll Down</span>
              <motion.div
                animate={{ height: [0, 48, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] bg-gradient-to-b from-primary via-primary/50 to-transparent"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden bg-black">
        {/* Continue the grid for seamless flow */}
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Introduction</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold max-w-4xl tracking-tight leading-[1.1]">
              Engineering for <span className="text-primary italic font-serif">Human Impact</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 transform transition-all duration-1000 group-hover:scale-[1.03] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <img 
                  src={profileImg} 
                  alt="Sami Harb" 
                  className="rounded-[2.5rem] object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Senior Computer Engineering student focused on IT systems, machine learning, and robust software design. 
                I enjoy translating technical complexity into reliable, well-structured solutions that teams can build on, 
                especially when serving community needs through technology.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary"><MapPin size={18} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Location</p>
                    <p className="text-sm font-medium">Beirut, Lebanon</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary"><Calendar size={18} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Graduation</p>
                    <p className="text-sm font-medium">Fall 2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary"><Zap size={18} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Focus</p>
                    <p className="text-sm font-medium">IT Systems, ML</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary"><CheckCircle2 size={18} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Availability</p>
                    <p className="text-sm font-medium">Internship-ready</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 italic text-sm text-muted-foreground">
                "I am looking for engineering internships where I can contribute across backend development, 
                infrastructure-minded problem solving, technically rigorous product work, and community-oriented technology initiatives."
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Capabilities</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">Technical Arsenal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Bridging the gap between <span className="text-white font-medium italic font-serif">silicon and source code</span>. A comprehensive stack for the modern engineer.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SKILLS.map((skill, i) => (
              <SkillBadge key={i} variants={itemVariants} {...(skill as any)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="pt-48 pb-32 overflow-hidden bg-black relative">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center pt-24 mb-24 gap-8"
          >
            <div>
              <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Selected Work</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-[1.1]">Featured Projects</h2>
            </div>
          </motion.div>

          <div className="relative group/slider max-w-7xl mx-auto px-4 md:px-0">
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              disabled={currentProjectIndex === 0}
              className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center text-white/50 hover:text-primary transition-all disabled:opacity-0 disabled:pointer-events-none group/btn"
              aria-label="Previous Project"
            >
              <ArrowLeft size={32} className="group-hover/btn:-translate-x-2 transition-transform duration-500" />
            </button>
            
            <button 
              onClick={nextProject}
              disabled={currentProjectIndex >= maxIndex}
              className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center text-white/50 hover:text-primary transition-all disabled:opacity-0 disabled:pointer-events-none group/btn"
              aria-label="Next Project"
            >
              <ArrowRight size={32} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
            </button>

            <div className="relative overflow-hidden">
              <motion.div 
                animate={{ x: `calc(-${currentProjectIndex} * (100% + ${gapValue}) / ${visibleCards})` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="flex"
                style={{ gap: gapValue, width: '100%' }}
              >
                {FEATURED_PROJECTS.map((project, i) => (
                  <div 
                    key={i} 
                    className="shrink-0 flex" 
                    style={{ width: `calc((100% - (${visibleCards} - 1) * ${gapValue}) / ${visibleCards})` }}
                  >
                    <ProjectCard {...(project as any)} />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Slider Progress Indicator */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentProjectIndex(i)}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  currentProjectIndex === i ? "w-8 bg-primary" : "w-2 bg-white/10 hover:bg-white/20"
                )}
                aria-label={`Go to project set ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section id="other-projects" className="py-32 bg-black relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(0,242,255,0.03),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Explorations</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Other Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Diving into the intersection of <span className="text-white">mechanical precision</span> and digital logic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {OTHER_PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...(project as any)} isStatic={true} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-black relative">
        <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Timeline</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">The Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Professional evolution and academic milestones that shaped an <span className="text-white">engineering mindset</span>.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline items={EXPERIENCE} />
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Communication</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6">Languages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Synthesizing information across <span className="text-white">diverse linguistic landscapes</span>.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {LANGUAGES.map((lang, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass p-8 rounded-3xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold">{lang.name}</h3>
                  <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/20 text-primary text-[9px] font-bold uppercase tracking-widest">{lang.level}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{lang.proficiency}</p>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.width }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="strengths" className="py-32 bg-black relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.5em] font-bold mb-6 block">Architecture</span>
            <h2 className="text-5xl md:text-[6rem] font-display font-bold mb-8 tracking-tighter leading-none">The <span className="text-white">Core</span> Strength</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed text-lg">
              Foundational pillars supporting <span className="text-white italic font-serif">precision engineering</span> and synergistic leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {STRENGTHS.map((strength, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-12 rounded-[3rem] border-white/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-primary/30" />
                  <h3 className="text-3xl font-display font-bold text-white">{strength.title}</h3>
                </div>
                <p className="text-muted-foreground/80 mb-10 leading-relaxed font-light text-lg">{strength.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {strength.points.map((point, j) => (
                    <div key={j} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black relative">
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-serif italic text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Offerings</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Leveraging <span className="text-white italic font-serif">design and data</span> to build meaningful digital products.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="glass p-8 rounded-3xl text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </motion.div>
  );
}
