import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import aboutImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>{children}</div>;
};

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide premium, affordable real estate solutions with complete transparency, ensuring every family finds their perfect home." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted real estate brand in Central India, known for quality construction and ethical property dealings." },
  { icon: Heart, title: "Our Values", desc: "Integrity, quality, transparency, and client satisfaction drive every decision we make at Gurukripa Realty." },
];

const About = () => (
  <div>
    <section className="pt-32 pb-20 navy-gradient">
      <div className="container mx-auto px-4 text-center animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-card mb-4">About <span className="text-gold-gradient">Gurukripa Realty</span></h1>
        <p className="text-card/70 max-w-2xl mx-auto text-lg">Building trust, delivering quality — since 2016.</p>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-2">
              <img src={aboutImg} alt="Gurukripa Realty team" className="rounded-xl w-full" loading="lazy" width={1200} height={600} />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2016 in Bhopal, Gurukripa Realty Pvt. Ltd. started with a simple vision — to make quality real estate accessible to every family. What began as a small property dealing firm has grown into a comprehensive real estate company offering construction, buying, and selling services.</p>
              <p>Over the years, we have delivered 100+ homes and helped hundreds of families find their perfect property. Our success is built on a foundation of transparency, quality, and unwavering commitment to client satisfaction.</p>
              <p>Today, Gurukripa Realty is recognized as one of Bhopal's most trusted names in real estate, known for premium construction quality and ethical business practices.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="What Drives Us" subtitle="Our mission, vision, and values shape everything we do" />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={i}>
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title="Why Families Trust Us" />
        </AnimatedSection>
        <div className="max-w-2xl mx-auto space-y-4">
          {["Over 100 homes successfully delivered", "8+ years of trusted service", "Complete transparency in pricing and process", "Dedicated post-sale support", "Strong local expertise in Bhopal real estate", "End-to-end project management"].map((item, i) => (
            <AnimatedSection key={i}>
              <div className="flex items-center gap-3 glass-card rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="gold-gradient text-primary font-semibold hover:opacity-90 px-8">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default About;
