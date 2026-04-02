import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>{children}</div>;
};

const faqs = [
  { q: "What services does Gurukripa Realty offer?", a: "We offer comprehensive real estate solutions including house & villa construction, property buying assistance, and property selling services. Our team handles everything from consultation to handover." },
  { q: "Which areas in Bhopal do you cover?", a: "We operate across all major areas in Bhopal including Hoshangabad Road, E-8 Extension, Kolar Road, MP Nagar, Shahpura, Ayodhya Bypass, and surrounding areas." },
  { q: "How long does it take to build a house?", a: "Depending on the size and complexity, construction typically takes 8-14 months. We provide a detailed timeline during the consultation phase and ensure on-time delivery." },
  { q: "Do you help with home loans?", a: "Yes, we have tie-ups with leading banks and financial institutions and can assist you in getting the best home loan deals with competitive interest rates." },
  { q: "How do you ensure construction quality?", a: "We use premium materials sourced from trusted suppliers and conduct quality inspections at every stage. Our experienced engineers supervise every project personally." },
  { q: "What is the process for buying a property through you?", a: "Our process is simple: 1) Share your requirements, 2) We curate options, 3) Site visits, 4) Negotiation & documentation, 5) Deal closure. We handle everything end-to-end." },
  { q: "Are there any hidden charges?", a: "Absolutely not. Transparency is our core value. We provide a complete cost breakdown upfront and there are no hidden charges at any stage." },
  { q: "Can I customize my house design?", a: "Yes! We offer fully customizable designs. Our architects work closely with you to create a home that matches your vision, lifestyle, and budget." },
  { q: "How can I contact Gurukripa Realty?", a: "You can reach us via phone at +91 98765 43210, WhatsApp, email at info@gurukripa.com, or visit our office in Bhopal. You can also fill out the contact form on our website." },
  { q: "Do you offer property valuation services?", a: "Yes, we provide free property valuation for sellers. Our experts assess your property based on market trends, location, condition, and comparable sales in the area." },
];

const FAQ = () => (
  <div>
    <section className="pt-32 pb-20 navy-gradient">
      <div className="container mx-auto px-4 text-center animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-card mb-4">Frequently Asked <span className="text-gold-gradient">Questions</span></h1>
        <p className="text-card/70 max-w-2xl mx-auto text-lg">Everything you need to know about our services</p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <SectionHeading title="Common Questions" subtitle="Can't find what you're looking for? Contact us directly." />
        </AnimatedSection>
        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card rounded-xl px-6 border-0">
                <AccordionTrigger className="text-left font-display font-semibold text-primary hover:text-gold transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Link to="/contact">
            <Button className="gold-gradient text-primary font-semibold hover:opacity-90 px-8">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default FAQ;
