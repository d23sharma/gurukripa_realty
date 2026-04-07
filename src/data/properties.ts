import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import floorPlanDefault from "@/assets/floorplan-default.jpg";

export interface Property {
  id: number;
  img: string;
  gallery: string[];
  title: string;
  location: string;
  price: number;
  bhk: number;
  sqft: number;
  bath: number;
  type: string;
  tag: string;
  amenities: string[];
  description: string;
  floorPlan: { bedrooms: string; bathrooms: string; balconies: string; kitchen: string; livingArea: string; totalArea: string };
  nearbyLandmarks: { name: string; distance: string }[];
  yearBuilt: string;
  facing: string;
  furnishing: string;
  parking: string;
  floorPlanImage: string;
}

export const allListings: Property[] = [
  {
    id: 1, img: property1, gallery: [property2, property3, property4, property1],
    title: "Modern 3BHK Villa", location: "Hoshangabad Road, Indore", price: 8500000, bhk: 3, sqft: 2200, bath: 3, type: "Villa", tag: "Premium",
    amenities: ["Garden", "Parking", "24/7 Security", "Power Backup", "Water Supply", "Modular Kitchen", "Club House", "Children's Play Area"],
    description: "A beautifully designed modern villa with spacious rooms, premium fittings, and a lush green garden. Perfect for families seeking a luxurious lifestyle in a prime location with excellent connectivity.",
    floorPlan: { bedrooms: "3 (Master: 14x16, Others: 12x14)", bathrooms: "3 (Attached)", balconies: "2", kitchen: "12x10 Modular", livingArea: "18x20", totalArea: "2200 sq.ft" },
    nearbyLandmarks: [{ name: "DB Mall", distance: "3.5 km" }, { name: "Habibganj Railway Station", distance: "5 km" }, { name: "AIIMS Indore", distance: "4 km" }, { name: "Airport", distance: "12 km" }],
    yearBuilt: "2024", facing: "East", furnishing: "Semi-Furnished", parking: "2 Covered", floorPlanImage: floorPlanDefault
  },
  {
    id: 2, img: property2, gallery: [property1, property3, property4, property2],
    title: "Luxury 4BHK Apartment", location: "E-8 Extension, Indore", price: 12000000, bhk: 4, sqft: 3000, bath: 4, type: "Apartment", tag: "Verified",
    amenities: ["Swimming Pool", "Gymnasium", "Clubhouse", "Jogging Track", "Landscaped Gardens", "CCTV Surveillance", "Fire Safety", "Intercom"],
    description: "An ultra-luxury apartment in the heart of E-8 Extension with world-class amenities. This spacious 4BHK offers panoramic city views and premium Italian marble flooring throughout.",
    floorPlan: { bedrooms: "4 (Master: 16x18, Others: 14x16)", bathrooms: "4 (Attached + Guest)", balconies: "3", kitchen: "14x12 Modular", livingArea: "22x24", totalArea: "3000 sq.ft" },
    nearbyLandmarks: [{ name: "Aashima Mall", distance: "1.5 km" }, { name: "People's Hospital", distance: "2 km" }, { name: "DPS School", distance: "3 km" }, { name: "IT Park", distance: "4 km" }],
    yearBuilt: "2023", facing: "North-East", furnishing: "Fully Furnished", parking: "2 Covered + 1 Open", floorPlanImage: floorPlanDefault
  },
  {
    id: 3, img: property3, gallery: [property1, property2, property4, property3],
    title: "Spacious 2BHK Flat", location: "Kolar Road, Indore", price: 4500000, bhk: 2, sqft: 1200, bath: 2, type: "Flat", tag: "New",
    amenities: ["Parking", "Lift", "24/7 Security", "Rain Water Harvesting", "Power Backup", "Community Hall"],
    description: "A well-ventilated 2BHK flat in a rapidly developing area. Ideal for first-time homebuyers looking for a modern, affordable home with all essential amenities.",
    floorPlan: { bedrooms: "2 (Master: 14x14, Other: 12x12)", bathrooms: "2 (Attached)", balconies: "1", kitchen: "10x8", livingArea: "16x14", totalArea: "1200 sq.ft" },
    nearbyLandmarks: [{ name: "Kolar Road Market", distance: "1 km" }, { name: "Bansal Hospital", distance: "2.5 km" }, { name: "Sagar Public School", distance: "1.5 km" }, { name: "Bus Stand", distance: "3 km" }],
    yearBuilt: "2025", facing: "South-East", furnishing: "Unfurnished", parking: "1 Covered", floorPlanImage: floorPlanDefault
  },
  {
    id: 4, img: property4, gallery: [property1, property2, property3, property4],
    title: "Premium 3BHK Penthouse", location: "MP Nagar, Indore", price: 15000000, bhk: 3, sqft: 2800, bath: 3, type: "Apartment", tag: "Premium",
    amenities: ["Private Terrace", "Swimming Pool", "Gym", "Concierge", "Smart Home", "Home Theatre", "Wine Cellar", "Rooftop Garden"],
    description: "An exclusive penthouse offering unmatched luxury with a private terrace, smart home automation, and breathtaking skyline views. The pinnacle of premium living in MP Nagar.",
    floorPlan: { bedrooms: "3 (Master: 18x20, Others: 16x18)", bathrooms: "3 (Luxury Attached)", balconies: "2 + Terrace", kitchen: "16x12 Italian Modular", livingArea: "24x22", totalArea: "2800 sq.ft" },
    nearbyLandmarks: [{ name: "DB City Mall", distance: "0.5 km" }, { name: "Zone-I Market", distance: "1 km" }, { name: "Indore Junction", distance: "6 km" }, { name: "VIT University", distance: "3 km" }],
    yearBuilt: "2024", facing: "West", furnishing: "Fully Furnished", parking: "3 Covered", floorPlanImage: floorPlanDefault
  },
  {
    id: 5, img: property1, gallery: [property2, property3, property4, property1],
    title: "Cozy 2BHK House", location: "Ayodhya Bypass, Indore", price: 3500000, bhk: 2, sqft: 1000, bath: 2, type: "House", tag: "Verified",
    amenities: ["Garden", "Parking", "Power Backup", "Water Supply", "Boundary Wall"],
    description: "A charming independent house with a private garden, perfect for small families. Located on the Ayodhya Bypass with easy access to major roads and markets.",
    floorPlan: { bedrooms: "2 (Master: 12x14, Other: 12x12)", bathrooms: "2 (1 Attached + 1 Common)", balconies: "1", kitchen: "10x8", livingArea: "14x14", totalArea: "1000 sq.ft" },
    nearbyLandmarks: [{ name: "Ayodhya Bypass Market", distance: "0.5 km" }, { name: "Chirayu Hospital", distance: "3 km" }, { name: "Govt School", distance: "1 km" }, { name: "Petrol Pump", distance: "0.3 km" }],
    yearBuilt: "2022", facing: "North", furnishing: "Semi-Furnished", parking: "1 Open", floorPlanImage: floorPlanDefault
  },
  {
    id: 6, img: property3, gallery: [property1, property2, property4, property3],
    title: "Family 3BHK Villa", location: "Shahpura, Indore", price: 7500000, bhk: 3, sqft: 1800, bath: 3, type: "Villa", tag: "New",
    amenities: ["Garden", "Parking", "24/7 Security", "Vastu Compliant", "Solar Panels", "Modular Kitchen"],
    description: "A Vastu-compliant family villa with eco-friendly solar panels and a beautifully landscaped garden. Located in the peaceful neighborhood of Shahpura with great schools nearby.",
    floorPlan: { bedrooms: "3 (Master: 14x16, Others: 12x14)", bathrooms: "3 (Attached)", balconies: "2", kitchen: "12x10 Modular", livingArea: "18x16", totalArea: "1800 sq.ft" },
    nearbyLandmarks: [{ name: "Shahpura Lake", distance: "1 km" }, { name: "Christ School", distance: "2 km" }, { name: "Reliance Mall", distance: "3 km" }, { name: "Police Station", distance: "1.5 km" }],
    yearBuilt: "2025", facing: "East", furnishing: "Unfurnished", parking: "2 Covered", floorPlanImage: floorPlanDefault
  },
];

export const formatPrice = (p: number) => {
  if (p >= 10000000) return `₹${(p / 10000000).toFixed(1)} Cr`;
  return `₹${(p / 100000).toFixed(0)} Lakh`;
};
