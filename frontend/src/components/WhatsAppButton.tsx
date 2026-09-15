import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WHATSAPP_NUMBER = "919526533133";

export default function WhatsAppButton() {
  const location = useLocation();

  // Hide WhatsApp button on admin pages
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  const message =
    "";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MR Constructions on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp className="text-3xl" />

      <span className="absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-2 text-sm font-medium text-white shadow-lg md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}