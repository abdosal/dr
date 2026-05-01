import { Check } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import dentistImg from "@/assets/dentist.jpg";
import receptionImg from "@/assets/clinic-reception.jpg";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="blob bg-accent/30 w-[400px] h-[400px] top-20 -left-32" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className="relative reveal">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 rounded-3xl overflow-hidden shadow-glass">
                <img src={dentistImg} alt="Lead dentist" width={1024} height={1024} loading="lazy" className="w-full h-[420px] object-cover" />
              </div>
              <div className="col-span-2 flex flex-col gap-4 mt-10">
                <div className="rounded-3xl overflow-hidden shadow-glass">
                  <img src={receptionImg} alt="Reception area" width={1024} height={1024} loading="lazy" className="w-full h-[200px] object-cover" />
                </div>
                <div className="glass-strong rounded-3xl p-5 shadow-soft">
                  <div className="text-3xl font-display gradient-text font-semibold">15+</div>
                  <div className="text-xs text-muted-foreground mt-1">years caring for smiles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal">
            <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              {t.about.subtitle}
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">{t.about.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{t.about.desc}</p>
            <ul className="space-y-3">
              {t.about.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
