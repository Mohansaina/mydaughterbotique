import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="boutique-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              My Daughters & Me
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A boutique for the modern woman. Curated pieces that bring joy to your everyday.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/mydaughtersandme.md" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {["New Arrivals", "Dresses", "Tops", "Denim", "Accessories"].map((item) => (
                <li key={item}>
                  <Link to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2.5">
              {["Shipping & Returns", "Size Guide", "Contact Us", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} My Daughters & Me. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
