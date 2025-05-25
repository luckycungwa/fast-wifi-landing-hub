
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Wifi, Zap, Shield, Users, Gamepad2, Monitor } from "lucide-react";

export const Packages = () => {
  const features = [
    {
      title: "Ultra-Fast Speeds",
      description: "Lightning-fast fiber connections up to 100 Mbps",
      image: "https://images.unsplash.com/photo-1742869028501-e041a79b260f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Zap,
      benefits: ["Stream 4K without buffering", "Download large files instantly", "Multiple devices connected"],
      bestFor: "Heavy internet users, content creators",
      availableIn: ["Family", "Gamer", "Pro"]
    },
    {
      title: "Gaming Optimization", 
      description: "Low latency network built for competitive gaming",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Gamepad2,
      benefits: ["Sub-10ms latency", "Gaming traffic prioritization", "Dedicated gaming servers"],
      bestFor: "Gamers, esports enthusiasts",
      availableIn: ["Gamer", "Pro"]
    },
    {
      title: "Business Reliability",
      description: "99.9% uptime with enterprise-grade support",
      image: "https://images.unsplash.com/photo-1668184162895-3e6074df7c87?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Shield,
      benefits: ["24/7 priority support", "SLA guarantees", "Dedicated support line"],
      bestFor: "Remote workers, small businesses",
      availableIn: ["Pro"]
    },
    {
      title: "Smart Home Ready",
      description: "Connect all your devices seamlessly",
      image: "https://images.unsplash.com/photo-1702390796625-6dd9b46b1c0b?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Wifi,
      benefits: ["Support 50+ devices", "Smart home optimization", "Parental controls"],
      bestFor: "Modern families, tech enthusiasts",
      availableIn: ["Family", "Gamer", "Pro"]
    },
    {
      title: "Streaming Paradise",
      description: "Multiple 4K streams without compromise",
      image: "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Monitor,
      benefits: ["Multiple 4K streams", "Netflix, YouTube optimized", "Zero buffering guarantee"],
      bestFor: "Entertainment lovers, big families",
      availableIn: ["Family", "Gamer", "Pro"]
    },
    {
      title: "No Contracts Freedom",
      description: "Cancel anytime, no hidden fees or commitments",
      image: "./no-contract.webp",
      icon: Users,
      benefits: ["Month-to-month billing", "No cancellation fees", "30-day money back"],
      bestFor: "Everyone who values flexibility",
      availableIn: ["Starter", "Family", "Gamer", "Pro"]
    }
  ];

  const packages = [
    { name: "Starter", speed: "20/10 Mbps", price: "399", color: "gray" },
    { name: "Family", speed: "40/40 Mbps", price: "480", color: "blue" },
    { name: "Gamer", speed: "50/50 Mbps", price: "620", color: "purple" },
    { name: "Pro", speed: "100/50 Mbps", price: "720", color: "green" }
  ];

  const getPackageColor = (packageName: string) => {
    const pkg = packages.find(p => p.name === packageName);
    switch(pkg?.color) {
      case "blue": return "bg-blue-100 text-blue-800 border-blue-200";
      case "purple": return "bg-purple-100 text-purple-800 border-purple-200";
      case "green": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's power your every need
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package. All plans include unlimited data and no contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"  data-aos="zoom-in" data-aos-once="true">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
              
              >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full"  data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-in-out"
              data-aos-once="false" data-aos-delay="60">
                    <feature.icon className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">{feature.title}</CardTitle>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-4 pt-4">
                  <div className="text-xs font-semibold text-gray-700 mb-1">Perfect for:</div>
                  <div className="text-xs text-gray-600  bg-gray-50 p-2 rounded">{feature.bestFor}</div>
                </div>
                
                {/* <div>
                  <div className="text-xs font-semibold text-gray-700 mb-2">Available in:</div>
                  <div className="flex flex-wrap gap-1">
                    {feature.availableIn.map((pkg, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded-full border ${getPackageColor(pkg)}`}>
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 uppercase ">Choose your package</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white/500 rounded-lg p-6 text-center border-2 border-gray-300 hover:border-blue-500 transition-colors"  data-aos="zoom-in-up"
              data-aos-once="true"
              data-aos-delay={200 + index * 150}>
                <div className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</div>
                <div className="text-sm text-green-600 mb-2">{pkg.speed}</div>
                <div className="text-2xl font-bold text-blue-700 mb-4">R{pkg.price}<span className="text-sm font-normal text-gray-600">/mo</span></div>
                {/* scroll to contact form */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.location.href = "#contact"}>
                  Choose Plan
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Need help choosing? <a href="#contact" className="text-blue-600 hover:underline">Contact our team</a> for personalized recommendations.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ 30-day money-back guarantee</span>
            <span>✓ Free installation</span>
            <span>✓ No setup fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};
