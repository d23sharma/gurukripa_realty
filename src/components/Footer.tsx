import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="navy-gradient text-gold-light/80">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold text-gold mb-4">Gurukripa Realty</h3>
          <p className="text-sm leading-relaxed">
            Premium construction and trusted property deals — building dreams since 2016.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {["/", "/services", "/listings", "/about", "/faq", "/contact"].map((p, i) => (
              <Link key={p} to={p} className="block hover:text-gold transition-colors">
                {["Home", "Services", "Listings", "About Us", "FAQ", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Services</h4>
          <div className="space-y-2 text-sm">
            <p>House & Villa Construction</p>
            <p>Property Buying</p>
            <p>Property Selling</p>
            <p>Real Estate Consultation</p>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:+918408811234" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" /> +91 84088 11234
            </a>
            <a href="mailto:info@gurukripa.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4 text-gold" /> info@gurukripa.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold mt-0.5" /> Kalani Nagar Square, Indore, MP
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gold-light/50">
        © {new Date().getFullYear()} Gurukripa Realty Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
