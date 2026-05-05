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
        <div className="reveal mb-14 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.results.subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl">{t.results.title}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.results.cases.map((c, i) => (
            <div
              key={i}
              className="reveal glass-strong group overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={c.title}
                  width={1280}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute left-3 top-3 flex gap-2">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {t.ui.before}
                  </span>
                  <span className="rounded-full gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {t.ui.after}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
