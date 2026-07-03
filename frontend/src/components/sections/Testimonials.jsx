import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/mock';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            “Trusted by Healthcare Professionals”
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            For over two decades, Zenex International has supported hospitals, healthcare institutions, doctors, and procurement teams with reliable pharmaceutical distribution, specialty medicines, and cold-chain solutions.
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
            >
              <div className="lg:col-span-2 flex flex-col items-center text-center">
                <div className="relative">
                  <img
                    src={testimonials[idx].image}
                    alt={testimonials[idx].name}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-emerald-500 grid place-items-center text-white">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-6 font-semibold text-[#0a2540] text-lg">{testimonials[idx].name}</p>
                <p className="text-sm text-slate-500">{testimonials[idx].role}</p>
                <div className="flex gap-0.5 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="lg:col-span-3">
                <p className="text-xl sm:text-2xl text-[#0a2540] leading-relaxed font-medium">
                  &ldquo;{testimonials[idx].quote}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-100 grid place-items-center text-blue-700 font-bold">G</div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Google Rating</p>
              <p className="text-sm font-bold text-[#0a2540] flex items-center gap-1">
                5.0 <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
