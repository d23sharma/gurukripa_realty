import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Home, TrendingUp, CheckCircle, ArrowRight, Star, Users, Clock, Shield, ChevronRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import heroImg from "@/assets/hero-villa.jpg";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>
  );
};

const stats = [
  { icon: Building2, value: "100+", label: "Homes Delivered" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
  { icon: Users, value: "500+", label: "Happy Families" },
];

const services = [
  { icon: Building2, title: "Construction", desc: "Premium house & villa construction with modern designs and quality materials." },
  { icon: Home, title: "Buying", desc: "Find your dream home from our curated collection of verified properties." },
  { icon: TrendingUp, title: "Selling", desc: "Get the best value for your property with our expert market analysis." },
];

const whyUs = [
  "Transparent pricing with no hidden costs",
  "Deep local expertise in Indore real estate",
  "End-to-end support from consultation to handover",
  "Premium quality construction materials",
  "On-time project delivery guarantee",
  "Legal and documentation assistance",
];

const testimonials = [
  { name: "Rajesh Sharma", text: "Gurukripa Realty made our dream home a reality. Their transparency and quality is unmatched.", role: "Homeowner, Indore" },
  { name: "Priya Verma", text: "We found our perfect property within a week. The team's dedication is incredible.", role: "Property Buyer" },
  { name: "Amit Patel", text: "Professional service from start to finish. Highly recommend for anyone looking to build or buy.", role: "Villa Owner" },
];

const featuredListings = [
  { img: property1, title: "Modern 3BHK Villa", location: "Hoshangabad Road, Indore", price: "₹85 Lakh", tag: "Premium" },
  { img: property2, title: "Luxury Sea-View Apartment", location: "E-8 Extension, Indore", price: "₹1.2 Cr", tag: "Verified" },
  { img: property3, title: "Spacious 4BHK Flat", location: "Kolar Road, Indore", price: "₹65 Lakh", tag: "New" },
];

const steps = [
  { num: "01", title: "Consultation", desc: "Share your requirements and budget" },
  { num: "02", title: "Selection", desc: "Choose from curated options" },
  { num: "03", title: "Execution", desc: "We handle everything end-to-end" },
  { num: "04", title: "Handover", desc: "Move into your dream home" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})`, transform: "scale(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 text-gold text-sm mb-6">
                ✦ Premium Real Estate Since 2016
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card leading-tight mb-6">
                Build Your Dream Home or Find the{" "}
                <span className="text-gold-gradient">Perfect Property</span>
              </h1>
              <p className="text-lg text-card/70 mb-8 max-w-lg">
                Premium construction and trusted property deals — all under one roof. Gurukripa Realty is your partner in making real estate dreams come true.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="gold-gradient text-primary font-semibold hover:opacity-90 text-base px-8">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 text-base px-8">
                    Schedule a Site Visit
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 text-card/60 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gold" /> 100+ Projects
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold" /> Transparent Deals
                </div>
              </div>
            </div>
            <div className="animate-fade-up-delay-2">
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-xl font-display font-semibold text-gold mb-6 text-center">
                  Get a Free Consultation
                </h3>
                <LeadForm variant="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="text-center">
                  <s.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-primary">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Our Services" subtitle="Comprehensive real estate solutions tailored to your needs" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionHeading title="Why Choose Gurukripa Realty?" subtitle="We bring trust, quality, and expertise to every project" />
              <div className="grid gap-4 mt-8">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="mt-8 gold-gradient text-primary font-semibold hover:opacity-90">
                  Know More About Us <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <div className="glass-card rounded-2xl p-2">
                  <img src={property1} alt="Premium villa by Gurukripa Realty" className="rounded-xl w-full" loading="lazy" width={800} height={600} />
                </div>
                <div className="absolute -bottom-6 -left-6 glass-dark rounded-xl p-4 text-gold">
                  <div className="text-2xl font-display font-bold">100+</div>
                  <div className="text-xs text-gold-light/70">Projects Completed</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Featured Properties" subtitle="Hand-picked premium properties for discerning buyers" />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((p, i) => (
              <AnimatedSection key={i}>
                <div className="glass-card rounded-2xl overflow-hidden hover-lift group">
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={600} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold gold-gradient text-primary">{p.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-primary">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gold">{p.price}</span>
                      <Link to="/listings">
                        <Button size="sm" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 text-xs">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/listings">
              <Button className="gold-gradient text-primary font-semibold hover:opacity-90 px-8">
                View All Properties <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 navy-gradient">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="What Our Clients Say" subtitle="Real stories from real homeowners" light />
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i}>
                <div className="glass-dark rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-card/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-gold">{t.name}</div>
                    <div className="text-xs text-card/50">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="Our Process" subtitle="Simple, transparent, and efficient — from start to finish" />
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-gold/90 mb-4">{s.num}</div>
                  <h3 className="text-lg font-display font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-card mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-card/70 max-w-xl mx-auto mb-4">
              Limited premium properties available. Don't miss out on the best deals in Indore.
            </p>
            <p className="text-gold text-sm font-medium mb-8">
              ⚡ Book a free consultation today and get a personalized property report
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gold-gradient text-primary font-semibold hover:opacity-90 text-base px-10">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919425050828" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 text-base px-10">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
