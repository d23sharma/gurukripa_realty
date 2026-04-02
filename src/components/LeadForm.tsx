import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const LeadForm = ({ variant = "hero" }: { variant?: "hero" | "section" }) => {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "", details: "" });

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
    if (!form.requirement) {
      toast.error("Please select your requirement");
      return;
    }

    const message = `Hi, I'm ${form.name}. I'm interested in: ${form.requirement}.${form.details ? ` Details: ${form.details}` : ""} Phone: ${form.phone}`;
    const waUrl = `https://wa.me/918408811234?text=${encodeURIComponent(message)}`;

    toast.success("Thank you! Redirecting to WhatsApp...");
    setForm({ name: "", phone: "", requirement: "", details: "" });

    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 500);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${isHero ? "max-w-sm" : "max-w-md mx-auto"}`}>
      <Input
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className={isHero ? "bg-white/20 border-white/30 text-card placeholder:text-card/60" : ""}
        maxLength={100}
      />
      <Input
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={isHero ? "bg-white/20 border-white/30 text-card placeholder:text-card/60" : ""}
        maxLength={15}
      />
      <Select value={form.requirement} onValueChange={(val) => setForm({ ...form, requirement: val })}>
        <SelectTrigger className={isHero ? "bg-white/20 border-white/30 text-card [&>span]:text-card/60 [&>span]:data-[state=selected]:text-card" : ""}>
          <SelectValue placeholder="Your Requirement" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Buy Property">Buy Property</SelectItem>
          <SelectItem value="Sell Property">Sell Property</SelectItem>
          <SelectItem value="Construction Related Enquiry">Construction Related Enquiry</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Any specific requirements (optional)"
        value={form.details}
        onChange={(e) => setForm({ ...form, details: e.target.value })}
        className={isHero ? "bg-white/20 border-white/30 text-card placeholder:text-card/60" : ""}
        maxLength={250}
        rows={3}
      />
      <Button type="submit" className="w-full gold-gradient text-primary font-semibold hover:opacity-90">
        Get Free Consultation
      </Button>
    </form>
  );
};

export default LeadForm;
