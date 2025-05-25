import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    // blur background header
    <header className="backdrop-blur-md bg-opacity-80  bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium" 
          >
            <img
              src="/mgn-logo.png"
              alt="logo"
              className="h-10 w-auto"
              
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#packages"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Packages
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Contact
          </a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold" onClick={() => window.open("https://openserve.co.za/connect/home/fibre", "_blank")}>
          Check coverage
        </Button>
      </div>
    </header>
  );
};
