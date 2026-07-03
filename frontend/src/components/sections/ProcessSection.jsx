import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { processSteps, companyInfo } from '../../data/mock';

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">Our process</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Our streamlined distribution process ensures specialty medicines reach healthcare providers efficiently while maintaining the highest standards of quality, compliance, and cold-chain integrity.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 bg-[#0a2540] hover:bg-blue-900 text-white font-semibold px-5 py-3 rounded-full transition-all hover:shadow-lg"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-[#0a2540]">{companyInfo.customers}</p>
                <p className="text-sm text-slate-500 mt-1">Customers Served</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-[#0a2540]">{companyInfo.yearsExperience}</p>
                <p className="text-sm text-slate-500 mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl p-6 border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all ${i % 2 === 1 ? 'sm:translate-y-8' : ''}`}
              >
                <p className="text-emerald-600 font-bold text-2xl">{step.number}</p>
                <h3 className="text-xl font-semibold text-[#0a2540] mt-2">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
