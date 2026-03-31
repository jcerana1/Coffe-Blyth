import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck, Leaf, ChevronRight } from 'lucide-react';

export default function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [selectedSize, setSelectedSize] = useState('12oz');

  // Mock product data based on ID
  const product = {
    id: id || '1',
    name: 'Ethiopian Yirgacheffe',
    price: 24.0,
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800&h=1000',
    roast: 'Light Roast',
    type: 'Single Origin',
    notes: 'Floral, Citrus, Sweet',
    description: 'A bright, complex coffee with distinct floral aromas and a sweet, citrusy finish. Grown at high altitudes in the Yirgacheffe region of Ethiopia, this coffee is fully washed to highlight its delicate, tea-like body and vibrant acidity.',
    rating: 4.8,
    reviews: 124,
    origin: 'Yirgacheffe, Ethiopia',
    process: 'Washed',
    altitude: '1,700 - 2,200m',
  };

  const handleQuantityChange = (type: 'inc' | 'dec') => {
    if (type === 'inc') setQuantity(q => q + 1);
    if (type === 'dec' && quantity > 1) setQuantity(q => q - 1);
  };

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-coffee-400 mb-8 uppercase tracking-wider font-medium">
          <Link to="/" className="hover:text-coffee-900 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/shop" className="hover:text-coffee-900 transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-coffee-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] md:h-[700px] bg-coffee-50 rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover mix-blend-multiply"
            />
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold uppercase tracking-wider text-coffee-900 rounded-full">
              {product.roast}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <p className="text-sm text-gold uppercase tracking-widest font-bold mb-2">{product.type}</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-coffee-300'}`} />
                  ))}
                </div>
                <span className="text-coffee-500 text-sm underline underline-offset-4 cursor-pointer hover:text-coffee-900">
                  {product.reviews} Reviews
                </span>
              </div>
              <p className="text-3xl font-medium text-coffee-900 mb-8">${product.price.toFixed(2)}</p>
              <p className="text-lg text-coffee-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Flavor Profile */}
            <div className="mb-10 p-6 bg-coffee-50 rounded-xl border border-coffee-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-coffee-900 mb-4">Flavor Profile</h3>
              <p className="text-lg font-serif italic text-coffee-700">{product.notes}</p>
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                <div>
                  <span className="text-coffee-400 uppercase tracking-wider text-xs block mb-1">Origin</span>
                  <span className="font-medium text-coffee-900">{product.origin}</span>
                </div>
                <div>
                  <span className="text-coffee-400 uppercase tracking-wider text-xs block mb-1">Process</span>
                  <span className="font-medium text-coffee-900">{product.process}</span>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-8 mb-10">
              {/* Grind Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-coffee-900">Grind Type</h3>
                  <button className="text-xs text-gold underline underline-offset-2 hover:text-gold-dark">Grind Guide</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Whole Bean', 'Espresso', 'Drip', 'French Press'].map((grind) => (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      className={`py-3 px-4 text-sm font-medium transition-colors border ${
                        selectedGrind === grind
                          ? 'border-coffee-900 bg-coffee-900 text-cream'
                          : 'border-coffee-200 bg-white text-coffee-600 hover:border-coffee-400'
                      }`}
                    >
                      {grind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-coffee-900 mb-4">Bag Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {['12oz', '2lb', '5lb'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 text-sm font-medium transition-colors border ${
                        selectedSize === size
                          ? 'border-coffee-900 bg-coffee-900 text-cream'
                          : 'border-coffee-200 bg-white text-coffee-600 hover:border-coffee-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-coffee-900 mb-4">Quantity</h3>
                <div className="flex items-center w-32 border border-coffee-200 bg-white">
                  <button
                    onClick={() => handleQuantityChange('dec')}
                    className="p-4 text-coffee-400 hover:text-coffee-900 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="flex-1 text-center text-lg font-medium text-coffee-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange('inc')}
                    className="p-4 text-coffee-400 hover:text-coffee-900 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 sticky bottom-4 z-20 bg-cream/90 backdrop-blur-md p-4 sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:static border-t border-coffee-200 sm:border-none">
              <button className="flex-1 bg-coffee-900 text-cream py-4 font-semibold uppercase tracking-wider hover:bg-coffee-800 transition-colors flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
              <button className="flex-1 bg-gold text-coffee-900 py-4 font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors">
                Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-coffee-200">
              <div className="flex flex-col items-center text-center">
                <Truck className="w-6 h-6 text-gold mb-3" />
                <span className="text-xs font-bold uppercase tracking-wider text-coffee-900 mb-1">Free Shipping</span>
                <span className="text-xs text-coffee-500">On orders over $50</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="w-6 h-6 text-gold mb-3" />
                <span className="text-xs font-bold uppercase tracking-wider text-coffee-900 mb-1">Ethically Sourced</span>
                <span className="text-xs text-coffee-500">Direct trade beans</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-gold mb-3" />
                <span className="text-xs font-bold uppercase tracking-wider text-coffee-900 mb-1">Freshly Roasted</span>
                <span className="text-xs text-coffee-500">Shipped within 48h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
