import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 bg-slate-50">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="bg-white shadow-xl border border-slate-200 rounded-3xl p-8 sm:p-10">
            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">ZENEX INTERNATIONAL</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-500">Effective Date: July 1, 2025 | Last Updated: June 2025</p>
            </div>

            <section className="space-y-6 text-slate-700">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
                <p className="mt-3">At Zenex International, we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and protect the information you share with us when you visit our website or use our services.</p>
                <p className="mt-3">Zenex International is an Indian pharmaceutical distribution company engaged in the B2B and B2C distribution of pharmaceutical products, specialty medicines, vaccines, cold-chain products, critical care medicines, oncology medicines, nephrology medicines, and a broad range of healthcare products. We supply medicines and healthcare products to pharmacies, hospitals, doctors, retail medical stores, healthcare institutions, corporate customers, and patients.</p>
                <p className="mt-3">By using our website, creating an account, placing orders, or interacting with us in any way, you agree to the practices described in this Privacy Policy. We encourage you to read this document carefully.</p>
                <p className="mt-3">If you have any questions or concerns, please contact our Data Privacy Team.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">2. Scope of This Policy</h2>
                <p className="mt-3">This Privacy Policy applies to:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>All visitors to the Zenex International website (www.zenexinternational.com)</li>
                  <li>Registered users, including pharmacies, hospitals, doctors, medical retailers, corporate buyers, and individual patients</li>
                  <li>Any person or business entity that submits an enquiry, creates an account, uploads verification documents, places an order, or makes a payment through our platform</li>
                  <li>This policy applies to all online and offline customers.</li>
                </ul>
                <p className="mt-3">This Policy does not apply to third-party websites, payment gateways, or external platforms that may be linked from our website. We encourage you to review the privacy policies of those third parties independently.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">3. Information We Collect</h2>
                <p className="mt-3">We collect information to provide you with a reliable, compliant, and personalised experience on our platform. The information we collect falls into three categories:</p>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">3.1 Information You Provide During Registration</h3>
                  <p className="mt-3">When you create an account on our platform, we collect the following:</p>
                  <ul className="mt-3 list-disc list-inside space-y-2">
                    <li>Full Name</li>
                    <li>Business Name</li>
                    <li>Contact Person Name</li>
                    <li>Mobile Number</li>
                    <li>Email Address</li>
                    <li>GST Number</li>
                    <li>Drug Licence Number</li>
                    <li>PAN Number (Optional)</li>
                    <li>Business Address, State, and Pincode</li>
                  </ul>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">3.2 Verification Documents</h3>
                  <p className="mt-3">To comply with Indian pharmaceutical regulations, we require customers to upload the following documents:</p>
                  <ul className="mt-3 list-disc list-inside space-y-2">
                    <li>GST Registration Certificate</li>
                    <li>Drug Licence Certificate</li>
                    <li>Any other regulatory or identity documents we may need to verify your business or order</li>
                  </ul>
                  <p className="mt-3">These documents are collected and stored securely and are used exclusively for regulatory compliance, account verification, and order processing purposes.</p>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">3.3 Transactional Information</h3>
                  <p className="mt-3">When you use our platform to place or manage orders, we collect:</p>
                  <ul className="mt-3 list-disc list-inside space-y-2">
                    <li>Order history and order details</li>
                    <li>Payment status and transaction references</li>
                    <li>Invoice details</li>
                    <li>Delivery address and shipping information</li>
                  </ul>
                  <p className="mt-3">This data helps us improve the performance, security, and usability of our platform.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">4. How We Use Your Information</h2>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>To create and manage your account on our platform</li>
                  <li>To verify your identity and business credentials in accordance with Indian pharmaceutical laws</li>
                  <li>To process and fulfil your orders, including dispatching medicines and healthcare products</li>
                  <li>To generate invoices and maintain accurate billing records</li>
                  <li>To facilitate secure online payments through authorised payment gateways</li>
                  <li>To send order confirmations, shipping updates, and delivery notifications</li>
                  <li>To respond to your queries, complaints, and customer support requests</li>
                  <li>To improve our website, products, and services based on user feedback and behaviour</li>
                  <li>To send you relevant product updates, offers, and communications (you may opt out at any time)</li>
                  <li>To detect, prevent, and investigate fraud, security breaches, or unauthorised activity</li>
                  <li>To comply with applicable legal, regulatory, and tax obligations under Indian law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">5. Customer Verification</h2>
                <p className="mt-3">Zenex International operates in a regulated pharmaceutical environment. The sale and distribution of prescription medicines, scheduled drugs, and other controlled healthcare products in India is governed by the Drugs and Cosmetics Act, 1940, and related regulations.</p>
                <p className="mt-3">To ensure compliance with these laws, we require all business customers — including pharmacies, hospitals, and medical retailers — to submit valid business registration documents, drug licences, and GST certificates before their accounts are activated or orders are fulfilled.</p>
                <p className="mt-3">The verification documents you provide are:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>Reviewed and validated by our compliance team</li>
                  <li>Stored securely in accordance with this Privacy Policy</li>
                  <li>Used solely for regulatory and account verification purposes</li>
                  <li>Never shared with third parties except where required by law or regulatory authorities</li>
                </ul>
                <p className="mt-3">We reserve the right to decline or suspend an account if verification documents are found to be invalid, expired, or incomplete.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">7. Sharing of Information</h2>
                <p className="mt-3">Zenex International does not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                <p className="mt-3">We may share your information in the following limited circumstances:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li><strong>Service Providers:</strong> We work with trusted third-party vendors who assist us with order fulfilment, logistics, payment processing, IT infrastructure, customer support, and analytics. These vendors are bound by strict confidentiality obligations and are not permitted to use your information for any purpose other than providing services to us.</li>
                  <li><strong>Logistics and Delivery Partners:</strong> Your delivery address and order details may be shared with courier and logistics companies to arrange the safe and timely delivery of your orders.</li>
                  <li><strong>Payment Gateway Providers:</strong> When you make a payment online, your payment information is processed securely by our authorised third-party payment gateway partners. Zenex International does not receive or store your card details or sensitive payment credentials.</li>
                  <li><strong>Regulatory and Legal Authorities:</strong> We may be required to disclose your information to government bodies, law enforcement agencies, drug regulatory authorities, or tax authorities in response to a lawful request, court order, or legal obligation.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred to the acquiring entity. You will be notified of any such change in advance.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">8. Payment Information</h2>
                <p className="mt-3">Zenex International is committed to the security of your financial transactions. All online payments on our platform are processed through RBI-authorised, PCI-DSS compliant third-party payment gateways.</p>
                <p className="mt-3">We want to be completely transparent about how payment data is handled:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>We do not store credit card or debit card numbers on our servers.</li>
                  <li>We do not collect or retain CVV numbers.</li>
                  <li>We do not have access to your UPI PIN, net banking passwords, or OTPs.</li>
                  <li>All payment credentials are entered directly on the secure payment gateway's platform, which uses industry-standard encryption.</li>
                </ul>
                <p className="mt-3">We only retain the following payment-related information for accounting and regulatory purposes:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>Transaction reference numbers</li>
                  <li>Payment status (successful, failed, pending)</li>
                  <li>Invoice amounts and dates</li>
                </ul>
                <p className="mt-3">If you experience any issues with a payment, please contact our customer support team. For disputes related to payment processing, please also reach out to your bank or payment gateway provider directly.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">10. Data Retention</h2>
                <p className="mt-3">We retain your personal information for as long as your account is active or as long as is necessary to provide our services, meet our legal and regulatory obligations, resolve disputes, and enforce our agreements.</p>
                <p className="mt-3">The following retention principles apply:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>Account and registration data is retained for the duration of your relationship with us and for a period of up to seven (7) years after account closure, in compliance with applicable Indian tax and regulatory laws.</li>
                  <li>Verification documents (GST certificates, drug licences, etc.) are retained for as long as required by pharmaceutical regulations and applicable law.</li>
                  <li>Order and transaction records are retained for a minimum of seven (7) years, as required under the Income Tax Act, 1961, and the GST framework.</li>
                  <li>Technical data and cookies are typically retained for a shorter period, as described in our cookie settings.</li>
                </ul>
                <p className="mt-3">When your data is no longer required, we securely delete or anonymise it in accordance with our internal data retention procedures.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">13. Children's Privacy</h2>
                <p className="mt-3">Our website and services are intended for adults and registered business entities. We do not knowingly collect personal information from individuals under the age of 18.</p>
                <p className="mt-3">If you are a minor, you must not use our website or submit any personal information without the consent and supervision of a parent or legal guardian. If we become aware that we have inadvertently collected personal information from a minor, we will take prompt steps to delete that information from our records.</p>
                <p className="mt-3">If you believe that a minor has submitted personal information to us, please contact us immediately.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">14. Changes to This Privacy Policy</h2>
                <p className="mt-3">We may update this Privacy Policy from time to time to reflect changes in our services, business practices, or applicable laws. When we make significant changes, we will notify you by:</p>
                <ul className="mt-3 list-disc list-inside space-y-2">
                  <li>Posting the updated policy on this page with a revised effective date</li>
                  <li>Displaying a notice on the website or your account dashboard</li>
                </ul>
                <p className="mt-3">We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our platform after any changes are posted constitutes your acceptance of the updated policy.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">15. Contact Information</h2>
                <p className="mt-3">If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please reach out to us:</p>
                <div className="mt-4 space-y-2 text-slate-700">
                  <p><strong>Company Name:</strong> Zenex International</p>
                  <p><strong>Email:</strong> infozenex@gmail.com</p>
                  <p><strong>Phone:</strong> 9611911196</p>
                  <p><strong>Working Hours:</strong> Monday to Saturday, 10:00 AM to 6:00 PM IST</p>
                </div>
                <p className="mt-3">We are committed to addressing your concerns promptly and professionally. Our team will respond to all privacy-related queries within 7 to 10 business days.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">Refund &amp; Credit Note Policy</h2>
                <p className="mt-3">At Zenex International, we generally <strong>do not provide cash or direct monetary refunds</strong> for approved product returns.</p>
                <p className="mt-3">Once a return request is approved, the value of the returned product will be issued as a <strong>Credit Note</strong>. This Credit Note can be adjusted against your <strong>next purchase</strong> from Zenex International, and the credit amount will be deducted from the value of your subsequent invoice.</p>
                <p className="mt-3"><strong>Example:</strong> If a Credit Note of ₹2,000 is issued and your next order is worth ₹10,000, only the remaining <strong>₹8,000</strong> will be payable.</p>
                <p className="mt-3">In exceptional cases, where the customer has made a one-time purchase and does not intend to place any future orders with Zenex International, the Company may, at its sole discretion, process a refund through the original mode of payment or any other approved payment method.</p>
                <p className="mt-3">The decision to issue a direct refund shall be made solely by Zenex International after reviewing the customer’s request and the circumstances of the return.</p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
