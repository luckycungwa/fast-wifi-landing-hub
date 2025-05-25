import { FaWifi, FaRocket, FaGamepad, FaChalkboardTeacher } from "react-icons/fa";

// Replace these with your actual image URLs
const marketingCards = [
  {
    title: "Streaming Excellence",
    desc: "Uncapped, buffer-free 4K/8K streaming for creators and families.",
    icon: <FaRocket size={32} className="text-white" />,
    image: "/images/streaming.jpg",
  },
  {
    title: "Gaming Without Limits",
    desc: "Low latency and ultra-fast speeds for lag-free online gaming.",
    icon: <FaGamepad size={32} className="text-white" />,
    image: "/images/gaming.jpg",
  },
  {
    title: "Home Wi-Fi Solutions",
    desc: "Affordable, reliable Wi-Fi for every room and every device.",
    icon: <FaWifi size={32} className="text-white" />,
    image: "/images/home.jpg",
  },
  {
    title: "Online Learning & Teaching",
    desc: "Stable, high-speed connections for seamless online classes.",
    icon: <FaChalkboardTeacher size={32} className="text-white" />,
    image: "/images/learning.jpg",
  },
];

const MarketingSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Experience the Power of <span className="text-brand-blue">Uncapped Connectivity</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {marketingCards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-blue/70 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 group-hover:bg-brand-blue/80">
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white text-base">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketingSection;
