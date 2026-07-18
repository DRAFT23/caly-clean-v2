import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import OurWorld from "../components/OurWorld";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import fr from "../lib/dictionaries/fr";

export default function Home() {
  return (
    <main className="bg-[#f8f4ef]">
      <Navbar dict={fr} />
      <Hero dict={fr} />
      <Gallery dict={fr} />
      <Services dict={fr} />
      <OurWorld dict={fr} />
      <Reviews dict={fr} />
      <CTA dict={fr} />
      <Footer dict={fr} />
    </main>
  );
}
