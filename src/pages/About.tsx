import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472201-42b4d1d58d1b?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee beans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-coffee-900/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-coffee-100 font-light"
          >
            A relentless pursuit of the perfect cup.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-coffee mx-auto text-coffee-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-8 text-center">
              Born from Passion
            </h2>
            <p className="mb-8 text-lg">
              Coffee Blyth began with a simple belief: coffee is more than just a morning routine; it's a ritual, an experience, and an art form. Founded in 2018 by two coffee enthusiasts who traveled the globe in search of the perfect bean, our mission has always been to bring the world's finest, ethically sourced coffee directly to your cup.
            </p>
            <p className="mb-8 text-lg">
              We believe that true quality starts at the source. That's why we work directly with small-scale farmers and cooperatives across South America, Africa, and Asia. By paying above fair-trade prices, we ensure that the people who grow our coffee can invest in their communities and their craft.
            </p>
            
            <div className="my-16 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1000"
                alt="Roasting process"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-8 text-center">
              The Art of Roasting
            </h2>
            <p className="mb-8 text-lg">
              Roasting is where science meets soul. Our master roasters treat every batch with meticulous care, adjusting temperature and airflow to coax out the unique flavor profile of each bean. We roast in small batches to ensure consistency and ship within 48 hours of roasting, so you experience our coffee at its absolute peak.
            </p>
            <p className="mb-8 text-lg">
              Whether you prefer the bright, floral notes of a light roast Ethiopian Yirgacheffe or the deep, chocolatey richness of a dark roast Sumatra, every bag of Coffee Blyth is a testament to our dedication to the craft.
            </p>
            
            <blockquote className="border-l-4 border-gold pl-6 py-4 my-12 bg-coffee-50 rounded-r-lg italic font-serif text-2xl text-coffee-900">
              "We don't just sell coffee; we share an experience. Every cup should be a moment of pure, unadulterated joy."
            </blockquote>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-8 text-center">
              Our Vision
            </h2>
            <p className="text-lg">
              As we grow, our commitment remains unchanged: to elevate your daily coffee ritual while making a positive impact on the communities that make it possible. Welcome to Coffee Blyth. We're honored to be part of your morning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
