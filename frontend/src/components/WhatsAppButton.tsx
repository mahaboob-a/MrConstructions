import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "9526533133";

const DEFAULT_MESSAGE =
  "";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact MR Constructions on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
        hover:shadow-2xl
        focus:outline-none
        focus:ring-4
        focus:ring-green-500/30
        md:bottom-8
        md:right-8
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}