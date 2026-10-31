import { motion } from 'motion/react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { EXPERIENCE } from '@/data/experience';
import { fadeUp, inViewOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { ExperienceType } from '@/types';

const TYPE_STYLES: Record<ExperienceType, string> = {
  work: 'border-primary/25 text-primary bg-primary/5',
  education: 'border-blue-400/25 text-blue-300 bg-blue-400/5',
  volunteer: 'border-emerald-400/25 text-emerald-300 bg-emerald-400/5',
};

export default function Experience() {
  return (
    <Section id="experience" tone="raised">
      <SectionHeader
        eyebrow="Roadmap"
        title="The journey"
        description={
          <>
            Professional evolution and academic milestones that shaped an <span className="text-foreground">engineering mindset</span>.
          </>
        }
      />

      <ol className="relative mx-auto max-w-4xl">
        {/* Rail */}
        <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[calc(11rem+7px)]" />

        {EXPERIENCE.map((item) => (
          <motion.li
            key={`${item.title}-${item.period}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="relative grid gap-3 pb-10 pl-9 last:pb-0 sm:pb-12 sm:pl-10 md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0"
          >
            <span aria-hidden className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background md:left-44" />

            <div className="md:pt-1 md:text-right md:pr-4">
              <p className="font-mono text-xs uppercase tracking-wider text-primary md:sticky md:top-28">{item.period}</p>
            </div>

            <article className="card-interactive p-5 sm:p-6 md:ml-6 lg:p-8">
              <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-balance sm:text-xl">{item.title}</h3>
                <span className={cn('rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider', TYPE_STYLES[item.type])}>
                  {item.type}
                </span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground sm:mb-5">{item.organization}</p>
              <ul className="space-y-2.5">
                {item.description.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
