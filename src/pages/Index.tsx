
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
