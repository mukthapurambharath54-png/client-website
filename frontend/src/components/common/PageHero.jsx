import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, image }) => (
  <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0a2540] overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/80 via-[#0a2540]/70 to-[#0a2540]" />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-slate-200 max-w-2xl mx-auto text-base sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
