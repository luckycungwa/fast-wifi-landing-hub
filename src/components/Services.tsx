import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Tv, GraduationCap, Home, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Optimized",
      description: "Low latency connections for competitive gaming. No more lag, just wins.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Tv,
      title: "4K Streaming",
      description: "Buffer-free streaming on multiple devices. Netflix, YouTube, whatever you want.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: GraduationCap,
      title: "Remote Work",
      description: "Stable video calls and file uploads. Your home office just got an upgrade.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Home,
      title: "Smart Home",
      description: "Connect every device without slowdowns. IoT, security, automation - all covered.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">
            Built for your internet needs
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're gaming, working, or streaming, it adapts to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm hover:shadow-lg transition-shadow bg-white "
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={200 + index * 150} // stagger animation delay for each card
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
// This component displays a list of services offered by mgn/ uyinjabulo provider.