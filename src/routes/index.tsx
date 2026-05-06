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
      { title: "El haila dental clinique | Clinique dentaire premium" },
      {
        name: "description",
        content:
          "El haila dental clinique propose des soins dentaires modernes, esthétiques et sans douleur. Réservez votre consultation en ligne.",
      },
      { property: "og:title", content: "El haila dental clinique | Clinique dentaire premium" },
      {
        property: "og:description",
        content:
          "El haila dental clinique propose des soins dentaires modernes, esthétiques et sans douleur. Réservez votre consultation en ligne.",
      },
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
