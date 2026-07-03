import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/mock';

const BlogPreview = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">Our blog</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
              Explore insights and stay ahead
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#0a2540] font-semibold hover:text-emerald-600">
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-slate-500">{post.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0a2540] leading-snug group-hover:text-blue-700">{post.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
