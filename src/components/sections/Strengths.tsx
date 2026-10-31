import { motion } from 'motion/react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { SERVICES, STRENGTHS } from '@/data/skills';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

export default function Strengths() {
  return (
    <Section id="strengths">
      <SectionHeader
        eyebrow="Approach"
        title={
          <>
            The <span className="font-serif italic text-primary">core</span> strengths
          </>
        }
        description="Foundational pillars supporting precision engineering and collaborative leadership."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-2"
      >
        {STRENGTHS.map((strength, i) => (
          <motion.article key={strength.title} variants={fadeUp} className="card-interactive p-5 sm:p-7 lg:p-9">
            <p className="mb-4 font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</p>
            <h3 className="mb-3 text-xl font-semibold sm:text-2xl">{strength.title}</h3>
            <p className="mb-6 text-pretty leading-relaxed text-muted-foreground">{strength.description}</p>
            <ul className="flex flex-wrap gap-2">
              {strength.points.map((point) => (
                <li key={point} className="chip">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>

      <div id="services" className="mx-auto mt-16 max-w-6xl scroll-mt-20 sm:mt-24">
        <SectionHeader eyebrow="Offerings" title="Services" />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="grid gap-3 sm:gap-4 md:grid-cols-3"
        >
          {SERVICES.map(({ title, description, icon: Icon }) => (
            <motion.li key={title} variants={fadeUp} className="card-interactive group flex items-start gap-5 p-5 sm:p-7 md:block">
              <span className="inline-flex shrink-0 rounded-2xl bg-primary/10 p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:mb-6">
                <Icon size={24} aria-hidden />
              </span>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
