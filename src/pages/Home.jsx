import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FeaturedProperties from "../components/FeaturedProperties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <section id="properties">
        <FeaturedProperties />
      </section>
      
      <Testimonials />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}