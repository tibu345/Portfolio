import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { FEATURED_PROJECTS } from '@/data/projects';
import { cn } from '@/lib/utils';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Track which card is snapped at the left edge and whether we can scroll further.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const step = first ? first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0') : 1;
      setActive(Math.round(track.scrollLeft / step));
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };

    update();
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      track.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToCard = (index: number) => {
    const card = trackRef.current?.children[index] as HTMLElement | undefined;
    trackRef.current?.scrollTo({ left: card?.offsetLeft ?? 0 });
  };

  const scrollByPage = (direction: 1 | -1) => {
    const track = trackRef.current;
    track?.scrollBy({ left: direction * track.clientWidth * 0.9 });
  };

  return (
    <Section id="projects" tone="raised" className="overflow-hidden">
      <SectionHeader eyebrow="Selected work" title="Featured projects" />

      <Reveal className="mx-auto max-w-7xl 2xl:max-w-[96rem]">
        <ul
          ref={trackRef}
          aria-label="Featured projects"
          className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-4 pb-4 pt-2 motion-reduce:scroll-auto sm:-mx-6 sm:scroll-px-6 sm:px-6 md:gap-6"
        >
          {FEATURED_PROJECTS.map((project) => (
            <li key={project.title} className="w-[86%] max-w-[26rem] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] sm:max-w-none md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] 2xl:w-[calc((100%-4.5rem)/4)]">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8">
          {/* Narrow phones: a compact counter instead of dots. */}
          <p className="font-mono text-sm text-muted-foreground sm:hidden" aria-live="polite">
            <span className="text-foreground">{active + 1}</span> / {FEATURED_PROJECTS.length}
          </p>

          <div className="-ml-[7px] hidden min-w-0 flex-wrap items-center sm:flex" role="group" aria-label="Choose project">
            {FEATURED_PROJECTS.map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to ${project.title}`}
                aria-current={active === i ? 'true' : undefined}
                className="group/dot flex h-8 items-center px-[7px]"
              >
                <span
                  className={cn(
                    'block h-1.5 rounded-full transition-all duration-300',
                    active === i ? 'w-8 bg-primary' : 'w-2.5 bg-white/15 group-hover/dot:bg-white/30',
                  )}
                />
              </button>
            ))}
          </div>

          <div className="flex shrink-0 gap-2">
            <Button variant="icon" size="icon" onClick={() => scrollByPage(-1)} disabled={atStart} aria-label="Previous projects">
              <ArrowLeft size={18} />
            </Button>
            <Button variant="icon" size="icon" onClick={() => scrollByPage(1)} disabled={atEnd} aria-label="Next projects">
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
