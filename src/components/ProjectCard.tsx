import { motion, HTMLMotionProps } from 'motion/react';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps extends HTMLMotionProps<"div"> {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  impact?: string;
  isStatic?: boolean;
}

export default function ProjectCard({ title, description, tags, image, github, demo, impact, isStatic, ...props }: ProjectProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        "group h-full flex flex-col",
        isStatic ? "cursor-default" : "cursor-pointer"
      )}
      onClick={() => !isStatic && github && window.open(github, '_blank')}
    >
      <div className={cn(
        "relative aspect-video overflow-hidden rounded-2xl bg-white/5 mb-6 shrink-0 border border-white/10 transition-colors duration-500",
        !isStatic && "group-hover:border-primary/30"
      )}>
        <img 
          src={image} 
          alt={`Screenshot of ${title}`} 
          className={cn(
            "object-cover w-full h-full transition-transform duration-700",
            !isStatic && "group-hover:scale-105"
          )}
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${encodeURIComponent(title)}/800/600?blur=10`;
          }}
        />
        {!isStatic && <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}
      </div>
      
      <div className="space-y-3 flex flex-col flex-grow">
        <h3 className={cn(
          "text-2xl font-display font-bold text-white transition-colors duration-300",
          !isStatic && "group-hover:text-primary"
        )}>
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className={cn(
              "text-[9px] font-serif italic px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-muted-foreground transition-all duration-300",
              !isStatic && "group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5 uppercase tracking-widest"
            )}>
              {tag}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {description}
        </p>
        
        {!isStatic && (
          <div className="pt-4 mt-auto flex items-center gap-6">
            {github && (
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white/90 group-hover:text-primary transition-colors group/link">
                Code
                <Github size={14} className="transition-transform group-hover/link:scale-110" />
              </div>
            )}
            {demo && (
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demo, '_blank');
                }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-primary transition-colors group/demo"
              >
                Live Demo
                <ExternalLink size={14} className="transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
