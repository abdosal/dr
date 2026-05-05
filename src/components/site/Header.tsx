import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { cn } from "@/lib/utils";

const SECTIONS = ["home", "about", "services", "pricing", "results", "faq", "contact"] as const;

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "pricing", label: t.nav.pricing },
    { id: "results", label: t.nav.results },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const languageSwitcher = (
    <div
      className="hidden sm:flex items-center gap-1 rounded-full bg-white/45 p-1"
      aria-label={t.ui.language}
    >
      {([
        ["fr", "FR"],
        ["ar", "AR"],
      ] as const).map(([value, label]) => (
        <button
          key={value}
          onClick={() => setLang(value)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-all",
            lang === value
              ? "bg-white text-foreground shadow-sm"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
            scrolled ? "glass-strong shadow-soft" : "glass"
          )}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center shadow-glass">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary-foreground" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 6 4 6 7c0 2 .5 4 1.5 6 .8 1.6 1 3 1 4.5 0 1.5.5 2.5 1.5 2.5s1.5-1 2-2.5c.5-1.5 1.5-1.5 2 0s1 2.5 2 2.5 1.5-1 1.5-2.5c0-1.5.2-2.9 1-4.5 1-2 1.5-4 1.5-6 0-3-2-5-6-5z" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display text-xl tracking-tight">SmileCare</span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                data-nav-link
                data-target={n.id}
                onClick={() => go(n.id)}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors data-[active=true]:text-primary"
              >
                {n.label}
                <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 [[data-active=true]>&]:w-6" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-foreground/60" />
              {languageSwitcher}
            </div>
            <button
              onClick={() => go("contact")}
              className="hidden md:inline-flex px-5 py-2.5 rounded-full gradient-primary text-primary-foreground text-sm font-semibold shadow-glass hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              {t.nav.book}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-full hover:bg-white/40 transition-colors"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-[600px] mt-3 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass-strong rounded-3xl p-4 shadow-soft">
            <nav className="flex flex-col">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => go(n.id)}
                  className="text-left px-4 py-3 rounded-2xl text-sm font-medium hover:bg-white/40 transition-colors"
                >
                  {n.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2 px-2">
                <div className="flex-1 rounded-2xl bg-white/40 p-1">
                  <div className="mb-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-foreground/60">
                    <Globe className="h-3.5 w-3.5" />
                    {t.ui.language}
                  </div>
                  <div className="flex gap-1">
                    {([
                      ["fr", "FR"],
                      ["ar", "AR"],
                    ] as const).map(([value, label]) => (
                      <button
                        key={value}
                        onClick={() => setLang(value)}
                        className={cn(
                          "flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                          lang === value
                            ? "bg-white text-foreground"
                            : "text-foreground/70 hover:bg-white/40"
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => go("contact")}
                  className="flex-[2] px-4 py-3 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold shadow-glass"
                >
                  {t.nav.book}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export { SECTIONS };
