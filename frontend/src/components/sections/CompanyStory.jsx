import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';

const CompanyStory = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">Our Commitment</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
              Delivering Specialty Medicines with Precision, Quality &amp; Care
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-2xl">
              Our distribution network is designed to ensure uninterrupted access to specialty pharmaceuticals, critical care medicines, vaccines, and biologics. Through advanced infrastructure and a customer-focused approach, we help healthcare providers deliver better patient outcomes.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Advanced cold-chain and temperature-controlled logistics',
                'Trusted partner for hospitals, healthcare institutions, and medical professionals',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#0a2540] p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500 grid place-items-center">
                  <Award className="w-6 h-6" />
                </div>
                <p className="text-emerald-300 font-semibold">20+ Years</p>
              </div>
              <h3 className="text-3xl font-bold leading-tight">Our journey began 20 years ago</h3>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm">
                Built on credibility, ethical practices, and lasting relationships. Today we serve healthcare providers across Bengaluru and Karnataka.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-2 bg-white text-[#0a2540] font-semibold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors"
              >
                Read our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
