import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import Testimonials from "@/components/Testimonials";

import Contact from "@/components/Contact";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <Services />
      <ServiceDetails />
      <Testimonials />
      <BookingCTA />
      <Contact />
    </>
  );
}
