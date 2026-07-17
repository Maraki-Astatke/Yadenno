import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Animated counter
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const targets = [4, 250, 2, 1];
    const increments = targets.map(t => t / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounts(prev =>
          prev.map((val, idx) => {
            if (idx === 1) {
              return Math.min(Math.round(increments[idx] * currentStep), targets[idx]);
            }
            return Math.min(Math.round(increments[idx] * currentStep), targets[idx]);
          })
        );
      } else {
        clearInterval(timer);
        setCounts(targets);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    {
      value: counts[0],
      label: 'pressure classes',
      detail: 'PN4 to PN16'
    },
    {
      value: counts[1],
      label: 'millimetre diameter range',
      detail: 'Full coverage'
    },
    {
      value: counts[2],
      label: 'manufacturing & distribution sites',
      detail: 'Nationwide reach'
    },
    {
      value: counts[3],
      label: 'factory, full technical support',
      detail: 'End-to-end service'
    }
  ];

  const features = [
    {
      title: 'High-quality manufacturing',
      description: 'Every run is produced to PN pressure-class tolerance at our Tatek facility, with consistent wall thickness and joint fit across the full diameter range.',
      icon: (
        <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0l-4.725 2.885a.562.562 0 01-.84-.61l1.285-5.385a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    },
    {
      title: 'Reliable distribution',
      description: 'Stock moves from our factory in Sheger City through our Addis Ababa office, keeping contractors and distributors supplied on a dependable schedule.',
      icon: (
        <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: 'Technical support',
      description: 'Our team helps you choose the right pressure class and diameter for the job, and is on hand for installation and specification questions.',
      icon: (
        <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m-7.5-4.4c.884-.284 1.5-1.128 1.5-2.097V7.524c0-1.136-.847-2.1-1.98-2.193a40.458 40.458 0 00-1.02-.072m-3 0h.001M3.75 5.25h.001M3.75 5.25v9m3-9h12M15 12h.01M12 15h.01M12 12h.01M12 9h.01M9 12h.01M9 15h.01M6 12h.01M6 15h.01M6 9h.01M3.75 14.25v3.375c0 .621.504 1.125 1.125 1.125h2.25" />
        </svg>
      )
    }
  ];

  const products = [
    {
      id: 'pressure',
      name: 'UPVC Pressure Pipe',
      description: 'Our orange-line pipe is built for water-supply applications where consistent pressure rating matters. Socketed A-style ends give a fast, reliable joint on site.',
      image: '/pvc-orange.jpeg',
      tag: 'PRESSURE LINE',
      tagColor: 'bg-primary-navy',
      imageBg: 'from-primary-green/5 to-primary-navy/5'
    },
    {
      id: 'drainage',
      name: 'UPVC Drainage Pipe',
      description: 'The grey-line finish suits drainage and sewage runs, with the same joint system and diameter range as our pressure line for straightforward specification.',
      image: '/pvc-grey.jpeg',
      tag: 'DRAINAGE LINE',
      tagColor: 'bg-gray-700',
      imageBg: 'from-gray-100 to-gray-200/50'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary-navy">

        {/* Background Image — fully visible */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Gradient overlay — darker to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/80 dark:from-slate-950/90 dark:via-slate-950/85 dark:to-slate-950/90" />

        {/* Text directly on image, centred */}
        <div className="relative z-10 w-full flex items-center justify-center px-6 md:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl w-full flex flex-col items-center text-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-primary-green/25 text-primary-green px-5 py-2 rounded-full text-sm font-semibold mb-7 lg:mt-5 border border-primary-green/40 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary-green inline-block animate-pulse"></span>
              Manufactured in Sheger City, Ethiopia
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-extrabold leading-[1.15] mb-6 text-white" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55)' }}>
              Pipe systems built for pressure, <span className="text-primary-green" style={{ textShadow: '0 2px 20px rgba(121,182,47,0.45)' }}>not compromise.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-10 max-w-3xl font-medium" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.6)' }}>
              Yadenno Plastics PLC manufactures UPVC pressure and drainage pipes from <br className="hidden md:inline" />
              our Tatek Industry Zone facility — engineered to PN4 through PN16 <br className="hidden md:inline" />
              pressure classes across a 50–250mm diameter range.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                to="/products"
                className="bg-primary-green text-white px-9 py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl duration-200"
              >
                View our pipe range
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/80 text-white px-9 py-4 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-primary-navy hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-sm bg-white/10"
              >
                Talk to our team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #16225C 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative group"
              >
                <div
                  className="bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 text-center border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  style={{ boxShadow: '0 4px 20px rgba(121, 182, 47, 0.08), 0 1px 4px rgba(121, 182, 47, 0.05)' }}
                >
                  {/* Green Shadow Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-transparent to-primary-green/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/0 via-primary-green/0 to-primary-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Value */}
                  <div className="font-inter font-extrabold text-4xl md:text-4xl lg:text-4xl text-primary-navy dark:text-primary-green mb-2 relative" style={{ textShadow: '0 2px 20px rgba(121, 182, 47, 0.15)' }}>
                    {index === 0 ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        {stat.value}
                      </motion.span>
                    ) : index === 1 ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        {stat.value}
                      </motion.span>
                    ) : index === 2 ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                      >
                        {stat.value}
                      </motion.span>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                      >
                        {stat.value}
                      </motion.span>
                    )}

                    {/* Decorative underline */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-primary-green rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '1.5rem' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    />
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base font-bold text-gray-700 dark:text-gray-100 mt-1 capitalize">
                    {stat.label}
                  </div>

                  {/* Detail */}
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-300 mt-1 font-medium">
                    {stat.detail}
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-green/0 via-primary-green to-primary-green/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-green/30 to-transparent"></div>
      </motion.section>

      {/* Features Section - What we do */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 transition-colors duration-300"
      >
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-navy rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
              What we do
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white mb-4 transition-colors">
              From resin to ready pipe, <span className="text-primary-green">under one roof</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transition-colors">
              We manufacture, distribute, and support UPVC pipe systems for water supply and drainage projects across Ethiopia — built to hold pressure and built to reach site on schedule.
            </p>
          </motion.div>

          {/* Features Grid — equal height cards */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group flex"
              >
                <div className="flex flex-col w-full bg-white dark:bg-gray-800 rounded-2xl p-7 text-center border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-transparent to-primary-green/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 mx-auto mb-4 bg-primary-green/10 rounded-xl flex items-center justify-center relative flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-inter font-bold text-primary-navy dark:text-white mb-3 relative">
                    {feature.title}
                  </h3>

                  {/* Description — flex-grow so all cards stretch to same height */}
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed relative font-normal flex-grow">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-green/0 via-primary-green to-primary-green/0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Product Line Section - Side by Side with Slide Up Effect */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-white dark:bg-gray-800 py-16 md:py-20 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
              Product line
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white mb-4 transition-colors">
              UPVC pipe, in <span className="text-primary-green">two builds</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The same A-style socketed joint, produced in the finish your project calls for.
            </p>
          </motion.div>

          {/* Products Grid - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Image Container - Adjusted to show image clearly */}
                <div className={`relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br ${product.imageBg} p-8 flex items-center justify-center`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tag Overlay */}
                  <span className={`absolute top-4 left-4 ${product.tagColor} text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider z-10 shadow-md`}>
                    {product.tag}
                  </span>

                  {/* Gradient Overlay - Much lighter, just for bottom text contrast if needed */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent z-0 pointer-events-none"></div>

                  {/* Info Card - Slides up from bottom on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white/40 dark:bg-gray-900/60 backdrop-blur-xl p-6 md:p-8 rounded-t-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t border-white/20 dark:border-gray-500/20"
                    initial={{ y: "100%" }}
                    animate={{
                      y: hoveredProduct === product.id ? "0%" : "100%"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-inter font-bold text-primary-navy dark:text-white drop-shadow-md">
                        {product.name}
                      </h3>

                      <p className="text-sm md:text-base text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1.5 bg-white/50 dark:bg-black/30 border border-primary-navy/20 dark:border-white/20 text-primary-navy dark:text-white rounded-full text-sm font-semibold font-mono backdrop-blur-md">PN4</span>
                        <span className="px-4 py-1.5 bg-white/50 dark:bg-black/30 border border-primary-navy/20 dark:border-white/20 text-primary-navy dark:text-white rounded-full text-sm font-semibold font-mono backdrop-blur-md">PN6</span>
                        <span className="px-4 py-1.5 bg-white/50 dark:bg-black/30 border border-primary-navy/20 dark:border-white/20 text-primary-navy dark:text-white rounded-full text-sm font-semibold font-mono backdrop-blur-md">PN10</span>
                        <span className="px-4 py-1.5 bg-white/50 dark:bg-black/30 border border-primary-navy/20 dark:border-white/20 text-primary-navy dark:text-white rounded-full text-sm font-semibold font-mono backdrop-blur-md">PN16</span>
                      </div>

                      <div className="flex gap-6 pt-3 border-t border-gray-800/20 dark:border-white/20">
                        <div>
                          <div className="font-bold text-primary-navy dark:text-white text-sm">50–250mm</div>
                          <span className="text-xs text-gray-800 dark:text-gray-200 font-medium">diameter</span>
                        </div>
                        <div>
                          <div className="font-bold text-primary-navy dark:text-white text-sm">A-style</div>
                          <span className="text-xs text-gray-800 dark:text-gray-200 font-medium">socket joint</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Specifications Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-primary-navy dark:border-white text-primary-navy dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-navy hover:text-white dark:hover:bg-white dark:hover:text-primary-navy transition-all duration-300"
            >
              See full specifications
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden py-16 md:py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="relative bg-primary-navy dark:bg-gray-900 rounded-3xl p-10 md:p-16 overflow-hidden border border-transparent dark:border-gray-700">
            {/* Decorative glows */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-green rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
            </div>

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                {/* Heading in brand green */}
                <h2 className="text-2xl md:text-4xl font-inter font-extrabold text-primary-green mb-3">
                  Sourcing pipe for a project?
                </h2>
                {/* Description in white (not blue) */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Tell us your pressure class, diameter, and quantity — our technical team will confirm availability and lead time.
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
      </motion.section>
    </>
  );
};

export default Hero;