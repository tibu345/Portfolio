import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-white hover:shadow-glow',
        ghost: 'border border-white/10 bg-white/5 text-foreground backdrop-blur hover:border-white/25 hover:bg-white/10',
        icon: 'border border-white/10 bg-white/5 text-white/70 hover:border-primary/40 hover:text-primary',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-12 px-7 text-sm',
        lg: 'h-14 px-9 text-sm',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = 'button', ...props }: ComponentProps<'button'> & Variants) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({ className, variant, size, ...props }: ComponentProps<'a'> & Variants) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
