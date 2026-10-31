import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends ComponentProps<'section'> {
  id: string;
  /** Alternate background tone so neighbouring sections stay distinguishable. */
  tone?: 'base' | 'raised';
}

export default function Section({ id, tone = 'base', className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-20 py-20 sm:py-24 lg:py-32 [@media(max-height:30rem)]:py-14',
        tone === 'raised' && 'bg-surface',
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
