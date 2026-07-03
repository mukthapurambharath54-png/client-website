import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Trophy } from 'lucide-react';
import { awards } from '../../data/mock';

const AwardsCarousel = ({ heading = true }) => {
  const [idx, setIdx] = useState(0);
  const total = awards.length;

  const prev = () => setIdx((p) => (p - 1 + total) % total);
  const next = () => setIdx((p) => (p + 1) % total);

  const item = awards[idx];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {heading && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 text-blue-700 text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-0.5 bg-blue-700 rounded-full" />
              Awards &amp; Media
              <span className="w-8 h-0.5 bg-blue-700 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
              Recognized for Excellence in Pharmaceutical Distribution
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Zenex International has been recognized by leading healthcare and industry publications for its commitment to quality, ethical business practices, and specialty pharmaceutical distribution.
            </p>
          </div>
        )}

        <div className="relative">
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2"
              >
                <div className="aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      <Trophy className="w-3.5 h-3.5" /> {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight">{item.title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous award"
              className="inline-flex items-center gap-2 text-[#0a2540] font-semibold hover:text-emerald-600 transition-colors"
            >
              <span className="w-10 h-10 grid place-items-center rounded-full border border-slate-300 group-hover:border-emerald-500">
                <ArrowLeft className="w-4 h-4" />
              </span>
              BACK
            </button>

            <div className="flex items-center gap-2">
              {awards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to award ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next award"
              className="inline-flex items-center gap-2 text-[#0a2540] font-semibold hover:text-emerald-600 transition-colors"
            >
              NEXT
              <span className="w-10 h-10 grid place-items-center rounded-full border border-slate-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCarousel;
