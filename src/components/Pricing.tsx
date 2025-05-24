
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      speed: "20/10 Mbps",
      price: "R399",
      description: "Perfect for basic browsing and light streaming",
      features: [
        "Unlimited data",
        "Basic support",
        "Standard installation",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Family",
      speed: "40/40 Mbps",
      price: "R480",
      description: "Ideal for families with multiple devices",
      features: [
        "Unlimited data",
        "Priority support",
        "Free installation",
        "Phone & email support",
        "Parental controls"
      ],
      popular: true
    },
    {
      name: "Gamer",
      speed: "50/50 Mbps",
      price: "R620",
      description: "Optimized for gaming and content creation",
      features: [
        "Unlimited data",
        "Gaming optimization",
        "Free installation",
        "24/7 phone support",
        "Low latency guarantee"
      ],
      popular: false
    },
    {
      name: "Pro",
      speed: "100/50 Mbps",
      price: "R720",
      description: "Maximum performance for power users",
      features: [
        "Unlimited data",
        "Premium support",
        "Free installation",
        "Dedicated support line",
        "Business-grade reliability"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our 30-day free trial 
            and come with no contracts or hidden fees.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border border-gray-200'} hover:shadow-xl transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-blue-600 my-4">
                  {plan.price}<span className="text-lg text-gray-500">/pm</span>
                </div>
                <div className="text-lg font-semibold text-green-600">{plan.speed}</div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'} text-white`}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Terms & conditions apply</p>
          <p className="text-sm text-gray-500">
            All plans include free installation and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};
