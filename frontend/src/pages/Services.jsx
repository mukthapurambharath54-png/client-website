import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { services } from '../data/mock';

const Services = () => (
  <>
    <PageHero
      title="Our Services"
      subtitle="Delivering specialty pharmaceuticals, critical care medicines, vaccines, and cold-chain logistics across Bengaluru."
      image="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1920&q=80"
    />
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden hover:bg-white hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0a2540]">{s.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-emerald-700 font-semibold text-sm hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
