import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { products } from '../data/mock';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

const Products = () => {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = products.filter(
    (p) => (cat === 'All' || p.category === cat) && p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Comprehensive specialty pharmaceutical portfolio supporting hospitals, healthcare institutions, and patients."
        image="/2.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cat === c ? 'bg-[#0a2540] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full sm:w-72 pl-10 pr-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:border-blue-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">{p.category}</p>
                  <h3 className="mt-1 text-base font-semibold text-[#0a2540] leading-snug">{p.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
