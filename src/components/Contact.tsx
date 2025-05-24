
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600">
            Start your 30-day free trial today. No credit card required.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone Support</div>
                  <div className="text-gray-600">070 370 0659</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email Support</div>
                  <div className="text-gray-600">info@mgnsystems.co.za</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Available 24/7</div>
                  <div className="text-gray-600">Round-the-clock technical support</div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Start Your Free Trial</CardTitle>
              <CardDescription className="text-gray-600">
                Get connected within 48 hours. No setup fees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Installation Address" />
                <Textarea placeholder="Any specific requirements?" rows={3} />
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
