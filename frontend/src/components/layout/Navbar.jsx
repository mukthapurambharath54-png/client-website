import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data/mock';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`w-full max-w-6xl rounded-full backdrop-blur-xl transition-all duration-300 border ${
          scrolled
            ? 'bg-white/85 border-slate-200 shadow-lg'
            : 'bg-white/70 border-white/40 shadow-md'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Zenex International home">
            <Logo size="md" className="shrink-0" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-full text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'text-blue-900'
                        : 'text-slate-700 hover:text-blue-900'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Login
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-slate-800 hover:bg-slate-100"
              aria-label="Open menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[72px] left-3 right-3 sm:left-6 sm:right-6 bg-white border border-slate-200 rounded-2xl shadow-xl p-3"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-[15px] font-medium ${
                        isActive ? 'bg-blue-50 text-blue-900' : 'text-slate-700 hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-3 rounded-xl"
                >
                  Login <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
