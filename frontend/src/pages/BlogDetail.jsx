import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/mock';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <article className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-700 font-medium mb-8 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">{post.category}</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#0a2540] leading-tight">{post.title}</h1>
        <img src={post.image} alt={post.title} className="mt-8 w-full aspect-[16/9] object-cover rounded-2xl" />
        <div className="mt-10 prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 leading-relaxed">{post.excerpt}</p>
          <p className="mt-5 text-slate-700 leading-relaxed">
            Zenex International continues to invest in cutting-edge cold chain infrastructure, technology, and partnerships to support healthcare providers. Through over two decades of work, we have learned that consistent execution, ethical practice, and customer empathy are what build lasting trust.
          </p>
          <p className="mt-5 text-slate-700 leading-relaxed">
            In a rapidly evolving healthcare landscape, our focus remains on enabling reliable access to specialty medicines, vaccines, and critical care products — ensuring uninterrupted patient care for the communities we serve.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
