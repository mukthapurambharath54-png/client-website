import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, PieChart } from 'lucide-react';

const WhyChooseZenex = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — image with floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
                alt="Zenex International leadership"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto flex gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 sm:w-40 bg-blue-700 text-white rounded-2xl p-5 shadow-lg"
              >
                <TrendingUp className="w-6 h-6 mb-3" />
                <p className="text-3xl sm:text-4xl font-bold leading-none">3000+</p>
                <p className="mt-2 text-sm font-medium">Customers Served</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex-1 sm:w-40 bg-blue-700 text-white rounded-2xl p-5 shadow-lg"
              >
                <PieChart className="w-6 h-6 mb-3" />
                <p className="text-3xl sm:text-4xl font-bold leading-none">20+</p>
                <p className="mt-2 text-sm font-medium">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-8 h-0.5 bg-blue-700 rounded-full" />
              Why Choose Zenex
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-[1.1]">
              Reliable Pharmaceutical Distribution Backed by Quality &amp; Trust
            </h2>

            <div className="mt-8">
              <p className="text-lg font-semibold text-[#0a2540]">A Legacy of Trust &amp; Excellence</p>
              <p className="mt-2 italic text-slate-600">
                Serving the healthcare community across Bengaluru and Karnataka for over 22 years.
              </p>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed">
              With over two decades of experience, Zenex International has earned the trust of healthcare providers across Bengaluru and Karnataka. Our commitment to quality service, reliable distribution, and healthcare excellence has enabled us to build lasting partnerships and support better patient care through dependable access to pharmaceutical products.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZenex;
