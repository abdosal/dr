import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/lang-context";
import { Header, SECTIONS } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { Results } from "@/components/site/Results";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { useReveal, useActiveSection } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SmileCare — Premium Dental Clinic in Paris" },
      {
        name: "description",
        content:
          "SmileCare is a premium dental clinic in Paris. Whitening, implants, orthodontics & aesthetic dentistry. Book your consultation online.",
      },
      { property: "og:title", content: "SmileCare — Premium Dental Clinic" },
      { property: "og:description", content: "Modern, painless dental care in the heart of Paris." },
    ],
  }),
});

function Page() {
  useReveal();
  useActiveSection([...SECTIONS]);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Pricing />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function Index() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
