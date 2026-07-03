import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { strengths } from '../../data/mock';

const Strengths = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">Our Strengths</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            The Foundation of Reliable Pharmaceutical Distribution
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Our strength lies in combining quality-focused operations, advanced cold-chain infrastructure, technology-driven processes, and responsive logistics to ensure uninterrupted access to specialty medicines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((item, i) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.CheckCircle;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to="/about"
                  className="group block h-full bg-white rounded-2xl p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 grid place-items-center text-blue-700 group-hover:bg-emerald-500 group-hover:text-white transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a2540] mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
