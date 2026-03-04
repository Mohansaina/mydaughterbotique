import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import heroBanner from "@/assets/hero-banner.jpg";
import collectionDresses from "@/assets/collection-dresses.jpg";
import collectionTops from "@/assets/collection-tops.jpg";
import collectionDenim from "@/assets/collection-denim.jpg";
import collectionAccessories from "@/assets/collection-accessories.jpg";
import aboutStore from "@/assets/about-store.jpg";

const collections = [
  { name: "Dresses", image: collectionDresses },
  { name: "Tops", image: collectionTops },
  { name: "Denim", image: collectionDenim },
  { name: "Accessories", image: collectionAccessories },
];

const bestSellers = products.filter((p) => p.badge === "Best Seller" || p.badge === "New Arrival").slice(0, 4);

const galleryImages = [products[0].image, products[4].image, products[1].image, products[5].image, products[6].image, products[7].image];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        <img
          src={heroBanner}
          alt="Mother and daughters in matching floral dresses"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="boutique-container w-full">
            <div className="max-w-lg animate-fade-up">
              <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-background/80 mb-3">
                My Daughters & Me
              </p>
              <h2 className="font-serif text-5xl md:text-7xl font-medium text-background leading-[1.1] mb-6">
                Wear Your Joy
              </h2>
              <p className="text-base text-background/80 mb-8 max-w-md">
                Curated boutique fashion for women who celebrate life's beautiful moments — together.
              </p>
              <Link to="/collections" className="btn-primary text-base px-10 py-4">
                Shop New Arrivals
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 md:py-24">
        <div className="boutique-container">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground">Shop by Collection</h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Explore our curated collections, designed with love for every occasion.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {collections.map((col) => (
              <Link to="/collections" key={col.name} className="collection-card aspect-[3/4]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
                  <h3 className="font-serif text-lg md:text-xl font-medium text-background">{col.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="boutique-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-heading text-foreground">Best Sellers</h2>
              <p className="text-muted-foreground mt-2">Our most-loved pieces this season.</p>
            </div>
            <Link to="/collections" className="hidden md:flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/collections" className="btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <div className="boutique-container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src={aboutStore} alt="Our boutique" className="w-full h-80 md:h-[500px] object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">Our Story</p>
              <h2 className="section-heading text-foreground mb-6">Built on Love, Worn with Joy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My Daughters & Me was born from a simple idea — that fashion should celebrate the bond between generations.
                What started as a mother's dream to dress her daughters in pieces that spark joy has grown into a boutique
                loved by families everywhere.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every piece in our collection is hand-selected with care, designed to make you feel beautiful
                and confident in every moment you share with the ones you love.
              </p>
              <Link to="/about" className="btn-outline">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="boutique-container">
          <div className="text-center mb-10">
            <h2 className="section-heading text-foreground">@mydaughtersandme</h2>
            <p className="text-muted-foreground mt-2">Follow us for daily style inspiration.</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {galleryImages.map((img, i) => (
              <a href="#" key={i} className="aspect-square overflow-hidden rounded-lg group">
                <img
                  src={img}
                  alt={`Style inspiration ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="boutique-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="section-heading text-foreground mb-3">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know about new arrivals, exclusive offers, and boutique updates.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
