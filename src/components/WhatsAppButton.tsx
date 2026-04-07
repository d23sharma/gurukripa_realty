import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919425050828?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 hidden lg:flex"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-card" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
