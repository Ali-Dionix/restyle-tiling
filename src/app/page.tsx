import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <About />
      <Services />
      <WhyChoose />
      <Gallery />
      <Process />
      <CTA />
      <Contact />
    </>
  );
}
