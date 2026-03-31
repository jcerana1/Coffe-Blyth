import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-cream min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-coffee-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-coffee-600 max-w-2xl mx-auto"
          >
            Whether you have a question about our roasts, need brewing advice, or just want to say hello, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-coffee-900 text-cream p-10 md:p-16 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-serif font-bold mb-10 text-gold">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-gold mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Our Roastery</h3>
                  <p className="text-coffee-200 leading-relaxed">
                    123 Coffee Lane<br />
                    Seattle, WA 98101<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-gold mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Phone</h3>
                  <p className="text-coffee-200 leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am - 5pm PST
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-gold mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-coffee-200 leading-relaxed">
                    hello@coffeeblyth.com<br />
                    support@coffeeblyth.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-gold mr-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Cafe Hours</h3>
                  <p className="text-coffee-200 leading-relaxed">
                    Monday - Friday: 7am - 7pm<br />
                    Saturday - Sunday: 8am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-10 md:p-16 rounded-2xl shadow-sm border border-coffee-100"
          >
            <h2 className="text-3xl font-serif font-bold mb-10 text-coffee-900">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold uppercase tracking-wider text-coffee-900 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold uppercase tracking-wider text-coffee-900 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-coffee-900 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-coffee-900 mb-2">Subject</label>
                <select
                  id="subject"
                  className="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Order Status</option>
                  <option>Wholesale</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-coffee-900 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-coffee-900 font-semibold px-8 py-4 uppercase tracking-wider transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
