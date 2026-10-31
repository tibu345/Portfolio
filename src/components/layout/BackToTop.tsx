import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';

export default function BackToTop() {
  const visible = useScrolled(600);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0 })}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex size-11 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-glow backdrop-blur transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:size-12 print:hidden"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
