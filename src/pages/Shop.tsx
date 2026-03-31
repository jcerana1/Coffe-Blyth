import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Filter, ChevronDown } from 'lucide-react';

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      price: 24.0,
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Light Roast',
      type: 'Single Origin',
      notes: 'Floral, Citrus, Sweet',
    },
    {
      id: 2,
      name: 'Colombian Supremo',
      price: 22.0,
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Medium Roast',
      type: 'Single Origin',
      notes: 'Chocolate, Caramel, Nutty',
    },
    {
      id: 3,
      name: 'Sumatra Mandheling',
      price: 26.0,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Dark Roast',
      type: 'Single Origin',
      notes: 'Earthy, Spicy, Full-bodied',
    },
    {
      id: 4,
      name: 'Morning Blend',
      price: 20.0,
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Medium Roast',
      type: 'Blend',
      notes: 'Smooth, Balanced, Cocoa',
    },
    {
      id: 5,
      name: 'Espresso Roast',
      price: 25.0,
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Dark Roast',
      type: 'Blend',
      notes: 'Intense, Rich, Smoky',
    },
    {
      id: 6,
      name: 'Decaf House Blend',
      price: 21.0,
      image: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=600&h=800',
      roast: 'Medium Roast',
      type: 'Decaf',
      notes: 'Mellow, Nutty, Sweet',
    },
  ];

  const filters = ['All', 'Light Roast', 'Medium Roast', 'Dark Roast', 'Single Origin', 'Blend', 'Decaf'];

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(p => p.roast === activeFilter || p.type === activeFilter);

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-6">Our Coffee</h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Explore our collection of meticulously sourced and roasted beans. Find your perfect cup.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0 border-b border-coffee-200 pb-6">
          <div className="flex items-center space-x-2 text-coffee-500">
            <Filter className="w-5 h-5" />
            <span className="font-medium uppercase tracking-wider text-sm">Filter by:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors rounded-full ${
                  activeFilter === filter
                    ? 'bg-coffee-900 text-cream'
                    : 'bg-transparent text-coffee-600 hover:bg-coffee-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2 text-coffee-500 cursor-pointer hover:text-coffee-900 transition-colors">
            <span className="font-medium uppercase tracking-wider text-sm">Sort by</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link to={`/product/${product.id}`} className="relative h-[400px] overflow-hidden bg-coffee-50 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-coffee-900 rounded-full">
                  {product.roast}
                </div>
                {/* Hover Add to Cart Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-coffee-900 text-cream py-3 font-semibold uppercase tracking-wider hover:bg-gold transition-colors">
                    Quick Add
                  </button>
                </div>
              </Link>
              <div className="flex flex-col flex-grow text-center">
                <p className="text-xs text-coffee-400 uppercase tracking-widest mb-2">{product.type}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-2xl font-serif font-bold text-coffee-900 group-hover:text-gold transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-lg font-medium text-coffee-900 mb-4">${product.price.toFixed(2)}</p>
                <p className="text-sm text-coffee-500 italic">{product.notes}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-coffee-500 text-lg">
            No products found matching your filter.
          </div>
        )}
      </div>
    </div>
  );
}
