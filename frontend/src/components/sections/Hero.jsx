import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroStats } from '../../data/mock';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#0a2540]">
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80"
          alt="Pharmaceutical cold chain warehouse"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 via-[#0a2540]/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Trusted by 3000+ Healthcare Providers
          </div>
          <h1 className="text-white font-bold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            India&rsquo;s Trusted <br className="hidden sm:block" />
            <span className="text-emerald-400">Specialty Pharmaceutical</span> <br className="hidden sm:block" />
            Distribution Partner
          </h1>
          <p className="mt-6 text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            Delivering Critical Care, Specialty Medicines, Vaccines, Nuclear Medicines, and Temperature-Sensitive Pharmaceuticals across Bangalore with speed, reliability, and uncompromising quality.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0a2540] hover:bg-slate-100 font-semibold px-6 py-3.5 rounded-full transition-all hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 font-semibold px-6 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-16 sm:mt-24 border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {[...heroStats, ...heroStats, ...heroStats].map((stat, i) => (
            <div key={i} className="flex items-center gap-12 px-8 text-slate-200/80 text-sm sm:text-base font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
