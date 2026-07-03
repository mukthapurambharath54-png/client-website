import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
    <div className="text-center">
      <p className="text-7xl font-bold text-[#0a2540]">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-[#0a2540]">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-600">
        <Home className="w-4 h-4" /> Go home
      </Link>
    </div>
  </div>
);

export default NotFound;
