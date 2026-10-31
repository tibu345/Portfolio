import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'left';
}

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <Reveal className={cn('mb-10 sm:mb-14 lg:mb-20 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <p className="eyebrow mb-3 sm:mb-4">{eyebrow}</p>
      <h2 className="text-display-md font-display font-bold tracking-tight text-balance">{title}</h2>
      {description && (
        <p className={cn('mt-5 text-muted-foreground leading-relaxed text-pretty md:text-lg', align === 'center' && 'mx-auto max-w-2xl')}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
