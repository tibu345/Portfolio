import { motion } from 'motion/react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { LANGUAGES, SKILL_GROUPS } from '@/data/skills';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

const CEFR_STEPS = 6;

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Capabilities"
        title="Technical arsenal"
        description={
          <>
            Bridging the gap between <span className="font-serif italic text-foreground">silicon and source code</span>.
          </>
        }
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6"
      >
        {SKILL_GROUPS.map(({ category, icon: Icon, skills }, i) => (
          <motion.article
            key={category}
            variants={fadeUp}
            className={cn(
              'card-interactive group p-5 sm:p-6',
              i < 2 ? 'lg:col-span-3' : 'lg:col-span-2',
              i === SKILL_GROUPS.length - 1 && SKILL_GROUPS.length % 2 === 1 && 'sm:col-span-2 lg:col-span-2',
            )}
          >
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="rounded-xl border border-border bg-white/5 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}

        <motion.article variants={fadeUp} className="card p-5 sm:col-span-2 sm:p-6 lg:col-span-6">
          <h3 className="mb-5 text-lg font-semibold">Languages</h3>
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {LANGUAGES.map((lang) => (
              <li key={lang.name}>
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="font-medium">{lang.name}</span>
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
                    {lang.level}
                  </span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{lang.proficiency}</p>
                <div className="flex gap-1" role="img" aria-label={`${lang.level}: level ${lang.score} of ${CEFR_STEPS}`}>
                  {Array.from({ length: CEFR_STEPS }, (_, step) => (
                    <span key={step} className={cn('h-1.5 flex-1 rounded-full', step < lang.score ? 'bg-primary' : 'bg-white/10')} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </motion.article>
      </motion.div>
    </Section>
  );
}
