import { motion } from 'motion/react';
import { Calendar, CheckCircle2, MapPin, Zap, type LucideIcon } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { PROFILE } from '@/data/profile';
import { fadeUp, inViewOnce, staggerContainer } from '@/lib/motion';
import profileImg from '@/assets/profile.jpeg';

const FACTS: { label: string; value: string; icon: LucideIcon }[] = [
  { label: 'Location', value: PROFILE.location, icon: MapPin },
  { label: 'Graduation', value: PROFILE.graduation, icon: Calendar },
  { label: 'Focus', value: PROFILE.focus, icon: Zap },
  { label: 'Availability', value: PROFILE.availability, icon: CheckCircle2 },
];

export default function About() {
  return (
    <Section id="about" tone="raised">
      <SectionHeader
        eyebrow="Introduction"
        title={
          <>
            Engineering for <span className="font-serif italic text-primary">human impact</span>
          </>
        }
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-2"
      >
        <motion.figure variants={fadeUp} className="card group overflow-hidden p-2 md:row-span-2">
          <img
            src={profileImg}
            alt={`Portrait of ${PROFILE.name}`}
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[1.25rem] object-cover transition duration-700 sm:aspect-video md:aspect-auto md:h-full md:max-h-[36rem] pointer-fine:grayscale pointer-fine:group-hover:grayscale-0"
          />
        </motion.figure>

        <motion.div variants={fadeUp} className="card p-5 sm:p-7">
          <p className="text-pretty leading-relaxed text-muted-foreground lg:text-lg">
            Senior Computer Engineering student focused on <span className="text-foreground">IT systems</span>,{' '}
            <span className="text-foreground">machine learning</span>, and robust software design. I enjoy translating technical
            complexity into reliable, well-structured solutions that teams can build on — especially when serving community needs
            through technology.
          </p>
        </motion.div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
          {FACTS.map(({ label, value, icon: Icon }) => (
            <motion.li key={label} variants={fadeUp} className="card @container">
              {/* Icon sits beside the text when the card is wide enough, above it otherwise. */}
              <div className="flex h-full flex-col items-start gap-3 p-4 @[13rem]:flex-row @[13rem]:items-center sm:p-5">
                <span className="shrink-0 rounded-xl bg-primary/10 p-2.5 text-primary">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.blockquote
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        className="card mx-auto mt-3 max-w-6xl border-primary/15 bg-primary/[0.04] p-5 font-serif text-lg italic leading-relaxed text-foreground/80 sm:mt-4 sm:p-7 sm:text-xl lg:text-2xl"
      >
        “I am looking for engineering internships where I can contribute across backend development, infrastructure-minded
        problem solving, technically rigorous product work, and community-oriented technology initiatives.”
      </motion.blockquote>
    </Section>
  );
}
