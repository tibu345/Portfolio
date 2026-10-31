import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const { title, description, tags, image, github, demo } = project;
  const primaryHref = demo ?? github;

  return (
    <article
      className={cn(
        'card-interactive group relative flex h-full flex-col overflow-hidden',
        // The stretched title link hides its own outline, so show focus on the whole card.
        'has-[.card-link:focus-visible]:outline-2 has-[.card-link:focus-visible]:outline-offset-4 has-[.card-link:focus-visible]:outline-primary',
        className,
      )}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border bg-gradient-to-br from-primary/20 via-surface-2 to-surface">
        <img
          src={image}
          alt=""
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 text-lg font-semibold text-balance transition-colors group-hover:text-primary sm:text-xl">
          {primaryHref ? (
            // Stretched link: the whole card is clickable while nested links stay reachable.
            <a href={primaryHref} target="_blank" rel="noreferrer" className="card-link after:absolute after:inset-0 focus-visible:outline-none">
              {title}
              <ArrowUpRight size={18} aria-hidden className="ml-1 inline-block align-[-2px] transition pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100" />
            </a>
          ) : (
            title
          )}
        </h3>

        <p className="mb-5 text-pretty text-sm leading-relaxed text-muted-foreground [@media(max-height:30rem)]:line-clamp-3">{description}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag} className="chip px-2.5 text-[11px]">
              {tag}
            </li>
          ))}
        </ul>

        {(demo || github) && (
          <div className="relative z-10 mt-4 flex gap-5 border-t border-border pt-2 text-sm">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-foreground/80 hover:text-primary">
                <ExternalLink size={14} aria-hidden /> Live demo
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-foreground/80 hover:text-primary">
                <Github size={14} aria-hidden /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
