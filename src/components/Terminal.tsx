import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, ChevronRight, RotateCcw } from 'lucide-react';

const COMMANDS = [
  { cmd: 'whoami', output: 'Sami Harb // Senior Computer Engineering Student @ Lebanese American University' },
  { cmd: 'interests', output: '["IT Systems", "Machine Learning", "Software Design", "Community Tech"]' },
  { cmd: 'status', output: 'Building production-minded software with systems depth.' },
  { cmd: 'contact', output: 'harbs4678@gmail.com' },
];

export default function Terminal() {
  const [lines, setLines] = useState<{ type: 'cmd' | 'output'; text: string }[]>([]);
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const restart = () => {
    setLines([]);
    setIndex(0);
    setDisplayedText('');
    setIsTyping(false);
  };

  useEffect(() => {
    if (index < COMMANDS.length && !isTyping) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        let charIndex = 0;
        const currentCmd = COMMANDS[index].cmd;
        
        const typingInterval = setInterval(() => {
          setDisplayedText(currentCmd.slice(0, charIndex + 1));
          charIndex++;
          
          if (charIndex === currentCmd.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
              setLines((prev) => [...prev, { type: 'cmd', text: currentCmd }]);
              setDisplayedText('');
              setLines((prev) => [...prev, { type: 'output', text: COMMANDS[index].output }]);
              setIndex((prev) => prev + 1);
              setIsTyping(false);
            }, 400);
          }
        }, 50);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [index, isTyping]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, displayedText]);

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-2xl overflow-hidden shadow-3xl border border-white/5 group/terminal">
      <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/30 group-hover/terminal:bg-red-500/60 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/30 group-hover/terminal:bg-yellow-500/60 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/30 group-hover/terminal:bg-green-500/60 transition-colors" />
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono uppercase tracking-widest opacity-60">
          <TerminalIcon size={12} />
          <span>SAMIDBG :: ZSH</span>
        </div>
        <button 
          onClick={restart}
          className="p-1 hover:text-primary transition-colors text-muted-foreground opacity-0 group-hover/terminal:opacity-100"
          title="Restart Terminal"
        >
          <RotateCcw size={14} />
        </button>
      </div>
      <div 
        ref={scrollRef}
        className="p-6 font-mono text-sm h-64 overflow-y-auto no-scrollbar bg-black/40"
      >
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`mb-2 ${line.type === 'cmd' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {line.type === 'cmd' ? (
                <span className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-primary" />
                  {line.text}
                </span>
              ) : (
                <span className="pl-5 block leading-relaxed">{line.text}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        
        {(isTyping || index < COMMANDS.length) && (
          <div className="flex items-center gap-2 text-primary">
            <ChevronRight size={14} />
            <span>{displayedText}</span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-primary inline-block"
            />
          </div>
        )}
      </div>
    </div>
  );
}
