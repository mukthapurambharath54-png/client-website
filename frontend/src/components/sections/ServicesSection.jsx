import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/mock';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">Our services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight leading-tight">
              We offer a wide range of services
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-md">
            Delivering specialty pharmaceuticals, critical care medicines, vaccines, and cold-chain logistics solutions to healthcare providers across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                to={`/services`}
                className="group block rounded-3xl overflow-hidden bg-slate-50 hover:bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#0a2540] leading-snug">{service.title}</h3>
                  <span className="shrink-0 w-9 h-9 rounded-full bg-white grid place-items-center text-[#0a2540] group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
