import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: 'Ethiopian Yirgacheffe',
      price: 24.0,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=200&h=200',
      roast: 'Light Roast',
    },
    {
      id: 2,
      name: 'Colombian Supremo',
      price: 22.0,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=200&h=200',
      roast: 'Medium Roast',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-coffee-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-coffee-200">
              <h2 className="text-2xl font-serif font-bold text-coffee-900 flex items-center">
                <ShoppingBag className="w-6 h-6 mr-3 text-gold" />
                Your Cart
              </h2>
              <button
                onClick={onClose}
                className="text-coffee-400 hover:text-coffee-900 transition-colors p-2 rounded-full hover:bg-coffee-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-coffee-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="text-lg">Your cart is empty.</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-gold hover:text-gold-dark underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-24 h-24 bg-coffee-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif font-semibold text-coffee-900 text-lg leading-tight">
                            {item.name}
                          </h3>
                          <button className="text-coffee-300 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-coffee-500 mt-1">{item.roast}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-coffee-200 rounded-full bg-white">
                          <button className="p-2 text-coffee-400 hover:text-coffee-900 transition-colors">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-coffee-900">
                            {item.quantity}
                          </span>
                          <button className="p-2 text-coffee-400 hover:text-coffee-900 transition-colors">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium text-coffee-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-coffee-200 p-6 bg-white space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-coffee-500 text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-coffee-500 text-sm">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-coffee-900 font-serif font-bold text-xl pt-3 border-t border-coffee-100">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    onClick={onClose}
                    className="block w-full bg-coffee-900 text-cream text-center py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-coffee-800 transition-colors"
                  >
                    Checkout
                  </Link>
                  <button
                    onClick={onClose}
                    className="block w-full bg-transparent border border-coffee-900 text-coffee-900 text-center py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-coffee-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
