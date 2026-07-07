import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/services/services";
import Testimonials from "./components/Testimonials/Testimonials";
import Transformations from "./components/transfomation/transformation";
import TrustedBrands from "./components/trustedbrands/trustedBrands";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar/>
      <Hero />
      <TrustedBrands />
      <Services />
      <Transformations />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
