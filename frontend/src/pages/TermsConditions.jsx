import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 bg-slate-50">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="bg-white shadow-xl border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Terms &amp; Conditions</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Zenex International</h1>
              <p className="text-sm text-slate-500">Please read these terms carefully before using our platform.</p>
            </div>

            <section className="space-y-6 text-slate-700">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
                <p className="mt-3">By accessing or using the Zenex International website and services, you agree to comply with these Terms &amp; Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our services.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">2. Account Registration</h2>
                <p className="mt-3">You are responsible for providing accurate and complete information when creating an account. You agree to keep your account credentials secure and notify us immediately if you suspect any unauthorised access.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">3. Use of Services</h2>
                <p className="mt-3">Zenex International provides pharmaceutical distribution services to registered customers. Use of the website is subject to compliance with applicable pharmaceutical laws, including the Drugs and Cosmetics Act, 1940, and related regulations.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">4. Orders and Payments</h2>
                <p className="mt-3">All orders placed through our platform are subject to acceptance, availability, and verification. Payment terms are governed by the selected payment gateway and your agreed billing arrangements with Zenex International.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">5. Returns and Refunds</h2>
                <p className="mt-3">Returns, refunds, and credit notes are processed according to our published policy. A credit note may be issued for eligible returns, and direct refunds may be made at the sole discretion of Zenex International.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">6. Privacy</h2>
                <p className="mt-3">Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">7. Changes to Terms</h2>
                <p className="mt-3">Zenex International may update these Terms &amp; Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
                <p className="mt-3">For questions regarding these Terms &amp; Conditions, please contact our support team through the website.</p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsConditions;
