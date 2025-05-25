import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/white-logo.png" 
                alt="Multi Genius Networking Systems" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
             Providing affordable and convenient WiFi, Tech & digital solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/mgnsystemssa" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/mgnsystems" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@mgnsystems" className="text-gray-300 hover:text-white">
                <span className="sr-only">Tiktok</span>
                <FaTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Packages</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Fiber Internet</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Gaming Packages</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Business Solutions</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pro package</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors" aria-disabled>Contact us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Installation Guide</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Network Status</a></li>
              <li><a href="https://openserve.co.za/connect/home/fibre" target="_blank" className="hover:text-white transition-colors">Check coverage</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>070 370 0659</li>
              <li>info@mgnsystems.co.za</li>
              <li>www.mgnsystems.co.za</li>
              <li>24/7 Support Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 flex flex-col gap-2" >
          <p>&copy; 2025 Multi Genius Networking Systems. All rights reserved.</p> 

          <p className="text-gray-500">Powered by OpenServe | Developed by <a href="https://www.44tagstudios.co.za" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-400">44Tag Studios</a></p>
        </div>
      </div>
    </footer>
  );
};
