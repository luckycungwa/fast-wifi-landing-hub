
import { Check, Zap, Shield, Clock, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "No Contracts",
      description: "Month-to-month flexibility. Cancel anytime."
    },
    {
      icon: Shield,
      title: "30-Day Free Trial", 
      description: "Try our service completely risk-free."
    },
    {
      icon: Clock,
      title: "24/7 Local Support",
      description: "Real people, based in South Africa."
    },
    {
      icon: Users,
      title: "Future-Proof",
      description: "Fiber infrastructure built for tomorrow."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Multi Genius Networking?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're not just another ISP. We're tech people who understand what you actually need from your internet connection.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Network Status</h3>
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">All systems operational</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Network Uptime</span>
                    <span className="font-bold text-gray-900">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Latency</span>
                    <span className="font-bold text-gray-900">8ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Peak Speeds</span>
                    <span className="font-bold text-gray-900">100+ Mbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Coverage Areas</span>
                    <span className="font-bold text-gray-900">Nationwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
