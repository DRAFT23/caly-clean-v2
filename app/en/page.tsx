import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import OurWorld from "../components/OurWorld";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import en from "../lib/dictionaries/en";

export default function Home() {
  return (
    <main className="bg-[#f8f4ef]">
      <Navbar dict={en} />
      <Hero dict={en} />
      <Gallery dict={en} />
      <Services dict={en} />
      <OurWorld dict={en} />
      <Reviews dict={en} />
      <CTA dict={en} />
      <Footer dict={en} />
    </main>
  );
}
