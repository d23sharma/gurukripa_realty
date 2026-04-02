import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Phone, MessageCircle, X, BedDouble, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";

const allListings = [
  { id: 1, img: property1, title: "Modern 3BHK Villa", location: "Hoshangabad Road, Bhopal", price: 8500000, bhk: 3, sqft: 2200, bath: 3, type: "Villa", tag: "Premium", amenities: ["Garden", "Parking", "Security"] },
  { id: 2, img: property2, title: "Luxury 4BHK Apartment", location: "E-8 Extension, Bhopal", price: 12000000, bhk: 4, sqft: 3000, bath: 4, type: "Apartment", tag: "Verified", amenities: ["Pool", "Gym", "Clubhouse"] },
  { id: 3, img: property3, title: "Spacious 2BHK Flat", location: "Kolar Road, Bhopal", price: 4500000, bhk: 2, sqft: 1200, bath: 2, type: "Flat", tag: "New", amenities: ["Parking", "Lift", "Security"] },
  { id: 4, img: property4, title: "Premium 3BHK Penthouse", location: "MP Nagar, Bhopal", price: 15000000, bhk: 3, sqft: 2800, bath: 3, type: "Apartment", tag: "Premium", amenities: ["Terrace", "Pool", "Gym"] },
  { id: 5, img: property1, title: "Cozy 2BHK House", location: "Ayodhya Bypass, Bhopal", price: 3500000, bhk: 2, sqft: 1000, bath: 2, type: "House", tag: "Verified", amenities: ["Garden", "Parking"] },
  { id: 6, img: property3, title: "Family 3BHK Villa", location: "Shahpura, Bhopal", price: 7500000, bhk: 3, sqft: 1800, bath: 3, type: "Villa", tag: "New", amenities: ["Garden", "Parking", "Security"] },
];

const formatPrice = (p: number) => {
  if (p >= 10000000) return `₹${(p / 10000000).toFixed(1)} Cr`;
  return `₹${(p / 100000).toFixed(0)} Lakh`;
};

const Listings = () => {
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState([0, 200]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBhk, setSelectedBhk] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allListings.filter((l) => {
    if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.location.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedType && l.type !== selectedType) return false;
    if (selectedBhk && l.bhk !== selectedBhk) return false;
    if (l.price < budget[0] * 100000 || l.price > budget[1] * 100000) return false;
    return true;
  });

  const clearFilters = () => {
    setSearch("");
    setBudget([0, 200]);
    setSelectedType(null);
    setSelectedBhk(null);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-primary text-lg">Filters</h3>
        <button onClick={clearFilters} className="text-sm text-gold hover:underline">Clear All</button>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Budget Range</label>
        <Slider value={budget} onValueChange={setBudget} min={0} max={200} step={5} className="mb-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatPrice(budget[0] * 100000)}</span>
          <span>{formatPrice(budget[1] * 100000)}</span>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">Property Type</label>
        <div className="flex flex-wrap gap-2">
          {["Villa", "Apartment", "Flat", "House"].map((t) => (
            <button key={t} onClick={() => setSelectedType(selectedType === t ? null : t)}
              className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${selectedType === t ? "gold-gradient text-primary border-gold" : "border-border text-muted-foreground hover:border-gold/50"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">BHK</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((b) => (
            <button key={b} onClick={() => setSelectedBhk(selectedBhk === b ? null : b)}
              className={`w-10 h-10 rounded-lg text-sm border transition-all ${selectedBhk === b ? "gold-gradient text-primary border-gold" : "border-border text-muted-foreground hover:border-gold/50"}`}>
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-8 navy-gradient">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-card mb-4 animate-fade-up">
            Property <span className="text-gold-gradient">Listings</span>
          </h1>
          <p className="text-card/70 animate-fade-up-delay-1">Find your perfect home from our curated collection</p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="sticky top-20 z-30 bg-card/95 backdrop-blur-lg border-b border-border py-4">
        <div className="container mx-auto px-4 flex gap-3 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by location or property name..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" maxLength={200} />
          </div>
          <Button variant="outline" className="lg:hidden border-gold/40 text-gold" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="glass-card rounded-2xl p-6 sticky top-40">
              <FilterPanel />
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-primary/50" onClick={() => setShowFilters(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display font-semibold text-lg text-primary">Filters</h3>
                  <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" /></button>
                </div>
                <FilterPanel />
                <Button className="w-full mt-6 gold-gradient text-primary font-semibold" onClick={() => setShowFilters(false)}>Apply Filters</Button>
              </div>
            </div>
          )}

          {/* Listings Grid */}
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-6">{filtered.length} properties found</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((l) => (
                <div key={l.id} className="glass-card rounded-2xl overflow-hidden hover-lift group">
                  <div className="relative overflow-hidden">
                    <img src={l.img} alt={l.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={600} />
                    <div className="absolute top-3 left-3">
                      <Badge className="gold-gradient text-primary border-0 font-semibold">{l.tag}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex gap-2">
                        <a href="tel:+919876543210">
                          <Button size="sm" className="gold-gradient text-primary"><Phone className="w-3 h-3 mr-1" /> Call</Button>
                        </a>
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="border-card text-card hover:bg-card/20"><MessageCircle className="w-3 h-3 mr-1" /> WhatsApp</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-primary text-lg">{l.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-3 h-3" /> {l.location}
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" /> {l.bhk} BHK</span>
                      <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {l.bath}</span>
                      <span className="flex items-center gap-1"><Maximize className="w-4 h-4" /> {l.sqft} sqft</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className="text-xl font-bold text-gold">{formatPrice(l.price)}</span>
                      <Button size="sm" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 text-xs">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No properties match your criteria</p>
                <button onClick={clearFilters} className="text-gold mt-2 hover:underline text-sm">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
