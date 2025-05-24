
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/5d17fd66-3726-4aff-9d2c-70c811fc929a.png" 
            alt="Multi Genius Networking Systems" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
          <a href="#packages" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Packages</a>
          <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          Start Free Trial
        </Button>
      </div>
    </header>
  );
};
