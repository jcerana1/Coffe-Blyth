import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Brewing the Perfect Pour-Over',
      excerpt: 'Master the art of the pour-over with our step-by-step guide, from grind size to water temperature.',
      image: 'https://images.unsplash.com/photo-1495474472201-42b4d1d58d1b?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Oct 12, 2023',
      category: 'Brewing Guides',
    },
    {
      id: 2,
      title: 'Understanding Coffee Roasts: Light, Medium, or Dark?',
      excerpt: 'Discover the differences between roast levels and how they impact the flavor profile of your daily cup.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Sep 28, 2023',
      category: 'Coffee Education',
    },
    {
      id: 3,
      title: 'Our Journey to Sourcing Ethical Beans in Colombia',
      excerpt: 'Join us as we travel to the heart of Colombia to meet the farmers behind our newest single-origin release.',
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Sep 15, 2023',
      category: 'Behind the Beans',
    },
    {
      id: 4,
      title: '5 Essential Tools Every Home Barista Needs',
      excerpt: 'Elevate your home coffee setup with these five must-have tools for brewing café-quality coffee.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Aug 30, 2023',
      category: 'Equipment',
    },
    {
      id: 5,
      title: 'The Science of Water: Why Your Tap Water Might Be Ruining Your Coffee',
      excerpt: 'Water makes up 98% of your coffee. Learn why water quality is crucial and how to optimize it for brewing.',
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Aug 12, 2023',
      category: 'Coffee Science',
    },
    {
      id: 6,
      title: 'Cold Brew vs. Iced Coffee: What\'s the Difference?',
      excerpt: 'Summer is here. We break down the differences between these two popular chilled coffee methods.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800&h=600',
      date: 'Jul 22, 2023',
      category: 'Brewing Guides',
    },
  ];

  return (
    <div className="bg-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-6">The Roaster's Journal</h1>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Insights, guides, and stories from the world of specialty coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-coffee-900 rounded-full">
                  {post.category}
                </div>
              </Link>
              <div className="flex flex-col flex-grow">
                <p className="text-sm text-coffee-400 mb-3">{post.date}</p>
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-serif font-bold text-coffee-900 group-hover:text-gold transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-coffee-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
