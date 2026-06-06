export type Product = {
  id: string;
  title: string;
  category: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
};

export const categories = [
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home",
  "Beauty",
  "Grocery",
] as const;

export const products: Product[] = [
  {
    id: "nova-x5-smartphone",
    title: "Nova X5 5G Smartphone, 128 GB",
    category: "Mobiles",
    brand: "Nova",
    price: 18999,
    originalPrice: 24999,
    rating: 4.4,
    reviews: 1842,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    badge: "Top deal",
    description:
      "A dependable everyday 5G phone with a bright display, smooth performance, and all-day battery life.",
    highlights: [
      "6.6-inch FHD+ display",
      "50 MP dual camera",
      "5000 mAh battery",
      "8 GB RAM and 128 GB storage",
    ],
    specifications: {
      Display: "6.6-inch FHD+",
      Processor: "Octa-core 5G",
      Camera: "50 MP + 2 MP",
      Warranty: "1 year manufacturer warranty",
    },
  },
  {
    id: "soniq-airbuds-pro",
    title: "Soniq AirBuds Pro with 40H Playback",
    category: "Electronics",
    brand: "Soniq",
    price: 1499,
    originalPrice: 3999,
    rating: 4.2,
    reviews: 9231,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
    badge: "Bestseller",
    description:
      "Comfortable wireless earbuds with punchy sound, clear calls, and a compact quick-charge case.",
    highlights: [
      "40 hours total playback",
      "Environmental noise cancellation",
      "Low-latency gaming mode",
      "IPX5 splash resistance",
    ],
    specifications: {
      Connectivity: "Bluetooth 5.3",
      Charging: "USB Type-C",
      Microphones: "Quad mic ENC",
      Warranty: "1 year",
    },
  },
  {
    id: "stride-running-shoes",
    title: "Stride Men's Everyday Running Shoes",
    category: "Fashion",
    brand: "Stride",
    price: 1899,
    originalPrice: 3499,
    rating: 4.3,
    reviews: 2458,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    badge: "Limited stock",
    description:
      "Lightweight everyday running shoes with a breathable upper and cushioned sole for daily comfort.",
    highlights: [
      "Breathable mesh upper",
      "Cushioned EVA midsole",
      "Flexible rubber outsole",
      "Regular fit",
    ],
    specifications: {
      Material: "Mesh and synthetic",
      Sole: "EVA and rubber",
      Closure: "Lace-up",
      Care: "Wipe with a clean dry cloth",
    },
  },
  {
    id: "orbit-smartwatch-2",
    title: "Orbit Watch 2 with AMOLED Display",
    category: "Electronics",
    brand: "Orbit",
    price: 2799,
    originalPrice: 6999,
    rating: 4.1,
    reviews: 5112,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    badge: "58% off",
    description:
      "A crisp AMOLED smartwatch for calls, activity tracking, and useful everyday health insights.",
    highlights: [
      "1.43-inch AMOLED display",
      "Bluetooth calling",
      "100+ sports modes",
      "Up to 7 days battery",
    ],
    specifications: {
      Display: "1.43-inch AMOLED",
      WaterResistance: "IP68",
      Sensors: "Heart rate and SpO2",
      Compatibility: "Android and iOS",
    },
  },
  {
    id: "homecraft-mixer-grinder",
    title: "HomeCraft 750W Mixer Grinder, 3 Jars",
    category: "Home",
    brand: "HomeCraft",
    price: 3299,
    originalPrice: 5299,
    rating: 4.5,
    reviews: 1174,
    image:
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=85",
    badge: "Assured pick",
    description:
      "A sturdy mixer grinder made for daily Indian cooking, with three stainless steel jars and overload protection.",
    highlights: [
      "Powerful 750W motor",
      "Three stainless steel jars",
      "Overload protection",
      "Anti-slip feet",
    ],
    specifications: {
      Power: "750 watts",
      Speed: "3 speed with pulse",
      Jars: "1.5 L, 1 L, 0.4 L",
      Warranty: "2 years on product",
    },
  },
  {
    id: "lumos-desk-lamp",
    title: "Lumos Minimal LED Study Lamp",
    category: "Home",
    brand: "Lumos",
    price: 899,
    originalPrice: 1599,
    rating: 4.4,
    reviews: 846,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    description:
      "A compact, glare-free desk lamp with adjustable brightness for study tables and work desks.",
    highlights: [
      "Three brightness levels",
      "Warm and cool light modes",
      "Flexible neck",
      "Low power consumption",
    ],
    specifications: {
      Material: "Metal and ABS",
      Power: "7 watts",
      Controls: "Touch controls",
      Cable: "1.5 m power cable",
    },
  },
  {
    id: "nourish-skincare-set",
    title: "Nourish Daily Skincare Essentials Set",
    category: "Beauty",
    brand: "Nourish",
    price: 1299,
    originalPrice: 1999,
    rating: 4.6,
    reviews: 3289,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    badge: "Loved by users",
    description:
      "A simple three-step skincare set with cleanser, serum, and moisturizer for a balanced daily routine.",
    highlights: [
      "Suitable for all skin types",
      "Dermatologically tested",
      "No mineral oil",
      "Cruelty-free formula",
    ],
    specifications: {
      Includes: "Cleanser, serum, moisturizer",
      SkinType: "All skin types",
      ShelfLife: "24 months",
      CountryOfOrigin: "India",
    },
  },
  {
    id: "trailpack-backpack",
    title: "TrailPack 28L Water-Resistant Backpack",
    category: "Fashion",
    brand: "TrailPack",
    price: 1099,
    originalPrice: 2499,
    rating: 4.3,
    reviews: 4018,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description:
      "A practical daypack with a padded laptop sleeve, roomy compartments, and a weather-resistant finish.",
    highlights: [
      "Fits up to 15.6-inch laptop",
      "Water-resistant exterior",
      "Padded shoulder straps",
      "Two bottle pockets",
    ],
    specifications: {
      Capacity: "28 litres",
      Material: "Polyester",
      Compartments: "Three",
      Warranty: "6 months",
    },
  },
  {
    id: "keypro-wireless-keyboard",
    title: "KeyPro Compact Wireless Keyboard",
    category: "Electronics",
    brand: "KeyPro",
    price: 1799,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 1357,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    badge: "New arrival",
    description:
      "A quiet compact keyboard with a clean layout and reliable multi-device wireless connectivity.",
    highlights: [
      "Compact 78-key layout",
      "Connect up to three devices",
      "Quiet tactile keys",
      "12-month battery life",
    ],
    specifications: {
      Connectivity: "Bluetooth and 2.4 GHz",
      Layout: "English India",
      Battery: "2 x AAA",
      Compatibility: "Windows, macOS, Android",
    },
  },
  {
    id: "audiopeak-headphones",
    title: "AudioPeak Studio Wireless Headphones",
    category: "Electronics",
    brand: "AudioPeak",
    price: 2499,
    originalPrice: 4999,
    rating: 4.4,
    reviews: 2725,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    badge: "50% off",
    description:
      "Comfortable over-ear headphones with balanced sound and long battery life for work, travel, and music.",
    highlights: [
      "50 mm dynamic drivers",
      "Up to 35 hours playback",
      "Soft memory foam cushions",
      "Foldable design",
    ],
    specifications: {
      Driver: "50 mm",
      Battery: "35 hours",
      Charging: "USB Type-C",
      Weight: "245 g",
    },
  },
  {
    id: "aroma-coffee-beans",
    title: "Aroma South Indian Filter Coffee, 500g",
    category: "Grocery",
    brand: "Aroma",
    price: 449,
    originalPrice: 599,
    rating: 4.7,
    reviews: 968,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    badge: "Fresh batch",
    description:
      "A rich medium-dark roast blend with a full body, balanced bitterness, and a traditional filter coffee finish.",
    highlights: [
      "80% coffee and 20% chicory",
      "Medium-dark roast",
      "Freshly ground",
      "Resealable pack",
    ],
    specifications: {
      NetWeight: "500 g",
      Roast: "Medium-dark",
      Form: "Ground coffee",
      ShelfLife: "12 months",
    },
  },
  {
    id: "weave-cotton-kurta",
    title: "Weave Pure Cotton Printed Kurta",
    category: "Fashion",
    brand: "Weave",
    price: 1199,
    originalPrice: 2299,
    rating: 4.2,
    reviews: 1836,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=85",
    description:
      "A breathable cotton kurta with a modern print and comfortable straight fit for workdays and casual occasions.",
    highlights: [
      "100% breathable cotton",
      "Straight regular fit",
      "Three-quarter sleeves",
      "Machine washable",
    ],
    specifications: {
      Fabric: "Pure cotton",
      Pattern: "Printed",
      Fit: "Regular",
      Care: "Gentle machine wash",
    },
  },
];

export const productById = (id: string) =>
  products.find((product) => product.id === id);

export const brands = Array.from(
  new Set(products.map((product) => product.brand)),
).sort();
