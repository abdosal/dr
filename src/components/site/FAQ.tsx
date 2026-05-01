import { useState } from "react";
import { Plus } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl lg:text-5xl">{t.faq.title}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="glass-strong rounded-2xl overflow-hidden shadow-soft reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-foreground/90">{item.q}</span>
                  <span
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full gradient-primary text-primary-foreground flex items-center justify-center transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
