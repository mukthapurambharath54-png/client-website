import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Logo from '../components/layout/Logo';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: true });

  const submit = (e) => {
    e.preventDefault();
    toast({ title: 'Welcome back', description: 'You are signed in to your Zenex account.' });
    navigate('/');
  };

  const inputCls = 'w-full rounded-xl border border-slate-200 bg-white pl-11 pr-10 py-3 text-sm focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100';

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50">
      <div className="relative hidden lg:flex flex-col justify-between bg-[#0a2540] text-white p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/80 to-[#0a2540]" />
        </div>
        <div className="relative">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <div className="mt-12 inline-block bg-white rounded-xl p-3">
            <Logo size="md" />
          </div>
          <h2 className="mt-10 text-4xl font-bold leading-tight">Welcome back to Zenex International.</h2>
          <p className="mt-4 text-slate-300 max-w-md leading-relaxed">
            Sign in to manage orders, track shipments, and access specialty pharmaceutical supplies.
          </p>
        </div>
        <div className="relative text-sm text-slate-300">&copy; {new Date().getFullYear()} Zenex International</div>
      </div>

      <div className="flex items-center justify-center px-6 sm:px-10 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <div className="lg:hidden mb-6">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 text-sm"><ArrowLeft className="w-4 h-4" /> Back to home</Link>
            <div className="mt-4"><Logo size="md" /></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a2540]">Sign in</h1>
          <p className="mt-2 text-slate-600">Enter your credentials to access your account.</p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <div className="relative mt-1">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} placeholder="you@business.com" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs text-blue-700 hover:underline">Forgot password?</a>
              </div>
              <div className="relative mt-1">
                <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type={showPwd ? 'text' : 'password'} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputCls} placeholder="••••••••" />
                <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
              <input type="checkbox" checked={form.remember} onChange={(e) => setForm({ ...form, remember: e.target.checked })} className="w-4 h-4 accent-emerald-500" />
              Remember me on this device
            </label>
            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/30">
              Sign in
            </button>
          </form>
          <p className="mt-8 text-sm text-slate-600 text-center">
            Don&rsquo;t have an account? <Link to="/register" className="font-semibold text-blue-700 hover:underline">Register here</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
