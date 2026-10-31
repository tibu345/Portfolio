import { ButtonLink } from '@/components/ui/Button';
import { PROFILE, SOCIAL_LINKS } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{PROFILE.name}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} · {PROFILE.role} · {PROFILE.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <ButtonLink key={label} href={href} target="_blank" rel="noreferrer" variant="icon" size="icon" aria-label={label}>
              <Icon size={18} />
            </ButtonLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
