// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      number: '01',
      title: 'Manufacturing we control end to end',
      description: 'Production runs at our own facility in the Tatek Industry Zone, so pressure-class tolerance and joint fit stay consistent across every batch.'
    },
    {
      number: '02',
      title: 'Distribution that keeps sites moving',
      description: 'Our Addis Ababa office coordinates stock and delivery, so contractors and distributors aren\'t left waiting on a shipment.'
    },
    {
      number: '03',
      title: 'Technical support, not just a price list',
      description: 'We help specify the right PN class and diameter before an order is placed, and stay reachable once pipe is on site.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Hero - About Header */}
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
              <span className="text-white/60">About</span>
              <span className="text-white/30">/</span>
              <span>Yadenno Plastics PLC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-extrabold leading-[1.15] mb-5 text-white" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
              Built in Sheger City, <br className="hidden sm:inline" />
              <span className="text-primary-green" style={{ textShadow: '0 2px 20px rgba(121,182,47,0.3)' }}>supplying all of Ethiopia</span>
            </h1>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium" style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}>
              Yadenno Plastics PLC manufactures UPVC pipe systems for water supply and drainage, 
              from raw resin through to a socketed pipe ready for site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content - Values & Managing Director */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 transition-colors duration-300">
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left - Values List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary-green/10 dark:bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-green inline-block"></span>
                Our approach
              </div>

              <div className="space-y-8">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-5 group"
                  >
                    <span className="font-mono font-bold text-2xl text-primary-green opacity-40 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-inter font-bold text-primary-navy dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Managing Director Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:mt-8"
            >
              <div className="relative bg-primary-navy dark:bg-gray-800 rounded-3xl p-8 md:p-10 overflow-hidden border border-white/10 dark:border-gray-700">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-green rounded-full blur-3xl"></div>
                </div>
                
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle at 20px 20px, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>

                <div className="relative z-10">
                  <div className="inline-block bg-primary-green/20 text-primary-green px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider mb-4">
                    Managing Director
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-inter font-extrabold text-white mb-3">
                    Fisseha K/mariam
                  </h3>
                  
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                    Leads Yadenno Plastics PLC's manufacturing and distribution operations, from the factory floor in Sheger City to project sites across Ethiopia.
                  </p>
                  
                  <div className="border-t border-white/10 pt-5 space-y-2">
                    <p className="font-mono text-sm text-blue-200/80">
                      <span className="opacity-60">📞</span> +251 911 146 155
                    </p>
                    <p className="font-mono text-sm text-blue-200/80 break-all">
                      <span className="opacity-60">✉️</span> fisseha@nanfisha.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
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
              Where we work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-extrabold text-primary-navy dark:text-white mb-4 transition-colors">
              Two sites, <span className="text-primary-green">one supply chain</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Manufacturing stays close to raw material and logistics in Sheger City; our office in Addis Ababa handles orders and coordination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: 'Factory',
                title: 'Sheger City',
                address: 'Ashewa Meda, Tatek Industry Zone<br />Ethiopia',
                borderColor: 'border-l-4 border-primary-green'
              },
              {
                type: 'Main office',
                title: 'Addis Ababa',
                address: 'Mexico, Sengatera Traders Union Building<br />Ethiopia',
                borderColor: 'border-l-4 border-orange-400'
              }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 ${location.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{location.icon}</span>
                  <div>
                    <div className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                      {location.type}
                    </div>
                    <h4 className="text-2xl font-inter font-bold text-primary-navy dark:text-white mb-2">
                      {location.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: location.address }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                <h2 className="text-2xl md:text-4xl font-inter font-extrabold text-white mb-3">
                  Want to see the pipe range?
                </h2>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                  Check pressure classes and diameters, or get in touch directly with our team.
                </p>
              </div>
              <Link
                to="/products"
                className="bg-primary-green text-primary-navy px-10 py-4 rounded-full font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 whitespace-nowrap flex-shrink-0"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;