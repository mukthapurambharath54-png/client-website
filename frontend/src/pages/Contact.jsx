import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../data/mock';

// Google Maps embed URL — encoded query for the Zenex International location.
const MAP_QUERY = encodeURIComponent(
  'Zenex International, 77/K, 6th Main Rd, Agrahara Dasarahalli, Rajajinagar, Bengaluru, Karnataka 560079'
);
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const inputCls =
    'w-full rounded-xl border border-blue-100 bg-blue-50/40 px-5 py-4 text-[15px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition';

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Same webhook fallback pattern used by Register.
      const webhookUrl = process.env.REACT_APP_REGISTER_WEBHOOK_URL;
      const payload = {
        registrationType: 'Contact Inquiry',
        submittedAt: new Date().toISOString(),
        ...form,
      };
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
      } else {
        const existing = JSON.parse(localStorage.getItem('zenex_contacts') || '[]');
        existing.push(payload);
        localStorage.setItem('zenex_contacts', JSON.stringify(existing));
      }
      toast({
        title: 'Message sent',
        description: 'Thank you! Our team will get back to you within 24 hours.',
      });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      toast({ title: 'Something went wrong', description: 'Please try again in a moment.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        title="Contact"
        image="/5.jpg"
      />

      {/* Form section */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-blue-700 text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-10 h-0.5 bg-blue-700 rounded-full" />
              Contact us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
              Get in Touch with Our Team
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you need specialty medicines, critical care products, cold-chain logistics support, or distribution assistance, our team is ready to help.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={submit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                required
                type="text"
                placeholder="Your Name"
                className={inputCls}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                aria-label="Your Name"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                className={inputCls}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                aria-label="Your Email"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className={inputCls}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              aria-label="Phone Number"
            />
            <textarea
              required
              rows={8}
              placeholder="Tell us about your pharmaceutical requirements..."
              className={`${inputCls} resize-y min-h-[180px]`}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-label="Your Message"
            />
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-700/30"
            >
              {submitting ? 'Sending…' : (<>Send your message <Send className="w-4 h-4" /></>)}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact info cards + Map */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}` },
              { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}` },
              { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
            ].map((it) => {
              const Card = it.href ? 'a' : 'div';
              return (
                <Card
                  key={it.label}
                  {...(it.href ? { href: it.href } : {})}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 transition-colors"
                >
                  <span className="w-11 h-11 grid place-items-center rounded-xl bg-blue-700 text-white shrink-0">
                    <it.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{it.label}</p>
                    <p className="mt-0.5 text-[#0a2540] font-semibold break-words">{it.value}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Address + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
              <div className="flex items-start gap-4">
                <span className="w-11 h-11 grid place-items-center rounded-xl bg-emerald-500 text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Our Office</p>
                  <p className="mt-1 text-[#0a2540] font-semibold leading-relaxed">
                    Zenex International
                  </p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    77/K, 6th Main Rd, Agrahara Dasarahalli,<br />
                    Rajajinagar, Bengaluru, Karnataka 560079,<br />
                    India
                  </p>
                </div>
              </div>
              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Get Directions
              </a>
            </div>
            <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-video lg:aspect-auto lg:min-h-[380px]">
              <iframe
                title="Zenex International location"
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
