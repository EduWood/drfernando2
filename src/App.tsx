import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Areas } from "./components/Areas";
import { Differentials } from "./components/Differentials";
import { Trust } from "./components/Trust";
import { Services } from "./components/Services";
import { Timeline } from "./components/Timeline";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-50 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Areas />
        <Differentials />
        <Trust />
        <Services />
        <Timeline />
        <Testimonials />
        <FAQ />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
