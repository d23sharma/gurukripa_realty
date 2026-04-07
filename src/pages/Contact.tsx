import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import { toast } from "sonner";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useScrollAnimation();
  return <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>{children}</div>;
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    const waMessage = `Hi, I'm ${form.name}. ${form.message ? `Message: ${form.message}` : ""} Phone: ${form.phone}`;
    const waUrl = `https://wa.me/919425050828?text=${encodeURIComponent(waMessage)}`;

    toast.success("Message sent! Redirecting to WhatsApp...");
    setForm({ name: "", phone: "", message: "" });

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 500);
  };

  return (
    <div>
      <section className="pt-32 pb-20 navy-gradient">
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-card mb-4">Get In <span className="text-gold-gradient">Touch</span></h1>
          <p className="text-card/70 max-w-2xl mx-auto text-lg">We'd love to hear from you. Reach out for a free consultation.</p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <SectionHeading title="Send Us a Message" subtitle="Fill out the form and our team will contact you within 24 hours" />
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto lg:mx-0">
                <Input placeholder="Your Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
                <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={15} />
                <Textarea placeholder="Your Message (optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} maxLength={1000} />
                <Button type="submit" className="w-full gold-gradient text-primary font-semibold hover:opacity-90">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </AnimatedSection>

            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:+919425050828" className="flex items-center gap-4 glass-card rounded-xl p-4 hover-lift">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-semibold text-primary">+91 94250 50828</div>
                      </div>
                    </a>
                    <a href="mailto:nitesh@gurukripa.com" className="flex items-center gap-4 glass-card rounded-xl p-4 hover-lift">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold text-primary">nitesh@gurukripa.com</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 glass-card rounded-xl p-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Office</div>
                        <div className="font-semibold text-primary">Gurukripa Realty, 6-7 Shukla Market, Chota Bangarda Rd, MR-5, Near Indial Oil Petrol pump, Indore, Madhya Pradesh</div>
                      </div>
                    </div>
                    <a href="https://wa.me/919425050828" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 glass-card rounded-xl p-4 hover-lift">
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-card" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">WhatsApp</div>
                        <div className="font-semibold text-primary">Chat with us instantly</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="glass-card rounded-2xl overflow-hidden">
                  <iframe
                    title="Gurukripa Realty Indore Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0a7a6ef90d%3A0x5e34e6e6b6ef1e0!2sKalani%20Nagar%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
