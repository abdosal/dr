import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import heroImg from "@/assets/clinic-hero.jpg";

export function Hero() {
  const { t } = useLang();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="blob -left-40 -top-40 h-[500px] w-[500px] bg-primary/30" />
      <div className="blob top-1/2 -right-32 h-[400px] w-[400px] bg-accent/40" />
      <div className="gradient-hero absolute inset-0 -z-10" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="reveal lg:col-span-6">
            <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.badge}
            </div>
            <h1 className="mb-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {t.hero.title} <span className="gradient-text italic">{t.hero.titleAccent}</span>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.hero.subtitle}</p>
            <div className="mb-12 flex flex-wrap gap-3">
              <button
                onClick={() => go("contact")}
                className="group inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-glass transition-all hover:-translate-y-0.5 hover:shadow-glow"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => go("services")}
                className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 font-semibold text-foreground transition-all hover:bg-white"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.hero.stats.map((s, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="font-display text-3xl font-semibold gradient-text sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
              <img
                src={heroImg}
                alt="SmileCare clinic interior"
                width={1536}
                height={1024}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="glass-strong animate-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl p-4 shadow-glass sm:-left-8">
              <button className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-glass">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </button>
              <div>
                <div className="text-sm font-semibold">{t.hero.videoTitle}</div>
                <div className="text-xs text-muted-foreground">{t.hero.videoSubtitle}</div>
              </div>
            </div>

            <div
              className="glass-strong animate-float absolute -right-2 -top-4 rounded-2xl px-4 py-3 shadow-glass sm:-right-6"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-xs text-muted-foreground">★★★★★</div>
              <div className="text-sm font-semibold">4.9 / 5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
