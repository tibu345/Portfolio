import { motion } from 'motion/react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { OTHER_PROJECTS } from '@/data/projects';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';

export default function OtherProjects() {
  return (
    <Section id="other-projects">
      <SectionHeader
        eyebrow="Explorations"
        title="Hardware & control"
        description={
          <>
            Diving into the intersection of <span className="text-foreground">mechanical precision</span> and digital logic.
          </>
        }
      />

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        className="mx-auto grid max-w-5xl gap-3 sm:gap-4 lg:grid-cols-2"
      >
        {OTHER_PROJECTS.map(({ title, description, tags, image }) => (
          <motion.li key={title} variants={fadeUp} className="card-interactive group @container overflow-hidden">
            {/* Image on top in narrow cards, beside the text once the card is wide enough. */}
            <div className="flex flex-col gap-4 p-3 @md:flex-row @md:gap-5">
              <img
                src={image}
                alt=""
                width={600}
                height={600}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full shrink-0 rounded-2xl bg-surface-2 object-cover transition duration-500 @md:aspect-square @md:w-36 pointer-fine:grayscale pointer-fine:group-hover:grayscale-0"
              />
              <div className="px-2 pb-2 @md:px-0 @md:py-2 @md:pr-2">
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <li key={tag} className="chip px-2.5 text-[11px]">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
