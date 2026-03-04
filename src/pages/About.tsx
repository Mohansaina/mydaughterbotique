import { Link } from "react-router-dom";
import { Heart, Sparkles, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBanner from "@/assets/hero-banner.jpg";
import aboutStore from "@/assets/about-store.jpg";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every piece is hand-selected with care, ensuring quality and style in every stitch.",
  },
  {
    icon: Users,
    title: "Family First",
    description: "We believe in the power of the mother-daughter bond, and our collections reflect that connection.",
  },
  {
    icon: Sparkles,
    title: "Joyful Style",
    description: "Fashion should make you feel beautiful, confident, and full of joy — every single day.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={heroBanner} alt="Our family" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="animate-fade-up">
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-background mb-4">Our Story</h1>
            <p className="text-background/80 text-lg max-w-md mx-auto">Where love meets style</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="boutique-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">The Beginning</p>
              <h2 className="section-heading text-foreground mb-6">Built on Love, Worn with Joy</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My Daughters & Me was born from a mother's love for her daughters and a shared passion for beautiful things.
                  What began as playful weekend shopping trips became a dream — to create a boutique where every woman
                  could find pieces that make her heart sing.
                </p>
                <p>
                  Based in Moldova, we curate our collections from designers who share our values: quality craftsmanship,
                  timeless elegance, and a touch of whimsy. Every item in our store has been personally chosen because
                  it made us smile — and we know it will make you smile too.
                </p>
                <p>
                  Whether you're shopping for yourself, matching with your mini-me, or finding the perfect gift,
                  My Daughters & Me is your destination for fashion that celebrates the beautiful bond of family.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={aboutStore} alt="Our boutique store" className="w-full h-[500px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="boutique-container">
          <div className="text-center mb-12">
            <h2 className="section-heading text-foreground">What We Believe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-8 bg-card rounded-xl shadow-soft">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="boutique-container text-center">
          <h2 className="section-heading text-foreground mb-4">Come Shop with Us</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Discover our latest collection and find your new favorite piece.
          </p>
          <Link to="/collections" className="btn-primary text-base px-10 py-4">
            Explore the Collection
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
