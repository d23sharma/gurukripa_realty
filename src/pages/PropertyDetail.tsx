import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, BedDouble, Bath, Maximize, Phone, MessageCircle, Calendar, Compass, Sofa, Car, CheckCircle2, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allListings, formatPrice } from "@/data/properties";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  // Use String comparison to safely handle both string and number IDs
  const property = allListings.find((p) => String(p.id) === String(id));
  const [selectedImg, setSelectedImg] = useState(0);

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-display font-bold text-primary mb-4">Property Not Found</h1>
        <p className="text-muted-foreground mb-6">The property you're looking for doesn't exist.</p>
        <Link to="/listings"><Button className="gold-gradient text-primary">Back to Listings</Button></Link>
      </div>
    );
  }

  const allImages = [property.img, ...property.gallery];
  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in "${property.title}" at ${property.location} (${formatPrice(property.price)}). Please share more details.`);

  return (
    <div>
      {/* Header */}
      <section className="pt-28 pb-6 navy-gradient">
        <div className="container mx-auto px-4">
          <Link to="/listings" className="inline-flex items-center gap-2 text-card/70 hover:text-gold transition-colors mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Listings
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-card">{property.title}</h1>
                <Badge className="gold-gradient text-primary border-0 font-semibold">{property.tag}</Badge>
              </div>
              <div className="flex items-center gap-1 text-card/70 text-sm">
                <MapPin className="w-4 h-4" /> {property.location}
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gold">{formatPrice(property.price)}</p>
              <p className="text-card/50 text-xs">Negotiable</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl overflow-hidden">
            <img src={allImages[selectedImg]} alt={property.title} className="w-full h-72 md:h-96 object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {allImages.slice(1, 5).map((img, i) => (
              <button key={i} onClick={() => setSelectedImg(i + 1)}
                className={`rounded-xl overflow-hidden border-2 transition-all ${selectedImg === i + 1 ? "border-gold" : "border-transparent hover:border-gold/40"}`}>
                <img src={img} alt={`${property.title} ${i + 2}`} className="w-full h-36 md:h-44 object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="glass-card rounded-2xl p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: BedDouble, label: "Bedrooms", value: `${property.bhk} BHK` },
                  { icon: Bath, label: "Bathrooms", value: `${property.bath}` },
                  { icon: Maximize, label: "Super Area", value: `${property.sqft} sq.ft` },
                  { icon: Car, label: "Parking", value: property.parking },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-xl bg-muted/50">
                    <item.icon className="w-5 h-5 mx-auto text-gold mb-1" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-primary text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-semibold text-primary text-xl mb-3">About This Property</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-5 border-t border-border">
                {[
                  { icon: Calendar, label: "Year Built", value: property.yearBuilt },
                  { icon: Compass, label: "Facing", value: property.facing },
                  { icon: Sofa, label: "Furnishing", value: property.furnishing },
                  { icon: Car, label: "Parking", value: property.parking },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-primary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-semibold text-primary text-xl mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2 p-3 rounded-xl bg-muted/50">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-primary font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-semibold text-primary text-xl mb-4">Floor Plan Details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(property.floorPlan).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
                    <span className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                    <span className="text-sm font-semibold text-primary">{value}</span>
                  </div>
                ))}
              </div>
              {property.floorPlanImage && (
                <div className="mt-6 pt-5 border-t border-border">
                  <h3 className="font-display font-medium text-primary text-base mb-3">Floor Plan Layout</h3>
                  <div className="rounded-xl overflow-hidden border border-border bg-background">
                    <img src={property.floorPlanImage} alt={`${property.title} Floor Plan`} className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                </div>
              )}
            </div>

            {/* Nearby Landmarks */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-semibold text-primary text-xl mb-4">Nearby Landmarks</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {property.nearbyLandmarks.map((l) => (
                  <div key={l.name} className="flex items-center justify-between p-3 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-gold" />
                      <span className="text-sm text-primary font-medium">{l.name}</span>
                    </div>
                    <Badge variant="outline" className="border-gold/40 text-gold text-xs">{l.distance}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-28 space-y-4">
              <h3 className="font-display font-semibold text-primary text-lg">Interested in this property?</h3>
              <p className="text-sm text-muted-foreground">Get in touch with us for a site visit or more details.</p>
              <a href="tel:+919425050828" className="block">
                <Button className="w-full gold-gradient text-primary font-semibold">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>
              </a>
              <a href={`https://wa.me/919425050828?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full border-gold/40 text-gold hover:bg-gold/10">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </a>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full border-border text-primary hover:bg-muted">
                  Send Enquiry
                </Button>
              </Link>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">⚡ Limited premium properties available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;