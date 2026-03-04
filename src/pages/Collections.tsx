import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const sizes = ["XS", "S", "M", "L", "XL"];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products.filter((p) => {
    if (activeCategory !== "All" && p.category !== activeCategory) return false;
    if (activeSize && !p.sizes.includes(activeSize)) return false;
    return true;
  });

  const clearFilters = () => {
    setActiveCategory("All");
    setActiveSize(null);
  };

  const hasFilters = activeCategory !== "All" || activeSize;

  return (
    <Layout>
      <div className="boutique-container py-8 md:py-12">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <p className="text-xs text-muted-foreground mb-2">Home / Shop</p>
          <h1 className="section-heading text-foreground">Shop All</h1>
          <p className="text-muted-foreground mt-2">{filtered.length} products</p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
          <div className="hidden md:flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
              Clear All <X size={14} />
            </button>
          )}
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-secondary rounded-xl animate-fade-up">
            <h3 className="font-serif text-sm font-semibold mb-3">Category</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-card text-foreground border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <h3 className="font-serif text-sm font-semibold mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(activeSize === s ? null : s)}
                  className={`w-10 h-10 text-xs rounded-lg transition-colors ${
                    activeSize === s
                      ? "bg-foreground text-background"
                      : "bg-card text-foreground border border-border"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-48 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-serif text-sm font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(activeSize === s ? null : s)}
                    className={`w-10 h-10 text-xs rounded-lg transition-colors ${
                      activeSize === s
                        ? "bg-foreground text-background"
                        : "bg-secondary text-secondary-foreground hover:bg-accent"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-4 btn-outline text-sm">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
