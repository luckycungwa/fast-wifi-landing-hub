import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/27703700659?text=Hello!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-6 right-6
        bg-green-500 hover:bg-green-600 active:bg-green-700
        text-white rounded-full shadow-lg
        flex items-center justify-center
        w-16 h-16
        z-50
        transition-colors
        focus-visible:ring-2 focus-visible:ring-green-300
      "
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
// This component creates a floating WhatsApp button that links to a WhatsApp chat.