import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const SPRING = { stiffness: 500, damping: 30, mass: 0.5 };

function Cursor() {
  const x = useSpring(-100, SPRING);
  const y = useSpring(-100, SPRING);
  const scale = useSpring(1, SPRING);
  const fill = useMotionValue('rgba(0, 0, 0, 0)');

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    const onOver = (e: PointerEvent) => {
      const interactive = (e.target as Element).closest('a, button, input, textarea, [role="button"]') !== null;
      scale.set(interactive ? 2 : 1);
      fill.set(interactive ? 'rgba(0, 242, 255, 0.1)' : 'rgba(0, 0, 0, 0)');
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
    };
  }, [x, y, scale, fill]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex size-8 items-center justify-center rounded-full border border-primary"
      style={{ x, y, scale, backgroundColor: fill }}
    >
      <span className="size-1 rounded-full bg-primary" />
    </motion.div>
  );
}

/** Decorative follower ring, only for precise pointers and when motion is allowed. */
export default function CustomCursor() {
  const enabled = useMediaQuery('(pointer: fine) and (prefers-reduced-motion: no-preference)');
  return enabled ? <Cursor /> : null;
}
