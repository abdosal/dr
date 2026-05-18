import {
  Sparkles,
  Smile,
  Gem,
  Wrench,
  AlignCenter,
  Crown,
  Activity,
  Siren,
} from "lucide-react";
import { useLang } from "@/lib/lang-context";

const ICONS = [Sparkles, Smile, Gem, Wrench, AlignCenter, Crown, Activity, Siren];

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {t.services.subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl">{t.services.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.list.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group glass-strong rounded-3xl p-6 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/30 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg mb-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
