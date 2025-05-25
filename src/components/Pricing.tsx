
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      speed: "20/10 Mbps",
      price: "399",
      description: "Perfect for basic browsing and light streaming",
      features: [
        "Unlimited data",
        "Standard support",
        "Free installation",
        "No contracts"
      ],
      popular: true
    },
    {
      name: "Family",
      speed: "40/40 Mbps", 
      price: "480",
      description: "Great for families with multiple devices",
      features: [
        "Unlimited data",
        "Priority support", 
        "Free installation",
        "Parental controls",
        "No contracts"
      ],
      popular: false
    },
    {
      name: "Gamer",
      speed: "50/50 Mbps",
      price: "620", 
      description: "Optimized for gaming and content creation",
      features: [
        "Unlimited data",
        "Gaming optimization",
        "24/7 support",
        "Low latency guarantee",
        "No contracts"
      ],
      popular: false
    },
    {
      name: "Pro",
      speed: "100/50 Mbps",
      price: "720",
      description: "Maximum performance for power users",
      features: [
        "Unlimited data", 
        "Premium support",
        "Business-grade SLA",
        "Dedicated support line",
        "No contracts"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple pricing, no surprises
          </h2>
          <p className="text-xl text-gray-600">
            All plans include 30-day free trial. No setup fees, no contracts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"  >
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-600 shadow-lg' : 'border-gray-200'} hover:shadow-lg transition-shadow bg-white`} data-aos="slide-up" data-aos-duration="600" data-aos-once="true" data-aos-delay={`${index * 100}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">R{plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <div className="text-sm font-semibold text-blue-600">{plan.speed}</div>
                <CardDescription className="text-gray-600 text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-semibold`}
                  onClick={() => window.location.href = "#contact"}
                >
                Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            30-day money-back guarantee • Free installation included
          </p>
        </div>
      </div>
    </section>
  );
};
