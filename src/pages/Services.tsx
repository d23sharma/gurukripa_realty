import { Building2, Home, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import constructionImg from "@/assets/construction.jpg";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>{children}</div>;
};

const servicesData = [
  {
    icon: Building2,
    title: "House & Villa Construction",
    img: constructionImg,
    desc: "From architectural planning to the final coat of paint, we handle every aspect of building your dream home. Our team of experienced engineers and architects ensure premium quality construction with modern designs.",
    features: ["Custom architectural design", "Premium construction materials", "On-time delivery guarantee", "Quality inspections at every stage", "Post-construction support", "Transparent cost breakdown"],
  },
  {
    icon: Home,
    title: "Property Buying Assistance",
    img: property1,
    desc: "Finding the right property can be overwhelming. Our expert team curates the best options based on your requirements, budget, and preferred locations. We handle negotiations, documentation, and everything in between.",
    features: ["Curated property shortlisting", "Market rate analysis", "Legal verification", "Negotiation support", "Loan assistance", "Registration & documentation"],
  },
  {
    icon: TrendingUp,
    title: "Property Selling Services",
    img: property2,
    desc: "Get the best value for your property with our comprehensive selling services. We leverage our extensive network and market expertise to connect you with genuine buyers quickly.",
    features: ["Free property valuation", "Professional photography", "Multi-platform listing", "Buyer verification", "Price negotiation", "Smooth deal closure"],
  },
];

const Services = () => (
  <div>
    {/* Hero */}
    <section className="pt-32 pb-20 navy-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-card mb-4">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-card/70 max-w-2xl mx-auto text-lg">
            End-to-end real estate solutions — from building your dream home to finding or selling the perfect property.
          </p>
        </div>
      </div>
    </section>

    {/* Services */}
    {servicesData.map((service, i) => (
      <section key={i} className={`py-20 ${i % 2 === 0 ? "bg-card" : "bg-muted"}`}>
        <div className="container mx-auto px-4">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            <AnimatedSection className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="glass-card rounded-2xl p-2">
                <img src={service.img} alt={service.title} className="rounded-xl w-full h-80 object-cover" loading="lazy" width={800} height={600} />
              </div>
            </AnimatedSection>
            <AnimatedSection className={i % 2 !== 0 ? "lg:order-1" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">{service.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="gold-gradient text-primary font-semibold hover:opacity-90">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-20 navy-gradient text-center">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-display font-bold text-card mb-4">Ready to Get Started?</h2>
          <p className="text-card/70 mb-8 max-w-lg mx-auto">
            Contact us today for a free consultation and let us help you make the right real estate decision.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gold-gradient text-primary font-semibold hover:opacity-90 px-10">
              Contact Us Now
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Services;
