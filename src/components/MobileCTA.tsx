import { Phone, MessageCircle } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex border-t border-border">
    <a
      href="tel:+919425050828"
      className="flex-1 flex items-center justify-center gap-2 py-3.5 navy-gradient text-gold font-semibold text-sm"
    >
      <Phone className="w-4 h-4" /> Call Now
    </a>
    <a
      href="https://wa.me/919425050828?text=Hi%2C%20I%27m%20interested%20in%20your%20real%20estate%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-card font-semibold text-sm"
    >
      <MessageCircle className="w-4 h-4" /> WhatsApp
    </a>
  </div>
);

export default MobileCTA;
