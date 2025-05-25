import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield, ArrowRight } from "lucide-react";

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Handler to update scroll position
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    // Add throttled scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax translations
  // Background moves slower (e.g. 0.5x scroll speed)
  const backgroundTranslate = offsetY * 0.5;

  // Content moves slightly slower than scroll (e.g. 0.3x scroll speed)
  const contentTranslate = offsetY * 0.3;

  return (
    <section className="relative bg-white pt-16 pb-20 overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: `translateY(${backgroundTranslate}px)`,
          willChange: "transform",
          zIndex: 0,
          opacity: 0.9,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-50"
        style={{ zIndex: 1 }}
      />

      {/* Content container */}
      <div
        className="container mx-auto px-4 relative z-10 max-w-4xl text-center"
        style={{
          transform: `translateY(${contentTranslate}px)`,
          willChange: "transform",
        }}
      >
        <div
          className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8 justify-center mx-auto max-w-max"
          data-aos="fade-down"
          data-aos-delay="30"
        >
          <Zap className="h-4 w-4 mr-2 text-blue-600 animate-pulse" />
          Ultra-fast fiber eKasi lakho
        </div>

        <h1
          className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          POWER YOUR HOME WITH <br />
          <span className="text-blue-600"> UNLIMITED WI-FI</span>
        </h1>

        <p
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          No contracts, no hidden costs, just fast internet!
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => (window.location.href = "#contact")}
          >
            30-Day Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
            onClick={() => (window.location.href = "#pricing")}
          >
            View Pricing
          </Button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-6 sm:mt-24"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex items-center justify-center space-x-3 bg-gray-50 border rounded-lg px-6 py-4">
            <Wifi className="h-6 w-6 text-blue-600" />
            <div className="text-left">
              <div className="font-bold text-gray-900">20/10 Mbps</div>
              <div className="text-sm text-gray-600">from R399pm</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-gray-50 border rounded-lg px-6 py-4">
            <Shield className="h-6 w-6 text-green-600" />
            <div className="text-left">
              <div className="font-bold text-gray-900">99% Uptime</div>
              <div className="text-sm text-gray-600">Guaranteed reliability</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 bg-gray-50 border rounded-lg px-6 py-4">
            <Zap className="h-6 w-6 text-orange-600" />
            <div className="text-left">
              <div className="font-bold text-gray-900">24/7 Support</div>
              <div className="text-sm text-gray-600">Local tech team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
