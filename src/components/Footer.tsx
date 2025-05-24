
import { Wifi } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/5d17fd66-3726-4aff-9d2c-70c811fc929a.png" 
                alt="Multi Genius Networking Systems" 
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing South Africa with fast, reliable, and affordable internet solutions 
              for gaming, streaming, and everything in between.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Fiber Internet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gaming Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>070 370 0659</li>
              <li>info@mgnsystems.co.za</li>
              <li>www.mgnsystems.co.za</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Multi Genius Networking Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
