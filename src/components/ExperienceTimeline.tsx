import { motion } from 'motion/react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export default function ExperienceTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse group-hover:animate-none" />
          </div>

          {/* Content */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-[2.5rem] shadow-3xl border border-white/5 group-hover:border-primary/20 group-hover:bg-white/[0.08] transition-all duration-700">
            <div className="flex items-center justify-between mb-4">
              <time className="font-serif italic text-[11px] font-bold text-primary uppercase tracking-[0.3em]">{item.period}</time>
              <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${item.type === 'work' ? 'border-primary/20 text-primary bg-primary/5' : 'border-blue-500/20 text-blue-400 bg-blue-500/5'}`}>
                {item.type}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-500">{item.title}</h3>
            <p className="text-sm font-medium text-white/50 mb-6">{item.organization}</p>
            <ul className="space-y-3">
              {item.description.map((desc, i) => (
                <li key={i} className="text-[13px] text-muted-foreground/80 flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1 opacity-60">/</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
