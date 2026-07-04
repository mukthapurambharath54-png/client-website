import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../../data/mock';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a2540] text-slate-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="inline-block rounded-xl bg-white p-3">
            <Logo size="md" />
          </div>
          <p className="mt-5 text-slate-300 leading-relaxed text-[15px] max-w-md">
            India&rsquo;s trusted specialty pharmaceutical distribution partner — delivering critical care, vaccines, nuclear medicines, and cold-chain logistics across Bengaluru.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
              <Phone className="w-4 h-4 text-emerald-400" /> {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white">
              <Mail className="w-4 h-4 text-emerald-400" /> {companyInfo.email}
            </a>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400" /> {companyInfo.address}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
            <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
            <li><Link to="/products" className="text-slate-300 hover:text-white">Products</Link></li>
            <li><Link to="/awards" className="text-slate-300 hover:text-white">Awards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/blog" className="text-slate-300 hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
            <li><Link to="/register" className="text-slate-300 hover:text-white">Register</Link></li>
            <li><Link to="/login" className="text-slate-300 hover:text-white">Login</Link></li>
            <li><Link to="/terms-and-conditions" className="text-slate-300 hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="text-slate-300 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Stay connected</h4>
          <p className="text-sm text-slate-300 mb-4">Updates on healthcare logistics and industry insights.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
            }}
            className="flex bg-white/10 rounded-full p-1 mb-5"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-400 px-4 py-2 outline-none"
            />
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full">Join</button>
          </form>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-emerald-500 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {year} Zenex International. All rights reserved.</p>
          <p>Designed with care for healthcare partners.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
