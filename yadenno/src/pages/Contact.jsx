// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pn: 'PN4',
    diameter: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        pn: 'PN4',
        diameter: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1 .36 1.98.68 2.93a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.15-1.15a2 2 0 012.11-.45c.95.32 1.93.55 2.93.68A2 2 0 0122 16.92z"/>
        </svg>
      ),
      label: 'Phone',
      value: '+251 961 36 36 36',
      href: 'tel:+251961363636',
      type: 'phone'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M22 6l-10 7L2 6"/>
        </svg>
      ),
      label: 'Email',
      value: 'yadennoplc@gmail.com',
      href: 'mailto:yadennoplc@gmail.com',
      type: 'email'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-7.58 8-13a8 8 0 10-16 0c0 5.42 8 13 8 13z"/>
          <circle cx="12" cy="9" r="3"/>
        </svg>
      ),
      label: 'Factory',
      value: 'Ashewa Meda, Tatek Industry Zone, Sheger City',
      type: 'address'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="14" rx="2"/>
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>
        </svg>
      ),
      label: 'Main office',
      value: 'Mexico, Sengatera Traders Union Building, Addis Ababa',
      type: 'address'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero - Contact Header */}
      <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary-navy dark:bg-gray-900 pt-20 md:pt-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm border border-white/10">
              <span className="text-white/60">Contact</span>
              <span className="text-white/30">/</span>
              <span>Get in touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-extrabold leading-[1.15] mb-5 text-white" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
              Let's talk <br className="hidden sm:inline" />
              <span className="text-primary-green" style={{ textShadow: '0 2px 20px rgba(121,182,47,0.3)' }}>pipe</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              Reach our team directly, or send your project details through the form and we'll follow up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
                Direct contact
              </div>

              <ul className="space-y-6 mb-10">
                {contactItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex gap-4 group"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary-green/10 dark:bg-primary-green/20 flex items-center justify-center flex-shrink-0 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-base md:text-lg font-semibold text-primary-navy dark:text-white hover:text-primary-green transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-base md:text-lg font-semibold text-primary-navy dark:text-white">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* Managing Director */}
              <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
                Managing director
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex gap-4 group"
              >
                <span className="w-10 h-10 rounded-full bg-primary-green/10 dark:bg-primary-green/20 flex items-center justify-center flex-shrink-0 text-primary-green group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <div>
                  <div className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Fisseha K/mariam
                  </div>
                  <div className="text-base md:text-lg font-semibold text-primary-navy dark:text-white">
                    <a href="tel:+251911146155" className="hover:text-primary-green transition-colors">+251 911 146 155</a>
                    <span className="mx-2 text-gray-400">·</span>
                    <a href="mailto:fisseha@nanfisha.com" className="hover:text-primary-green transition-colors">fisseha@nanfisha.com</a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
                Send an inquiry
              </div>

              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                {/* Name */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+251 9xx xxx xxx"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* PN Class + Diameter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="pn" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      PN class
                    </label>
                    <select
                      id="pn"
                      value={formData.pn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="PN4">PN4</option>
                      <option value="PN6">PN6</option>
                      <option value="PN10">PN10</option>
                      <option value="PN16">PN16</option>
                      <option value="Not sure — advise me">Not sure — advise me</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="diameter" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                      Diameter (mm)
                    </label>
                    <input
                      id="diameter"
                      type="text"
                      placeholder="e.g. 110"
                      value={formData.diameter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label htmlFor="message" className="block text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us about your project, quantity, and timeline"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-primary-navy dark:text-white focus:border-primary-green focus:ring-2 focus:ring-primary-green/20 outline-none transition-all duration-300 resize-y min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-green text-primary-navy px-8 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] transform duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send inquiry'}
                </button>

                {/* Success/Error Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-primary-green/10 text-primary-green rounded-xl text-center font-semibold"
                  >
                    ✅ Your inquiry has been sent! We'll respond within one business day.
                  </motion.div>
                )}

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 font-medium">
                  We typically respond within one business day.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-800 py-16 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-8 md:mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
              Locations
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white transition-colors">
              Find us in <span className="text-primary-green">Ethiopia</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=38.55%2C9.00%2C38.85%2C9.10&layer=mapnik&marker=9.03%2C38.68"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              title="Map of Addis Ababa, Ethiopia"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Quick Quote */}
      <section className="relative overflow-hidden py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="relative bg-primary-navy dark:bg-gray-900 rounded-3xl p-10 md:p-16 overflow-hidden border border-transparent dark:border-gray-700">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-green rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-inter font-extrabold text-white mb-3">
                  Ready to order?
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Get a quick quote for your project — tell us your pressure class, diameter, and quantity.
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-primary-green text-primary-navy px-10 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 whitespace-nowrap flex-shrink-0"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;