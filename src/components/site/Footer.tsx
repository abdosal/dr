import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function Footer() {
  const { t } = useLang();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-8 mt-10 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center shadow-glass">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 6 4 6 7c0 2 .5 4 1.5 6 .8 1.6 1 3 1 4.5 0 1.5.5 2.5 1.5 2.5s1.5-1 2-2.5c.5-1.5 1.5-1.5 2 0s1 2.5 2 2.5 1.5-1 1.5-2.5c0-1.5.2-2.9 1-4.5 1-2 1.5-4 1.5-6 0-3-2-5-6-5z" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display text-xl">SmileCare</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.footer.tagline}</p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass-strong flex items-center justify-center text-foreground/70 hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { id: "about", label: t.nav.about },
                { id: "services", label: t.nav.services },
                { id: "pricing", label: t.nav.pricing },
                { id: "results", label: t.nav.results },
                { id: "faq", label: t.nav.faq },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{t.footer.ourServices}</h4>
            <ul className="space-y-2">
              {t.services.list.slice(0, 5).map((s) => (
                <li key={s.name}><span className="text-sm text-muted-foreground">{s.name}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />{t.contact.info.address}</li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />{t.contact.info.phone}</li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />contact@smilecare.fr</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border/60 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} SmileCare Dental Clinic. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
