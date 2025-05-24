
import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                LEVEL UP YOUR
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
                  GAME WITH LAG-FREE
                </span>
                WI-FI!
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ultra-fast speeds for smooth online gaming, streaming, and browsing. 
                No more lagging, no more interruptions - just pure performance.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-green-400" />
                <span className="text-lg">Ultra-fast speeds for smooth online gaming</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-400" />
                <span className="text-lg">Low latency - dominate the lobby!</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wifi className="h-6 w-6 text-green-400" />
                <span className="text-lg">Reliable connection for uninterrupted gameplay</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4">
                Start 30-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4">
                View Plans
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">50/50</div>
                <div className="text-sm text-blue-200">Mbps from R620</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100/50</div>
                <div className="text-sm text-blue-200">Mbps from R720</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
              alt="Gaming Setup" 
              className="relative z-10 rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
