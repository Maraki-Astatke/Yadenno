// src/pages/Products.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const products = [
    {
      id: 'pressure',
      name: 'UPVC Pressure Pipe',
      description: 'Manufactured for potable and irrigation water-supply lines where a dependable pressure rating is non-negotiable. The A-style socket end forms a tight, solvent-welded or gasketed joint on site, cutting installation time on long runs.',
      image: '/pvc-orange.jpeg',
      tag: 'PRESSURE LINE',
      tagColor: 'bg-primary-navy',
      imageBg: 'from-primary-green/5 to-primary-navy/5',
      pnClasses: ['PN4', 'PN6', 'PN10', 'PN16'],
      specs: [
        { label: '50–250mm', detail: 'diameter' },
        { label: 'A-style', detail: 'joint type' },
        { label: 'Orange', detail: 'line finish' }
      ]
    },
    {
      id: 'drainage',
      name: 'UPVC Drainage Pipe',
      description: 'Built for gravity drainage and sewage networks, sharing the same joint geometry and diameter range as our pressure line, so a single supplier can cover both sides of a site\'s plumbing schedule.',
      image: '/pvc-grey.jpeg',
      tag: 'DRAINAGE LINE',
      tagColor: 'bg-gray-700',
      imageBg: 'from-gray-100 to-gray-200/50',
      pnClasses: ['PN4', 'PN6', 'PN10', 'PN16'],
      specs: [
        { label: '50–250mm', detail: 'diameter' },
        { label: 'A-style', detail: 'joint type' },
        { label: 'Grey', detail: 'line finish' }
      ]
    }
  ];

  const diagrams = [
    {
      id: '01',
      title: 'A-style socket joint',
      description: 'Each length ends in a moulded socket sized to the next pipe\'s spigot end, keeping alignment straight along the run.',
      svg: (
        <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <rect x="20" y="70" width="110" height="26" fill="none" stroke="#EAF0FF" strokeWidth="2"/>
          <path d="M130 60 L160 60 L172 70 L172 96 L160 106 L130 106 Z" fill="#79B62F" fillOpacity=".25" stroke="#79B62F" strokeWidth="2"/>
          <rect x="172" y="76" width="70" height="14" fill="none" stroke="#EAF0FF" strokeWidth="2"/>
          <line x1="20" y1="120" x2="130" y2="120" stroke="#9FB2E8" strokeWidth="1"/>
          <line x1="20" y1="114" x2="20" y2="126" stroke="#9FB2E8" strokeWidth="1"/>
          <line x1="130" y1="114" x2="130" y2="126" stroke="#9FB2E8" strokeWidth="1"/>
          <text x="55" y="136" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">SPIGOT END</text>
          <line x1="130" y1="42" x2="172" y2="42" stroke="#9FE06B" strokeWidth="1"/>
          <line x1="130" y1="36" x2="130" y2="48" stroke="#9FE06B" strokeWidth="1"/>
          <line x1="172" y1="36" x2="172" y2="48" stroke="#9FE06B" strokeWidth="1"/>
          <text x="128" y="30" fill="#9FE06B" fontFamily="IBM Plex Mono" fontSize="9">SOCKET</text>
          <text x="180" y="136" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">NEXT PIPE</text>
        </svg>
      )
    },
    {
      id: '02',
      title: 'Diameter range, to scale',
      description: 'Common call-outs across our 50–250mm range, drawn at relative size so you can gauge fit at a glance.',
      svg: (
        <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <line x1="20" y1="140" x2="240" y2="140" stroke="#2A3B7A" strokeWidth="1"/>
          <circle cx="45" cy="126" r="10" fill="none" stroke="#C96A2E" strokeWidth="2"/>
          <circle cx="90" cy="118" r="18" fill="none" stroke="#79B62F" strokeWidth="2"/>
          <circle cx="150" cy="108" r="28" fill="none" stroke="#EAF0FF" strokeWidth="2"/>
          <circle cx="215" cy="92" r="44" fill="none" stroke="#9FB2E8" strokeWidth="2"/>
          <text x="34" y="152" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">50</text>
          <text x="80" y="152" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">110</text>
          <text x="140" y="152" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">160</text>
          <text x="200" y="152" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">250mm</text>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Wall thickness by PN class',
      description: 'Illustrative comparison only — higher PN classes are built with thicker walls for higher working pressure. Ask our team for exact figures per size.',
      svg: (
        <svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <line x1="30" y1="130" x2="240" y2="130" stroke="#2A3B7A" strokeWidth="1"/>
          <rect x="45" y="118" width="28" height="12" fill="#EAF0FF" fillOpacity=".5"/>
          <rect x="100" y="106" width="28" height="24" fill="#79B62F" fillOpacity=".55"/>
          <rect x="155" y="90" width="28" height="40" fill="#79B62F" fillOpacity=".8"/>
          <rect x="210" y="66" width="28" height="64" fill="#C96A2E"/>
          <text x="48" y="144" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">PN4</text>
          <text x="103" y="144" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">PN6</text>
          <text x="156" y="144" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">PN10</text>
          <text x="208" y="144" fill="#9FB2E8" fontFamily="IBM Plex Mono" fontSize="9">PN16</text>
        </svg>
      )
    }
  ];

  const specData = [
    { pn: 'PN4', use: 'Low-pressure supply & gravity drainage', range: '50–250mm', joint: 'A-style socket' },
    { pn: 'PN6', use: 'Standard water distribution', range: '50–250mm', joint: 'A-style socket' },
    { pn: 'PN10', use: 'Municipal & irrigation mains', range: '50–250mm', joint: 'A-style socket' },
    { pn: 'PN16', use: 'High-pressure supply lines', range: '50–250mm', joint: 'A-style socket' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero - Products Header */}
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
              <span className="text-white/60">Products</span>
              <span className="text-white/30">/</span>
              <span>UPVC Pipe Systems</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-extrabold leading-[1.15] mb-5 text-white" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
              UPVC pipe, <br className="hidden sm:inline" />
              <span className="text-primary-green" style={{ textShadow: '0 2px 20px rgba(121,182,47,0.3)' }}>sized and rated for the job</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              One socket-joint system, produced across four pressure classes and a 50–250mm diameter span, in pressure and drainage finishes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section - Side by Side with Slide Up Effect (Same as Hero) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 transition-colors duration-300">
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
                {/* Image Container */}
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

                  {/* Gradient Overlay */}
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
                        {product.pnClasses.map((pn) => (
                          <span key={pn} className="px-4 py-1.5 bg-white/50 dark:bg-black/30 border border-primary-navy/20 dark:border-white/20 text-primary-navy dark:text-white rounded-full text-sm font-semibold font-mono backdrop-blur-md">
                            {pn}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6 pt-3 border-t border-gray-800/20 dark:border-white/20">
                        {product.specs.map((spec, idx) => (
                          <div key={idx}>
                            <div className="font-bold text-primary-navy dark:text-white text-sm">{spec.label}</div>
                            <span className="text-xs text-gray-800 dark:text-gray-200 font-medium">{spec.detail}</span>
                          </div>
                        ))}
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
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-navy dark:border-white text-primary-navy dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-navy hover:text-white dark:hover:bg-white dark:hover:text-primary-navy transition-all duration-300"
            >
              Request a quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technical Reference Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-800 py-16 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
              Technical reference
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white mb-4 transition-colors">
              How the system <span className="text-primary-green">fits together</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A quick look at the joint, the size range, and how wall thickness scales with pressure class.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {diagrams.map((diagram, index) => (
              <motion.div
                key={diagram.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative bg-primary-navy dark:bg-gray-800 p-6">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-40 h-40 bg-primary-green rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10">
                    {diagram.svg}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-mono font-semibold text-primary-green dark:text-primary-green uppercase tracking-wider mb-2">
                    Diagram {diagram.id}
                  </div>
                  <h4 className="text-lg font-inter font-bold text-primary-navy dark:text-white mb-2">
                    {diagram.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {diagram.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 transition-colors duration-300">
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
              Full specification
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white mb-4 transition-colors">
              Pressure classes <span className="text-primary-green">at a glance</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Match the PN class to your system's working pressure. Our technical team can confirm the right selection for your project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">PN Class</th>
                    <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Typical use</th>
                    <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Diameter range</th>
                    <th className="px-6 py-4 text-left text-xs font-mono font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">Joint</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {specData.map((row, index) => (
                    <motion.tr
                      key={row.pn}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="hover:bg-primary-green/5 dark:hover:bg-primary-green/10 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-bold font-mono text-primary-navy dark:text-primary-green">
                        {row.pn}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {row.use}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {row.range}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {row.joint}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                <h2 className="text-2xl md:text-4xl font-inter font-extrabold text-primary-green mb-3">
                  Need a specific size or quantity?
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Send us your diameter, PN class and volume — we'll confirm stock and delivery from our Sheger City factory.
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

export default Products;