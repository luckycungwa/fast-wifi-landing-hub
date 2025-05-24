
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Tv, GraduationCap, Home } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Optimized",
      description: "Ultra-low latency for competitive gaming. Dominate every match with our gaming-optimized network.",
      features: ["Low ping guarantee", "Gaming traffic prioritization", "24/7 gaming support"]
    },
    {
      icon: Tv,
      title: "4K/8K Streaming",
      description: "Flawless streaming for all your entertainment needs. Multiple devices, zero buffering.",
      features: ["4K/8K ready", "Multiple device support", "Content delivery optimization"]
    },
    {
      icon: GraduationCap,
      title: "Online Learning",
      description: "Stable connections for seamless video conferencing and online education.",
      features: ["Video conference ready", "Upload/download balance", "Education discounts"]
    },
    {
      icon: Home,
      title: "Smart Home Ready",
      description: "Connect all your smart devices without interruption. IoT optimized network.",
      features: ["IoT device support", "Home automation ready", "Security monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tailored Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're gaming, streaming, learning, or working from home, 
            our network is optimized for your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-to-r from-blue-600 to-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
