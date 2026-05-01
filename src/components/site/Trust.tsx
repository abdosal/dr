import { ShieldCheck, Cpu, HeartHandshake, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const ICONS = [ShieldCheck, Cpu, HeartHandshake, Sparkles];

export function Trust() {
  const { t } = useLang();
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl lg:text-4xl mb-12 reveal">{t.trust.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.trust.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="glass-strong rounded-3xl p-6 shadow-soft hover:shadow-glass transition-all hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground mb-4 shadow-glass">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
