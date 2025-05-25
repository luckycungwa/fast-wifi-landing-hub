import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4" style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          
        }}>
      
      <h1
        className="text-[90px] md:text-[140px] font-extrabold leading-none mb-4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1729161769741-e7bbb82abc84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          display: "inline-block",
        }}
      >
        404
      </h1>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Eish - PAGE NOT FOUND</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist, had its name changed or is temporarily unavailable. Check the URL for errors.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition duration-600 transform animate-bounce hover:scale-105"
        >
          GO TO HOMEPAGE
        </a>
      </div>
    </div>
  );
};

export default NotFound;
