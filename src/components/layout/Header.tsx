import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";

const navLinks = [
  { label: "Shop", href: "/collections" },
  { label: "New Arrivals", href: "/collections?category=new" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="boutique-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              My Daughters & Me
            </h1>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="hidden md:flex p-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Wishlist">
              <Heart size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors relative" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-up">
          <nav className="boutique-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              <button className="flex items-center gap-2 text-sm text-muted-foreground">
                <Search size={18} /> Search
              </button>
              <button className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart size={18} /> Wishlist
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
