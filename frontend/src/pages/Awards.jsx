import React from 'react';
import { Trophy } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import AwardsCarousel from '../components/sections/AwardsCarousel';

const Awards = () => (
  <>
    <PageHero
      title="Awards & Media Recognition"
      subtitle="At Zenex International, our journey has been defined by a commitment to quality, reliability, and service excellence — recognized by industry forums and publications."
      image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1920&q=80"
    />

    <AwardsCarousel />

    <section className="pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <Trophy className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0a2540]">Continuing Our Legacy</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            These recognitions inspire us to continue delivering excellence and supporting hospitals, healthcare institutions, pharmacies, and patients with reliable access to essential and specialty medicines.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Awards;
