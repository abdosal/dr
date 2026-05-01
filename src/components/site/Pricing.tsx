import { useLang } from "@/lib/lang-context";

export function Pricing() {
  const { t } = useLang();
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

        <div className="max-w-4xl mx-auto glass-strong rounded-3xl shadow-glass overflow-hidden reveal">
          <div className="grid grid-cols-12 px-6 py-4 bg-primary/8 text-xs font-semibold uppercase tracking-wider text-primary">
            <div className="col-span-4">{t.pricing.cols[0]}</div>
            <div className="col-span-5 hidden sm:block">{t.pricing.cols[1]}</div>
            <div className="col-span-8 sm:col-span-3 text-right">{t.pricing.cols[2]}</div>
          </div>
          <div className="divide-y divide-border/60">
            {t.services.list.map((s, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-white/40 transition-colors">
                <div className="col-span-4 font-medium">{s.name}</div>
                <div className="col-span-5 hidden sm:block text-sm text-muted-foreground">{s.desc}</div>
                <div className="col-span-8 sm:col-span-3 text-right font-display text-lg font-semibold gradient-text">
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
