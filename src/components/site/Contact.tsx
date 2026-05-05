import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { cn } from "@/lib/utils";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "@/config/emailjs";

const WHATSAPP_NUMBER = "212625736778";

const schema = z.object({
  from_name: z.string().trim().min(2),
  from_email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30),
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  message: z.string().trim().max(1000).optional(),
});

type FormState = {
  from_name: string;
  from_email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initial: FormState = {
  from_name: "",
  from_email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export function Contact() {
  const { t } = useLang();
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (k: keyof FormState, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const validate = () => {
    const r = schema.safeParse(data);
    if (r.success) return true;

    const errs: Partial<Record<keyof FormState, string>> = {};
    const e = t.contact.form.errors;
    r.error.issues.forEach((issue) => {
      const key = issue.path[0] as keyof FormState;
      if (key === "from_name") errs.from_name = e.name;
      else if (key === "from_email") errs.from_email = e.email;
      else if (key === "phone") errs.phone = e.phone;
      else if (key === "service") errs.service = e.service;
      else if (key === "date") errs.date = e.date;
      else if (key === "time") errs.time = e.time;
    });
    setErrors(errs);
    return false;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          phone: data.phone,
          service: data.service,
          date: data.date,
          time: data.time,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setData(initial);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const whatsappUrl = () => {
    const lines = [
      t.contact.form.whatsappIntro,
      `${t.contact.form.name}: ${data.from_name || "-"}`,
      `${t.contact.form.email}: ${data.from_email || "-"}`,
      `${t.contact.form.phone}: ${data.phone || "-"}`,
      `${t.contact.form.service}: ${data.service || "-"}`,
      `${t.contact.form.date}: ${data.date || "-"}`,
      `${t.contact.form.time}: ${data.time || "-"}`,
      `${t.contact.form.message}: ${data.message || "-"}`,
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const inputCls = (err?: string) =>
    cn(
      "w-full rounded-2xl border bg-white/70 px-4 py-3 outline-none transition-all focus:bg-white focus:ring-4 focus:ring-primary/15",
      err ? "border-destructive" : "border-border focus:border-primary"
    );

  const services = t.services.list.map((s) => s.name);

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div className="blob right-0 -top-20 h-[500px] w-[500px] bg-primary/25" />
      <div className="container relative mx-auto px-4">
        <div className="reveal mb-12 text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.contact.subtitle}
          </div>
          <h2 className="mb-4 text-4xl lg:text-5xl">{t.contact.title}</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">{t.contact.desc}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <form onSubmit={onSubmit} className="reveal glass-strong rounded-3xl p-6 shadow-glass sm:p-8 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.name}</label>
                <input
                  value={data.from_name}
                  onChange={(e) => update("from_name", e.target.value)}
                  className={inputCls(errors.from_name)}
                />
                {errors.from_name && <p className="mt-1 text-xs text-destructive">{errors.from_name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.email}</label>
                <input
                  type="email"
                  value={data.from_email}
                  onChange={(e) => update("from_email", e.target.value)}
                  className={inputCls(errors.from_email)}
                />
                {errors.from_email && <p className="mt-1 text-xs text-destructive">{errors.from_email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.phone}</label>
                <input value={data.phone} onChange={(e) => update("phone", e.target.value)} className={inputCls(errors.phone)} />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.service}</label>
                <select value={data.service} onChange={(e) => update("service", e.target.value)} className={inputCls(errors.service)}>
                  <option value="">-</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.date}</label>
                <input type="date" value={data.date} onChange={(e) => update("date", e.target.value)} className={inputCls(errors.date)} />
                {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.time}</label>
                <input type="time" value={data.time} onChange={(e) => update("time", e.target.value)} className={inputCls(errors.time)} />
                {errors.time && <p className="mt-1 text-xs text-destructive">{errors.time}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium">{t.contact.form.message}</label>
                <textarea value={data.message} onChange={(e) => update("message", e.target.value)} rows={3} maxLength={1000} className={inputCls()} />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glass transition-all hover:shadow-glow disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "loading" ? t.contact.form.sending : t.contact.form.submit}
              </button>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-glass transition-all hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                {t.contact.form.whatsapp}
              </a>
            </div>

            {status === "success" && (
              <div className="mt-4 rounded-xl bg-green-500/10 p-3 text-sm text-green-700">{t.contact.form.success}</div>
            )}
            {status === "error" && (
              <div className="mt-4 rounded-xl bg-destructive/10 p-3 text-sm text-destructive">{t.contact.form.error}</div>
            )}
          </form>

          <div className="reveal space-y-4 lg:col-span-2">
            <div className="glass-strong space-y-4 rounded-3xl p-6 shadow-soft">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.ui.address}</div>
                  <div className="font-medium">{t.contact.info.address}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.ui.phone}</div>
                  <a href={`tel:${t.contact.info.phone.replace(/\s/g, "")}`} className="font-medium hover:text-primary">
                    {t.contact.info.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.ui.hours}</div>
                  <div className="font-medium">{t.contact.info.hours}</div>
                </div>
              </div>
            </div>
            <div className="h-[280px] overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title={t.ui.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.71481175291976!2d-7.594852288741308!3d33.59396453091307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd6c317c8a8d%3A0x7a157cce475d999c!2sDr.%20Amal%20Elhaila%20(Dentiste)!5e0!3m2!1sfr!2sma!4v1778017960769!5m2!1sfr!2sma"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
