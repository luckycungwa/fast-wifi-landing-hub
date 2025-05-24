
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Gamepad2, Tv, Briefcase, Home } from "lucide-react";

export const Packages = () => {
  const packages = [
    {
      name: "Starter",
      speed: "20/10 Mbps",
      price: "399",
      description: "Perfect for basic browsing and light streaming",
      icon: Home,
      useCase: "1-2 devices, browsing, email, light social media",
      features: [
        "Unlimited data",
        "Standard support",
        "Free installation",
        "No contracts"
      ],
      recommended: false,
      bestFor: "Light users"
    },
    {
      name: "Family",
      speed: "40/40 Mbps", 
      price: "480",
      description: "Great for families with multiple devices",
      icon: Tv,
      useCase: "3-5 devices, HD streaming, video calls, smart home",
      features: [
        "Unlimited data",
        "Priority support", 
        "Free installation",
        "Parental controls",
        "No contracts"
      ],
      recommended: true,
      bestFor: "Most families"
    },
    {
      name: "Gamer",
      speed: "50/50 Mbps",
      price: "620", 
      description: "Optimized for gaming and content creation",
      icon: Gamepad2,
      useCase: "Gaming, streaming, uploading content, low latency",
      features: [
        "Unlimited data",
        "Gaming optimization",
        "24/7 support",
        "Low latency guarantee",
        "No contracts"
      ],
      recommended: false,
      bestFor: "Gamers & creators"
    },
    {
      name: "Pro",
      speed: "100/50 Mbps",
      price: "720",
      description: "Maximum performance for power users",
      icon: Briefcase,
      useCase: "Heavy business use, multiple 4K streams, large files",
      features: [
        "Unlimited data", 
        "Premium support",
        "Business-grade SLA",
        "Dedicated support line",
        "No contracts"
      ],
      recommended: false,
      bestFor: "Power users & business"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose your perfect package
          </h2>
          <p className="text-xl text-gray-600">
            Find the right speed and features for your lifestyle. All plans include unlimited data and no contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative border-2 ${pkg.recommended ? 'border-blue-600 shadow-lg' : 'border-gray-200'} hover:shadow-lg transition-shadow bg-white`}>
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-10 h-10 ${pkg.recommended ? 'bg-blue-100' : 'bg-gray-100'} rounded-lg flex items-center justify-center`}>
                    <pkg.icon className={`h-5 w-5 ${pkg.recommended ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-gray-900">{pkg.name}</CardTitle>
                    <div className="text-xs font-medium text-blue-600">{pkg.bestFor}</div>
                  </div>
                </div>
                
                <div className="flex items-baseline mb-2">
                  <span className="text-2xl font-bold text-gray-900">R{pkg.price}</span>
                  <span className="text-gray-600 ml-1 text-sm">/month</span>
                </div>
                
                <div className="text-sm font-semibold text-gray-700 mb-2">{pkg.speed}</div>
                
                <CardDescription className="text-gray-600 text-sm mb-3">
                  {pkg.description}
                </CardDescription>
                
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-1">Best for:</div>
                  <div className="text-xs text-gray-600">{pkg.useCase}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-semibold`}
                >
                  Choose Plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
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
