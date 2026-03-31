import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-coffee-700 pb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-gold">
              Coffee Blyth
            </Link>
            <p className="text-coffee-200 text-sm leading-relaxed max-w-xs">
              Premium, ethically sourced coffee roasted to perfection. Experience the art of coffee with every cup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-200 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-coffee-200 hover:text-gold transition-colors text-sm">All Coffee</Link></li>
              <li><Link to="/shop?category=single-origin" className="text-coffee-200 hover:text-gold transition-colors text-sm">Single Origin</Link></li>
              <li><Link to="/shop?category=blends" className="text-coffee-200 hover:text-gold transition-colors text-sm">Signature Blends</Link></li>
              <li><Link to="/shop?category=equipment" className="text-coffee-200 hover:text-gold transition-colors text-sm">Equipment</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-coffee-200 hover:text-gold transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-coffee-200 hover:text-gold transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/shipping" className="text-coffee-200 hover:text-gold transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link to="/track-order" className="text-coffee-200 hover:text-gold transition-colors text-sm">Track Order</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white uppercase tracking-wider">Stay Awake</h4>
            <p className="text-coffee-200 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-coffee-800 border border-coffee-600 text-cream px-4 py-3 rounded-none focus:outline-none focus:border-gold transition-colors placeholder-coffee-400 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-light text-coffee-900 font-semibold px-4 py-3 uppercase tracking-wider text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-coffee-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Coffee Blyth. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
