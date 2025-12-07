import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Packages from "@/components/packages/Packages";
import Fleet from "@/components/fleet/Fleet";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import FAQ from "@/components/faq/Faq";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Packages />
      <FAQ/>
      <Testimonials />
      <Fleet />
      <Partners/>
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </main>
  );
}
