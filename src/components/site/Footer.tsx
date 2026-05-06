import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function Footer() {
  const { t } = useLang();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative mt-10 bg-linear-to-b from-transparent to-primary/5 pb-8 pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary shadow-glass">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary-foreground" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 6 4 6 7c0 2 .5 4 1.5 6 .8 1.6 1 3 1 4.5 0 1.5.5 2.5 1.5 2.5s1.5-1 2-2.5c.5-1.5 1.5-1.5 2 0s1 2.5 2 2.5 1.5-1 1.5-2.5c0-1.5.2-2.9 1-4.5 1-2 1.5-4 1.5-6 0-3-2-5-6-5z" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display text-xl">El haila dental clinique</span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass-strong flex h-9 w-9 items-center justify-center rounded-full text-foreground/70 transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { id: "about", label: t.nav.about },
                { id: "services", label: t.nav.services },
                { id: "pricing", label: t.nav.pricing },
                { id: "results", label: t.nav.results },
                { id: "faq", label: t.nav.faq },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t.footer.ourServices}</h4>
            <ul className="space-y-2">
              {t.services.list.slice(0, 5).map((s) => (
                <li key={s.name}>
                  <span className="text-sm text-muted-foreground">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t.contact.info.address}
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {t.contact.info.phone}
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                contact@El haila dental clinique.fr
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} El haila dental clinique Dental Clinic. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
