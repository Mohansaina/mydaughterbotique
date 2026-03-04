import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, Minus, Plus, Truck, RefreshCw } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="boutique-container py-20 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/collections" className="btn-outline mt-4 inline-block">Back to Shop</Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="boutique-container py-6 md:py-12">
        {/* Breadcrumb */}
        <Link to="/collections" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ChevronLeft size={16} /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-secondary">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === i ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="text-xs font-medium tracking-wide uppercase text-primary mb-2">{product.badge}</span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">{product.name}</h1>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-2xl font-semibold text-foreground">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.compareAtPrice}</span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mt-6">{product.description}</p>

            {/* Color */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-foreground mb-3">
                Color — <span className="text-muted-foreground">{product.colors[selectedColor].name}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(i)}
                    className={`w-9 h-9 rounded-full border-2 transition-colors ${
                      selectedColor === i ? "border-foreground" : "border-border"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-foreground">Size</h3>
                <button className="text-xs text-primary underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[3rem] h-11 px-3 text-sm rounded-lg border transition-colors ${
                      selectedSize === s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Quantity</h3>
              <div className="inline-flex items-center border border-border rounded-lg">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-muted-foreground hover:text-foreground">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 text-muted-foreground hover:text-foreground">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="btn-primary flex-1 py-4 text-base">Add to Cart</button>
              <button className="btn-outline flex-1 py-4 text-base">Buy Now</button>
              <button className="w-12 h-12 sm:h-auto flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Wishlist">
                <Heart size={20} />
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck size={18} /> Free shipping on orders over $75
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <RefreshCw size={18} /> Free returns within 30 days
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16 md:mt-24 pt-12 border-t border-border">
            <h2 className="section-heading text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile Sticky Add to Cart */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 z-50">
        <div className="flex gap-3">
          <button className="btn-primary flex-1 py-3.5">Add to Cart — ${product.price}</button>
          <button className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-muted-foreground" aria-label="Wishlist">
            <Heart size={18} />
          </button>
        </div>
      </div>
      {/* Spacer for sticky bar */}
      <div className="md:hidden h-20" />
    </Layout>
  );
};

export default ProductDetail;
