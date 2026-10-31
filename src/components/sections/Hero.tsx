import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { PROFILE } from '@/data/profile';
import { fadeUp, staggerContainer } from '@/lib/motion';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-32 [@media(max-height:30rem)]:pt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[70svh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.88_0.16_200/0.16),transparent)]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative mx-auto px-4 text-center sm:px-6"
      >
        <motion.p variants={fadeUp} className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-left text-xs font-medium text-primary backdrop-blur sm:mb-8 sm:px-4">
          <span className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {PROFILE.status}
        </motion.p>

        <motion.h1 variants={fadeUp} className="text-display-xl font-display font-bold">
          {PROFILE.name}
          <span className="block font-serif font-medium italic text-primary">Engineering</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
          Crafting high-performance systems and <span className="font-medium text-foreground">intelligent software</span> with{' '}
          <span className="font-medium text-foreground">precision engineering</span>.
        </motion.p>

        <motion.div variants={fadeUp} className="mx-auto mt-8 flex max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
          <ButtonLink href="#projects" size="lg" className="group w-full sm:w-auto">
            Explore work
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </ButtonLink>
          <ButtonLink href="#contact" variant="ghost" size="lg" className="w-full sm:w-auto">
            Let's talk
          </ButtonLink>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 sm:mt-16">
          <Terminal />
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary md:[@media(min-height:56rem)]:block print:hidden"
      >
        <ChevronDown size={24} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
