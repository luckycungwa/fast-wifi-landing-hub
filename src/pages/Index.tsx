import React, { useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 600, // duration in ms
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
    
    <div className="min-h-screen bg-white">
      {/* Optional: Add a WhatsApp floating button */}
      <WhatsAppFloatingButton />

      {/* Main components of the landing page */}
      <Header />
      <Hero />
      <Services />

      <Features />
      <Packages />
      <Pricing />
      <FAQ />

      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default Index;
