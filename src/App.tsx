import { MotionConfig } from 'motion/react';
import BackToTop from '@/components/layout/BackToTop';
import CustomCursor from '@/components/layout/CustomCursor';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ScrollProgress from '@/components/layout/ScrollProgress';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import OtherProjects from '@/components/sections/OtherProjects';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Strengths from '@/components/sections/Strengths';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OtherProjects />
        <Experience />
        <Strengths />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
