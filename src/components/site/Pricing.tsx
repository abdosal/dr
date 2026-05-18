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

export function Pricing() {
  const { t } = useLang();

  const book = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="pricing" className="py-20 lg:py-28 relative">
      <div className="blob bg-primary/20 w-[400px] h-[400px] bottom-0 right-0" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14 reveal">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {t.pricing.subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl">{t.pricing.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.services.list.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group glass-strong rounded-3xl p-7 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 reveal flex items-start gap-5"
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/30 flex items-center justify-center text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <button
                    onClick={book}
                    className="inline-flex items-center px-4 py-2 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-glass hover:shadow-glow transition-all hover:-translate-y-0.5"
                  >
                    {t.pricing.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
