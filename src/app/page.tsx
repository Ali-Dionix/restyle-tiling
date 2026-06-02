import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import GoogleReviews from "@/components/GoogleReviews";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd type="Organization" />
      <JsonLd type="Website" />
      <JsonLd type="LocalBusiness" />
      <Hero />
      <TrustBadges />
      <GoogleReviews />
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
