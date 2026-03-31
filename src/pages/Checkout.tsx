import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Lock } from 'lucide-react';

export default function Checkout() {
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
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <Link to="/shop" className="flex items-center text-coffee-500 hover:text-coffee-900 transition-colors font-medium text-sm uppercase tracking-wider">
            <ChevronLeft className="w-4 h-4 mr-2" /> Return to Shop
          </Link>
          <h1 className="text-3xl font-serif font-bold text-coffee-900">Secure Checkout</h1>
          <div className="flex items-center text-coffee-500 text-sm font-medium uppercase tracking-wider">
            <Lock className="w-4 h-4 mr-2" /> SSL Encrypted
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form Section */}
          <div className="lg:col-span-7 space-y-12">
            {/* Contact Info */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-coffee-900">Contact Information</h2>
                <span className="text-sm text-coffee-500">Already have an account? <Link to="/login" className="text-gold hover:text-gold-dark underline underline-offset-4">Log in</Link></span>
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                required
              />
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="newsletter" className="w-4 h-4 text-gold border-coffee-300 rounded focus:ring-gold" />
                <label htmlFor="newsletter" className="ml-3 text-sm text-coffee-600">Email me with news and offers</label>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6">Shipping Address</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                  <select className="w-full bg-white border border-coffee-200 text-coffee-500 px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none">
                    <option value="" disabled selected>State</option>
                    <option value="WA">Washington</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                  </select>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </form>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6">Payment</h2>
              <p className="text-sm text-coffee-500 mb-6">All transactions are secure and encrypted.</p>
              
              <div className="border border-coffee-200 bg-white rounded-lg overflow-hidden">
                <div className="p-4 border-b border-coffee-200 flex items-center justify-between bg-coffee-50">
                  <div className="flex items-center">
                    <input type="radio" id="credit-card" name="payment" className="w-4 h-4 text-gold focus:ring-gold" defaultChecked />
                    <label htmlFor="credit-card" className="ml-3 font-bold text-coffee-900">Credit Card</label>
                  </div>
                  <div className="flex space-x-2">
                    {/* Mock payment icons */}
                    <div className="w-10 h-6 bg-coffee-200 rounded"></div>
                    <div className="w-10 h-6 bg-coffee-200 rounded"></div>
                    <div className="w-10 h-6 bg-coffee-200 rounded"></div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                      className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Security code"
                      className="w-full bg-white border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
              </div>
            </section>

            <button className="w-full bg-coffee-900 hover:bg-coffee-800 text-cream font-semibold px-8 py-5 uppercase tracking-wider transition-colors text-lg shadow-xl shadow-coffee-900/20">
              Pay ${total.toFixed(2)}
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee-100 sticky top-32">
              <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-coffee-50 rounded-lg overflow-hidden border border-coffee-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="absolute -top-2 -right-2 bg-coffee-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-coffee-900">{item.name}</h3>
                        <p className="text-xs text-coffee-500">{item.roast}</p>
                      </div>
                    </div>
                    <p className="font-medium text-coffee-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-coffee-200 pt-6 space-y-4 mb-6">
                <div className="flex justify-between text-coffee-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-coffee-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-coffee-600">
                  <span>Shipping</span>
                  <span className="font-medium text-coffee-900">${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-coffee-200 pt-6 flex justify-between items-end">
                <span className="text-lg font-bold uppercase tracking-wider text-coffee-900">Total</span>
                <div className="text-right">
                  <span className="text-xs text-coffee-400 block mb-1">USD</span>
                  <span className="text-3xl font-serif font-bold text-coffee-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
