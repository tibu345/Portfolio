import { motion, HTMLMotionProps } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export interface SkillBadgeProps extends HTMLMotionProps<"div"> {
  name: string;
  icon: LucideIcon;
  level: number; // 0-100
  category: string;
}

export default function SkillBadge({ name, icon: Icon, level, category, ...props }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-4 rounded-2xl flex flex-col gap-3 group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] transition-all duration-300"
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-sm border border-white/5">
          <Icon size={22} />
        </div>
        <span className="text-[8px] font-serif italic text-muted-foreground uppercase tracking-[0.3em] font-bold group-hover:text-primary transition-colors">{category}</span>
      </div>
      
      <div className="mt-2">
        <div className="mb-2">
          <h4 className="font-display font-bold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">{name}</h4>
        </div>
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
            className="h-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.4)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
