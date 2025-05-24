
import { Button } from "@/components/ui/button";
import { Wifi, Zap, Shield, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-white pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 mb-8">
            <Zap className="h-4 w-4 mr-2 text-blue-600" />
            Ultra-fast fiber internet for South Africa
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Internet that doesn't
            <span className="text-blue-600"> slow you down</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Gaming, streaming, working from home - get fiber speeds that actually deliver. 
            No contracts, no surprises, just fast internet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              Start 30-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
              View Pricing
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-6 py-4">
              <Wifi className="h-6 w-6 text-blue-600" />
              <div className="text-left">
                <div className="font-bold text-gray-900">50/50 Mbps</div>
                <div className="text-sm text-gray-600">from R620/month</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-6 py-4">
              <Shield className="h-6 w-6 text-green-600" />
              <div className="text-left">
                <div className="font-bold text-gray-900">99.9% Uptime</div>
                <div className="text-sm text-gray-600">Guaranteed reliability</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg px-6 py-4">
              <Zap className="h-6 w-6 text-orange-600" />
              <div className="text-left">
                <div className="font-bold text-gray-900">24/7 Support</div>
                <div className="text-sm text-gray-600">Local tech team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
