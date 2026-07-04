import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/common/PageHero';
import { blogPosts } from '../data/mock';

const Blog = () => (
  <>
    <PageHero
      title="Insights & Stories"
      subtitle="Articles, ideas, and updates from the Zenex team on pharmaceutical distribution and healthcare logistics."
      image="/1.jpg"
    />
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">{post.category}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#0a2540] leading-snug group-hover:text-blue-700">{post.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
