import { AnimatePresence, motion } from 'motion/react';
import { Menu, Terminal, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { NAV_ITEMS, PROFILE, RESUME_URL, SOCIAL_LINKS } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(40);
  const active = useActiveSection(SECTION_IDS);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const isDesktop = useMediaQuery('(min-width: 64rem)');

  // The drawer is hidden at lg+, so close it (and release the scroll lock) on resize/rotate.
  useEffect(() => {
    if (isDesktop) setIsOpen(false);
  }, [isDesktop]);

  // Mobile drawer: lock scroll, close on Escape, move focus in and back out.
  useEffect(() => {
    if (!isOpen) return;
    const toggle = toggleRef.current;
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    drawerRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      toggle?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] transition-[padding] duration-500 print:hidden',
          scrolled ? 'pt-[max(0.5rem,env(safe-area-inset-top))] sm:pt-3' : 'pt-[max(1.25rem,env(safe-area-inset-top))]',
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            'mx-auto flex w-[calc(100%-1rem)] max-w-6xl items-center justify-between gap-3 rounded-full py-1.5 pl-2 pr-1.5 transition-all duration-500 sm:w-[calc(100%-2rem)] sm:py-2 sm:pl-4 sm:pr-2 lg:px-6',
            scrolled && 'border border-border bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl',
          )}
        >
          <a href="#top" className="group flex min-h-11 shrink-0 items-center gap-2.5 rounded-full pr-2">
            <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Terminal size={15} aria-hidden />
            </span>
            <span className="whitespace-nowrap text-sm font-semibold tracking-wide">{PROFILE.name}</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={cn(
                    'relative block whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors xl:px-3.5',
                    active === item.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href={RESUME_URL} target="_blank" rel="noreferrer" size="sm"
              className={cn('hidden h-10 sm:inline-flex', isOpen && 'invisible')}
              tabIndex={isOpen ? -1 : undefined}
            >
              Resume
            </ButtonLink>
            <Button
              ref={toggleRef}
              variant="icon"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              id="mobile-menu"
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="absolute inset-y-0 right-0 flex w-[min(85%,24rem)] flex-col justify-between gap-8 overflow-y-auto overscroll-contain border-l border-border bg-surface px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pr-[max(1.5rem,env(safe-area-inset-right))] pt-24 sm:px-8 [@media(max-height:30rem)]:pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1 [@media(max-height:30rem)]:grid [@media(max-height:30rem)]:grid-cols-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block py-2 text-2xl font-semibold transition-colors sm:text-3xl [@media(max-height:30rem)]:text-xl',
                        active === item.id ? 'text-primary' : 'text-foreground hover:text-primary',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-5">
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <ButtonLink key={label} href={href} target="_blank" rel="noreferrer" variant="icon" size="icon" aria-label={label}>
                      <Icon size={18} />
                    </ButtonLink>
                  ))}
                </div>
                <ButtonLink href={RESUME_URL} target="_blank" rel="noreferrer" size="lg" className="w-full">
                  Resume
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
