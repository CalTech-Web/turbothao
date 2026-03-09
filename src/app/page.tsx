import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
import Testimonials from "@/components/Testimonials";

import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ServiceDetails />
      <Testimonials />
      <Contact />
    </>
  );
}
