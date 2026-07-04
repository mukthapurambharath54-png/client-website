import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CommitmentBand = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#0a2540] overflow-hidden p-8 sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Supporting Healthcare Providers with Reliable Pharmaceutical Supply Solutions…
              </h2>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-xl hover:shadow-emerald-500/30"
              >
                Talk to Our Experts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/women3.png"
                  alt="Business meeting"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">Sales this month</p>
                  <p className="text-2xl font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="w-5 h-5" /> +30%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentBand;
