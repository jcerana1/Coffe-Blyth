import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Truck, ShieldCheck, Leaf, Coffee } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      price: 24.0,
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Light Roast',
      notes: 'Floral, Citrus, Sweet',
    },
    {
      id: 2,
      name: 'Colombian Supremo',
      price: 22.0,
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Medium Roast',
      notes: 'Chocolate, Caramel, Nutty',
    },
    {
      id: 3,
      name: 'Sumatra Mandheling',
      price: 26.0,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Dark Roast',
      notes: 'Earthy, Spicy, Full-bodied',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee pouring"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-coffee-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-tight"
          >
            Awaken Your <br />
            <span className="text-gold italic">Senses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="text-lg md:text-xl text-coffee-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Experience the world's finest ethically sourced, artisan-roasted coffee. Crafted for those who appreciate the extraordinary in every cup.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-coffee-900 font-semibold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cream text-cream hover:bg-cream hover:text-coffee-900 font-semibold uppercase tracking-wider transition-all duration-300"
            >
              Explore Coffee
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-coffee-900 text-cream py-12 border-b border-coffee-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">Trusted by 10,000+ coffee lovers</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-coffee-700" />
            <p className="text-coffee-200 italic font-serif text-lg text-center md:text-left">
              "The best coffee I've ever tasted. It completely changed my morning routine."
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-4">Signature Roasts</h2>
            <p className="text-coffee-500 max-w-2xl mx-auto">
              Discover our most loved, carefully curated selections. Roasted in small batches to ensure peak freshness and flavor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-coffee-100"
              >
                <Link to={`/product/${product.id}`} className="relative h-80 overflow-hidden bg-coffee-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-coffee-900 rounded-full">
                    {product.roast}
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-serif font-bold text-coffee-900 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <span className="text-lg font-medium text-coffee-900">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-coffee-500 mb-6 flex-grow">{product.notes}</p>
                  <button className="w-full py-3 border border-coffee-900 text-coffee-900 font-semibold uppercase tracking-wider hover:bg-coffee-900 hover:text-cream transition-colors rounded-none">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 border-b-2 border-gold text-coffee-900 font-semibold uppercase tracking-wider hover:text-gold transition-colors"
            >
              View All Coffee
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-6">
                The Blyth Difference
              </h2>
              <p className="text-coffee-600 mb-10 text-lg leading-relaxed">
                We believe that great coffee is an experience, not just a beverage. Every bean we source, roast, and package is handled with uncompromising care and dedication to quality.
              </p>
              <div className="space-y-8">
                {[
                  { icon: Leaf, title: 'Ethically Sourced', desc: 'Direct trade relationships with farmers ensuring fair wages and sustainable practices.' },
                  { icon: Coffee, title: 'Freshly Roasted', desc: 'Roasted in small batches and shipped within 48 hours for maximum freshness.' },
                  { icon: ShieldCheck, title: 'Premium Quality', desc: 'Only the top 1% of specialty grade Arabica beans make it into our bags.' },
                  { icon: Truck, title: 'Fast Delivery', desc: 'Free expedited shipping on all orders over $50 straight to your door.' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-6">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-bold text-coffee-900 mb-2">{feature.title}</h4>
                      <p className="text-coffee-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
                alt="Coffee roasting process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-coffee-900/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (Full Width Image) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-coffee-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-6">
            More Than A Drink. <br />
            <span className="text-gold italic">A Ritual.</span>
          </h2>
          <p className="text-coffee-100 text-lg md:text-xl mb-10 font-light leading-relaxed">
            Take a moment for yourself. Let the rich aroma fill your space and the complex flavors awaken your mind. This is your time.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-cream text-coffee-900 font-semibold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-24 bg-coffee-900 text-cream text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Join the Club</h2>
          <p className="text-coffee-200 mb-10 text-lg">
            Subscribe to our newsletter and get <span className="text-gold font-bold">10% off</span> your first order. Plus, early access to limited roasts.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow bg-coffee-800 border border-coffee-600 text-cream px-6 py-4 rounded-none focus:outline-none focus:border-gold transition-colors placeholder-coffee-400"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-gold-light text-coffee-900 font-semibold px-8 py-4 uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
          <p className="text-coffee-500 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}
