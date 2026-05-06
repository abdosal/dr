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
import { useActiveSection, useReveal } from "@/hooks/use-reveal";

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

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
