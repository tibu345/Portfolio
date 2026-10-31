import { useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold: number): boolean {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > threshold;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  return scrolled;
}
