import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: { name: string; value: string }[];
  description: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Rose Garden Midi Dress",
    price: 78,
    compareAtPrice: 98,
    image: product1,
    images: [product1, product5, product6],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Cream Floral", value: "#F5E6D3" },
      { name: "Dusty Rose", value: "#D4A0A0" },
    ],
    description: "A romantic midi dress featuring a delicate rose print on a cream base. The flattering wrap silhouette and flowing skirt make this perfect for garden parties and special occasions.",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Ruffled Blouse",
    price: 52,
    image: product2,
    images: [product2, product7],
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Dusty Pink", value: "#D4A0A0" },
      { name: "Ivory", value: "#FFFFF0" },
    ],
    description: "A charming ruffled blouse with feminine details. The cascading ruffles and puff sleeves create a romantic silhouette perfect for date night or brunch.",
    badge: "New Arrival",
  },
  {
    id: "3",
    name: "High-Rise Vintage Denim",
    price: 68,
    image: product3,
    images: [product3],
    category: "Denim",
    sizes: ["24", "25", "26", "27", "28", "29", "30"],
    colors: [
      { name: "Light Wash", value: "#7BA4C7" },
      { name: "Medium Wash", value: "#4A7CA8" },
    ],
    description: "Classic high-waisted denim with a vintage wash. These flattering jeans feature a relaxed straight leg and perfectly worn-in look.",
  },
  {
    id: "4",
    name: "Layered Gold Necklace Set",
    price: 34,
    image: product4,
    images: [product4],
    category: "Accessories",
    sizes: ["One Size"],
    colors: [{ name: "Gold", value: "#D4A853" }],
    description: "A delicate layered necklace set featuring dainty chains with floral and pendant charms. The perfect finishing touch for any outfit.",
    badge: "Best Seller",
  },
  {
    id: "5",
    name: "Sage Wrap Dress",
    price: 82,
    image: product5,
    images: [product5, product1],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sage Green", value: "#A8BFA0" },
      { name: "Dusty Rose", value: "#D4A0A0" },
    ],
    description: "An elegant wrap dress in a soothing sage green. The balloon sleeves and tie waist create a beautifully feminine silhouette.",
    badge: "New Arrival",
  },
  {
    id: "6",
    name: "Linen Wide-Leg Pants",
    price: 64,
    image: product6,
    images: [product6],
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", value: "#F5F0E8" },
      { name: "Sand", value: "#D4C5A9" },
    ],
    description: "Effortlessly chic linen wide-leg pants in a soft cream. The relaxed fit and natural fabric make these a wardrobe essential.",
  },
  {
    id: "7",
    name: "Eyelet Lace Blouse",
    price: 48,
    image: product7,
    images: [product7, product2],
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Cream", value: "#F5F0E8" },
    ],
    description: "A romantic eyelet lace blouse with delicate details. The scalloped edges and puff sleeves add a feminine touch to this versatile top.",
  },
  {
    id: "8",
    name: "Straw Market Tote",
    price: 42,
    image: product8,
    images: [product8],
    category: "Accessories",
    sizes: ["One Size"],
    colors: [{ name: "Natural", value: "#D4C5A9" }],
    description: "A beautifully woven straw tote with leather handles. Perfect for farmers market trips or a day at the beach.",
    badge: "New Arrival",
  },
];

export const categories = ["All", "Dresses", "Tops", "Denim", "Bottoms", "Accessories"];
