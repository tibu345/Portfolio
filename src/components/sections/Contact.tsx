import { CheckCircle2, Linkedin, Mail, MapPin, Send, type LucideIcon } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { PROFILE } from '@/data/profile';
import { cn } from '@/lib/utils';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfdIO3ner8iKOtF68KoANxdT6F7vWgYRhmmDkrN6zKOCHc3xw/formResponse';

const FIELDS = [
  { name: 'name', label: 'Name', entry: 'entry.985518816', placeholder: 'Jane Doe', required: true, type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', entry: 'entry.1289129577', placeholder: 'jane@example.com', required: true, type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', entry: 'entry.378830934', placeholder: 'Project inquiry', required: false, type: 'text', autoComplete: 'off' },
] as const;

const MESSAGE_ENTRY = 'entry.1255744465';

const CHANNELS: { label: string; value: string; href?: string; icon: LucideIcon }[] = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'LinkedIn', value: PROFILE.linkedin, href: `https://${PROFILE.linkedin}`, icon: Linkedin },
  { label: 'Location', value: PROFILE.location, icon: MapPin },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-base text-foreground pointer-fine:text-sm placeholder:text-muted-foreground/50 transition-colors focus:border-primary/60 focus:outline-none';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const body = new URLSearchParams();
    for (const field of FIELDS) body.append(field.entry, String(data.get(field.name) ?? ''));
    body.append(MESSAGE_ENTRY, String(data.get('message') ?? ''));

    setStatus('sending');
    try {
      // Google Forms does not send CORS headers, so the response is opaque.
      await fetch(GOOGLE_FORM_ACTION_URL, { method: 'POST', mode: 'no-cors', body });
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" tone="raised">
      <SectionHeader
        eyebrow="Collaboration"
        title={
          <>
            Ready to spark a <span className="font-serif italic text-primary">conversation?</span>
          </>
        }
      />

      <Reveal className="card mx-auto grid max-w-5xl gap-10 p-5 sm:p-8 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:p-12">
        <div>
          <p className="mb-6 leading-relaxed text-muted-foreground sm:mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {CHANNELS.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="rounded-xl bg-white/5 p-3 text-primary">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="inline-block py-1.5 font-medium [overflow-wrap:anywhere] hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="@container space-y-5">
          <div className="grid gap-5 @md:grid-cols-2">
            {FIELDS.map((field) => (
              <div key={field.name} className={cn('space-y-2', field.name === 'subject' && '@md:col-span-2')}>
                <label htmlFor={`contact-${field.name}`} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {field.label}
                  {field.required && <span className="text-primary"> *</span>}
                </label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  className={cn(inputClass, 'h-12')}
                />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message<span className="text-primary"> *</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project…"
              className={cn(inputClass, 'resize-none')}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <Send size={16} aria-hidden />
          </Button>

          <p role="status" aria-live="polite" className="min-h-6 text-center text-sm">
            {status === 'sent' && (
              <span className="inline-flex items-center gap-2 text-emerald-400">
                <CheckCircle2 size={16} aria-hidden /> Thanks! Your message was sent.
              </span>
            )}
            {status === 'error' && (
              <span className="text-red-400">
                Couldn't send right now — please email me at{' '}
                <a href={`mailto:${PROFILE.email}`} className="underline">
                  {PROFILE.email}
                </a>
                .
              </span>
            )}
          </p>
        </form>
      </Reveal>
    </Section>
  );
}
