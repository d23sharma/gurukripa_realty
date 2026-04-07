import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo/logo1.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Listings", path: "/listings" },
  { label: "About Us", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Gurukripa Realty Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-gold-light/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919425050828" className="flex items-center gap-2 text-gold-light text-sm">
              <Phone className="w-4 h-4" />
              +91 94250 50828
            </a>
            <Link to="/contact">
              <Button className="gold-gradient text-primary font-semibold hover:opacity-90 transition-opacity">
                Get Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-gold"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block text-lg font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-gold-light/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full gold-gradient text-primary font-semibold mt-4">
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;