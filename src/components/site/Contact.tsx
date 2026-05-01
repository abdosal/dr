import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { cn } from "@/lib/utils";

const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxx"
const WHATSAPP_NUMBER = "33123456789";

const schema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().max(1000).optional(),
});

type FormState = {
  name: string; email: string; phone: string;
  service: string; date: string; time: string; message: string;
};

const initial: FormState = { name: "", email: "", phone: "", service: "", date: "", time: "", message: "" };

export function Contact() {
  const { t, lang } = useLang();
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "missing" | "error">("idle");

  const update = (k: keyof FormState, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const r = schema.safeParse(data);
    if (r.success) return true;
    const errs: Partial<Record<keyof FormState, string>> = {};
    const e = t.contact.form.errors;
    r.error.issues.forEach((i) => {
      const key = i.path[0] as keyof FormState;
      if (key === "name") errs.name = e.name;
      else if (key === "email") errs.email = e.email;
      else if (key === "phone") errs.phone = e.phone;
      else if (key === "service") errs.service = e.service;
      else if (key === "date") errs.date = e.date;
      else if (key === "time") errs.time = e.time;
    });
    setErrors(errs);
    return false;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!FORMSPREE_ENDPOINT) {
      setStatus("missing");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        setData(initial);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const whatsappUrl = () => {
    const lines = [
      lang === "fr" ? "Bonjour, je souhaite réserver un rendez-vous." : "Hello, I would like to book an appointment.",
      `${t.contact.form.name}: ${data.name || "—"}`,
      `${t.contact.form.service}: ${data.service || "—"}`,
      `${t.contact.form.date}: ${data.date || "—"}`,
      `${t.contact.form.time}: ${data.time || "—"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const inputCls = (err?: string) =>
    cn(
      "w-full px-4 py-3 rounded-2xl bg-white/70 border transition-all outline-none focus:bg-white focus:ring-4 focus:ring-primary/15",
      err ? "border-destructive" : "border-border focus:border-primary"
    );

  const services = t.services.list.map((s) => s.name);

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="blob bg-primary/25 w-[500px] h-[500px] -top-20 right-0" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 reveal">
          <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {t.contact.subtitle}
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.contact.desc}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 glass-strong rounded-3xl p-6 sm:p-8 shadow-glass reveal">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.name}</label>
                <input value={data.name} onChange={(e) => update("name", e.target.value)} className={inputCls(errors.name)} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.email}</label>
                <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={inputCls(errors.email)} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.phone}</label>
                <input value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls(errors.phone)} />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.service}</label>
                <select value={data.service} onChange={(e) => update("service", e.target.value)} className={inputCls(errors.service)}>
                  <option value="">—</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.date}</label>
                <input type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className={inputCls(errors.date)} />
                {errors.date && <p className="text-xs text-destructive mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.time}</label>
                <input type="time" value={data.time} onChange={(e) => update("time", e.target.value)} className={inputCls(errors.time)} />
                {errors.time && <p className="text-xs text-destructive mt-1">{errors.time}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium mb-1.5 block">{t.contact.form.message}</label>
                <textarea
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  maxLength={1000}
                  className={inputCls()}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glass hover:shadow-glow transition-all disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                {t.contact.form.submit}
              </button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold shadow-glass hover:opacity-90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                {t.contact.form.whatsapp}
              </a>
            </div>

            {status === "success" && (
              <div className="mt-4 p-3 rounded-xl bg-green-500/10 text-green-700 text-sm">{t.contact.form.success}</div>
            )}
            {status === "missing" && (
              <div className="mt-4 p-3 rounded-xl bg-amber-500/10 text-amber-800 text-sm">{t.contact.form.missing}</div>
            )}
          </form>

          {/* Info + Map */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="glass-strong rounded-3xl p-6 shadow-soft space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Address</div>
                  <div className="font-medium">{t.contact.info.address}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                  <a href={`tel:${t.contact.info.phone.replace(/\s/g, "")}`} className="font-medium hover:text-primary">{t.contact.info.phone}</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Hours</div>
                  <div className="font-medium">{t.contact.info.hours}</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-soft h-[280px]">
              <iframe
                title="Clinic location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3700%2C48.8550%2C2.3850%2C48.8650&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
