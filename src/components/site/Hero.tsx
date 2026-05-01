import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import heroImg from "@/assets/clinic-hero.jpg";

export function Hero() {
  const { t } = useLang();
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob bg-primary/30 w-[500px] h-[500px] -top-40 -left-40" />
      <div className="blob bg-accent/40 w-[400px] h-[400px] top-1/2 -right-32" />
      <div className="absolute inset-0 gradient-hero -z-10" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {t.hero.title}{" "}
              <span className="gradient-text italic">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => go("contact")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glass hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => go("services")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-strong font-semibold text-foreground hover:bg-white transition-all"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.hero.stats.map((s, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="font-display text-3xl sm:text-4xl gradient-text font-semibold">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-6 relative reveal">
            <div className="relative rounded-[2rem] overflow-hidden shadow-glow">
              <img
                src={heroImg}
                alt="SmileCare clinic interior"
                width={1536}
                height={1024}
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating video card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 glass-strong rounded-2xl p-4 shadow-glass flex items-center gap-3 animate-float">
              <button className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shadow-glass">
                <Play className="w-4 h-4 ml-0.5 fill-current" />
              </button>
              <div>
                <div className="text-sm font-semibold">{t.hero.videoTitle}</div>
                <div className="text-xs text-muted-foreground">{t.hero.videoSubtitle}</div>
              </div>
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-4 -right-2 sm:-right-6 glass-strong rounded-2xl px-4 py-3 shadow-glass animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground">★★★★★</div>
              <div className="text-sm font-semibold">4.9 / 5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
