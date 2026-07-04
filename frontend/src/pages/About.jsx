import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Heart, Quote, ArrowRight, Sparkles, Users } from 'lucide-react';
import PageHero from '../components/common/PageHero';

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust',
    desc: 'Built on 22 years of credibility, ethical practices, and lasting relationships.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    desc: 'Delivering reliable healthcare solutions with uncompromising standards.',
  },
  {
    icon: Heart,
    title: 'Accessibility',
    desc: 'Enhancing access to quality healthcare products and services across communities.',
  },
];

const About = () => (
  <>
    <PageHero
      title="About Us"
      subtitle="More than two decades of delivering quality pharmaceutical distribution and supporting healthcare providers with reliability, integrity, and commitment."
      image="/women.png"
    />

    {/* Founder section */}
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">
            Zenex International
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            Meet Our Founder
          </h2>
          <span className="block mt-4 mx-auto w-14 h-1 bg-emerald-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100">
              <img
                src="/women2.png"
                alt="V V Mannapur — Founder, Zenex International"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a2540] via-[#0a2540]/70 to-transparent text-white">
                <p className="text-xl font-bold">V V Mannapur</p>
                <p className="text-sm text-slate-200">Founder, Zenex International</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight">
              A visionary entrepreneur and healthcare leader
            </h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Zenex was founded by <strong>V V Mannapur</strong>, a visionary entrepreneur and healthcare leader driven by a mission to make healthcare more accessible, efficient, and patient-centric.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              With extensive experience and a deep understanding of the pharmaceutical and healthcare ecosystem, V V Mannapur recognized the need for innovative solutions that bridge the gap between healthcare providers, pharmacies, and patients. His insights into the industry&rsquo;s evolving needs and challenges laid the foundation for Zenex.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Under his leadership, Zenex has grown into a trusted healthcare organization committed to delivering quality-driven, technology-enabled, and customer-focused healthcare solutions. His ability to combine industry expertise with innovation continues to drive the organization&rsquo;s growth and impact.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              V V Mannapur believes that healthcare is not merely a business, but a responsibility toward society. This philosophy guides Zenex in its mission to create sustainable healthcare solutions that improve patient outcomes and support pharmacies, hospitals, clinics, and healthcare professionals.
            </p>
          </motion.div>
        </div>

        {/* Values row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:shadow-lg rounded-2xl p-7 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 grid place-items-center text-white mb-5">
                <v.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold text-[#0a2540]">{v.title}</h4>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing paragraph + quote */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-2xl p-8"
          >
            <p className="text-slate-700 leading-relaxed">
              V V Mannapur continues to lead Zenex with a long-term vision of transforming healthcare accessibility through innovation, ethical practices, and customer-centric solutions &mdash; creating meaningful impact across the healthcare ecosystem.
            </p>
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 relative bg-[#0a2540] text-white rounded-2xl p-8 flex flex-col justify-center"
          >
            <Quote className="w-8 h-8 text-emerald-400 mb-3" />
            <p className="text-lg leading-relaxed italic">
              &ldquo;For over 22 years, our commitment has remained unchanged &mdash; to serve healthcare with trust, quality, and integrity.&rdquo;
            </p>
            <p className="mt-4 text-sm text-slate-300">— V V Mannapur, Founder</p>
          </motion.blockquote>
        </div>
      </div>
    </section>

    {/* Our Journey */}
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] leading-tight">
            Two decades of trusted pharmaceutical distribution
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            More than two decades of delivering quality pharmaceutical distribution and supporting healthcare providers with reliability, integrity, and commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/women.png"
              alt="Zenex International team meeting"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 leading-relaxed">
              What started as a commitment to delivering quality pharmaceutical products has evolved into a trusted healthcare distribution network serving hospitals, healthcare institutions, pharmacies, doctors, and patients. For more than two decades, Zenex International has played an important role in connecting pharmaceutical manufacturers with healthcare providers and ensuring the availability of essential and specialty medicines.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Every milestone, recognition, and achievement in our journey reflects our dedication to excellence, integrity, and customer service. Through continuous growth, strong partnerships, and an unwavering focus on healthcare support, we have earned the trust of our customers and industry partners.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              As we continue to grow, our mission remains unchanged &mdash; to ensure reliable access to quality healthcare products while contributing to better healthcare outcomes across the communities we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider mb-3">
            Vision &amp; Mission
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] leading-tight">
            What drives us forward
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-700 grid place-items-center text-white mb-6">
              <Award className="w-6 h-6" />
            </div>
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-wider">Our Values / Vision</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0a2540] leading-tight">
              Leading specialty pharma distribution in India
            </h3>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Our vision is to be a leading specialty pharmaceutical distributor in India and to become a significant domestic player by providing high quality, affordable and innovative solutions in pharma distribution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a2540] rounded-3xl p-8 sm:p-10 text-white"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500 grid place-items-center text-white mb-6">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-emerald-300 text-sm font-semibold uppercase tracking-wider">Our Mission</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
              Total customer satisfaction and market leadership
            </h3>
            <p className="mt-5 text-slate-300 leading-relaxed">
              We shall provide total customer satisfaction and achieve leadership in specialty pharma distribution market, products and services across India, through excellence in technology, based on world-class high ethical standards in our practices.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#0a2540] to-blue-900 p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to partner with Zenex?</h3>
            <p className="mt-2 text-slate-300 max-w-xl">
              Talk to our team about specialty pharmaceutical supply, cold-chain logistics, and 24/7 critical care support.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Contact Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default About;
