import { motion, useReducedMotion } from 'motion/react';
import { ChevronRight, RotateCcw, Terminal as TerminalIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PROFILE } from '@/data/profile';

const COMMANDS = [
  { cmd: 'whoami', output: `${PROFILE.name} // Senior Computer Engineering Student @ Lebanese American University` },
  { cmd: 'interests', output: '["IT Systems", "Machine Learning", "Software Design", "Community Tech"]' },
  { cmd: 'status', output: 'Building production-minded software with systems depth.' },
  { cmd: 'contact', output: PROFILE.email },
];

const TYPE_MS = 55;
const PAUSE_MS = 700;

export default function Terminal() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0); // number of completed commands
  const [typed, setTyped] = useState('');
  const [run, setRun] = useState(0); // bump to restart
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      setStep(COMMANDS.length);
      return;
    }
    if (step >= COMMANDS.length) return;

    const target = COMMANDS[step].cmd;
    const done = typed === target;
    const timer = setTimeout(
      () => {
        if (done) {
          setStep((s) => s + 1);
          setTyped('');
        } else {
          setTyped(target.slice(0, typed.length + 1));
        }
      },
      done || typed === '' ? PAUSE_MS : TYPE_MS,
    );
    return () => clearTimeout(timer);
  }, [step, typed, run, reduceMotion]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [step, typed]);

  const restart = () => {
    setStep(0);
    setTyped('');
    setRun((r) => r + 1);
  };

  return (
    <div className="group/terminal mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-surface/70 text-left shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3 border-b border-border bg-white/[0.03] py-2 pl-4 pr-2 sm:pl-5">
        <div className="flex shrink-0 gap-1.5 sm:gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-red-500/50" />
          <span className="size-3 rounded-full bg-yellow-500/50" />
          <span className="size-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex min-w-0 items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:tracking-widest">
          <TerminalIcon size={12} aria-hidden className="shrink-0" />
          <span className="truncate">sami@portfolio: ~</span>
        </div>
        <button
          type="button"
          onClick={restart}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition hover:text-primary pointer-fine:size-8 pointer-fine:opacity-0 pointer-fine:group-hover/terminal:opacity-100 pointer-fine:focus-visible:opacity-100"
          aria-label="Replay terminal"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      <div ref={scrollRef} className="no-scrollbar h-52 overflow-y-auto p-4 font-mono text-xs leading-relaxed [overflow-wrap:anywhere] sm:h-60 sm:p-5 sm:text-sm [@media(max-height:30rem)]:h-40">
        {COMMANDS.slice(0, step).map(({ cmd, output }) => (
          <motion.div key={`${run}-${cmd}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3">
            <p className="flex items-center gap-2 text-primary">
              <ChevronRight size={14} aria-hidden />
              {cmd}
            </p>
            <p className="pl-5 text-muted-foreground">{output}</p>
          </motion.div>
        ))}

        <p className="flex items-center gap-2 text-primary" aria-hidden>
          <ChevronRight size={14} />
          {typed}
          <span className="inline-block h-4 w-2 animate-blink bg-primary" />
        </p>
      </div>
    </div>
  );
}
