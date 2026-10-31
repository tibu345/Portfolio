import { motion, type HTMLMotionProps } from 'motion/react';
import { fadeUp, inViewOnce } from '@/lib/motion';

/** Fades its children up once they scroll into view. */
export default function Reveal(props: HTMLMotionProps<'div'>) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={inViewOnce} {...props} />;
}
