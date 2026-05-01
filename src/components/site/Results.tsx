import { useLang } from "@/lib/lang-context";
import whitening from "@/assets/result-whitening.jpg";
import veneers from "@/assets/result-veneers.jpg";
import alignment from "@/assets/result-alignment.jpg";

const IMAGES = [whitening, veneers, alignment];

export function Results() {
  const { t } = useLang();
  return (
    <section id="results" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {t.results.subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl">{t.results.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.results.cases.map((c, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 reveal glass-strong"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={c.title}
                  width={1280}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/85 text-xs font-semibold backdrop-blur">Avant</span>
                  <span className="px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">Après</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
