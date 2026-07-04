import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Users,
  Upload,
  ShieldCheck,
  Truck,
  Thermometer,
  Headset,
  Check,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CookieBanner from '../components/layout/CookieBanner';
import { useToast } from '../hooks/use-toast';

const REG_TYPES = [
  {
    id: 'drug_license',
    label: 'Drug License Holder',
    icon: ClipboardCheck,
    heading: 'Business / License Information (Drug License Holder)',
    submitLabel: 'Register Now',
  },
  {
    id: 'doctor',
    label: 'Doctor',
    icon: Stethoscope,
    heading: 'Doctor Registration',
    submitLabel: 'Register',
  },
  {
    id: 'representative',
    label: 'Company Representative',
    icon: Briefcase,
    heading: 'Company Representative Sign Up',
    submitLabel: 'Register',
  },
  {
    id: 'patient',
    label: 'Patient',
    icon: Users,
    heading: 'Patient Register',
    submitLabel: 'Submit',
  },
];

const trustFeatures = [
  { icon: ShieldCheck, title: 'Trusted Partner', desc: 'Reliable pharmaceutical distribution with integrity and compliance.' },
  { icon: Truck, title: 'Timely Delivery', desc: 'On-time supply of quality medicines across India with efficiency.' },
  { icon: Thermometer, title: 'Cold Chain Experts', desc: 'Advanced cold chain infrastructure for temperature-sensitive products.' },
  { icon: Headset, title: 'Customer Support', desc: 'Dedicated support team for all your queries and requirements.' },
];

// -------- reusable field bits --------
const inputCls =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition';

const Label = ({ children, required }) => (
  <label className="text-[13px] font-semibold text-slate-800">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const Field = ({ label, required, children, className = '' }) => (
  <div className={`space-y-1.5 ${className}`}>
    <Label required={required}>{label}</Label>
    {children}
  </div>
);

const FileDrop = ({ label, required, file, onChange, small = false }) => {
  const inputId = `file-${label.replace(/\s+/g, '-').toLowerCase()}-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <div className="space-y-1.5">
      <Label required={required}>{label}</Label>
      <label
        htmlFor={inputId}
        className={`flex items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 ${small ? 'py-2.5' : 'py-3.5'} cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition`}
      >
        <span className="w-10 h-10 grid place-items-center rounded-lg bg-slate-100 text-slate-500">
          <Upload className="w-4 h-4" />
        </span>
        <span className="min-w-0 flex-1">
          {file ? (
            <span className="block text-sm font-medium text-slate-800 truncate">{file.name}</span>
          ) : (
            <>
              <span className="block text-sm font-medium text-slate-700">
                Choose file <span className="text-slate-400 font-normal">or drag and drop</span>
              </span>
              <span className="block text-[11px] text-slate-400">PDF, JPG, PNG (Max. 5MB)</span>
            </>
          )}
        </span>
        <input
          id={inputId}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] || null)}
        />
      </label>
    </div>
  );
};

// -------- main component --------
const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('drug_license');
  const [submitting, setSubmitting] = useState(false);
  const [accept, setAccept] = useState(false);

  // Drug License Holder fields
  const [dl, setDl] = useState({
    name: '',
    address: '',
    ownerName: '',
    email: '',
    mobile: '',
    diNumber1: '',
    diNumber2: '',
    diNumber3: '',
    validity: '',
    gstNumber: '',
    upload1: null,
    upload2: null,
    upload3: null,
  });

  // Doctor fields
  const [doc, setDoc] = useState({
    doctorName: '',
    qualification: '',
    email: '',
    address: '',
    mobile: '',
    kmcReg: '',
    kmcUpload: null,
  });

  // Company Representative fields
  const [rep, setRep] = useState({ name: '', companyName: '', mobile: '', email: '' });

  // Patient fields
  const [patient, setPatient] = useState({
    patientName: '',
    doctorName: '',
    mobile: '',
    doctorQualification: '',
    address: '',
    hospitalName: '',
    prescription: null,
  });

  const activeMeta = useMemo(() => REG_TYPES.find((t) => t.id === activeType), [activeType]);

  const buildPayload = () => {
    const base = { registrationType: activeMeta.label, submittedAt: new Date().toISOString() };
    if (activeType === 'drug_license') {
      return {
        ...base,
        name: dl.name,
        address: dl.address,
        ownerName: dl.ownerName,
        email: dl.email,
        mobile: dl.mobile,
        diNumber1: dl.diNumber1,
        diNumber2: dl.diNumber2,
        diNumber3: dl.diNumber3,
        validity: dl.validity,
        gstNumber: dl.gstNumber,
        upload1: dl.upload1?.name || null,
        upload2: dl.upload2?.name || null,
        upload3: dl.upload3?.name || null,
      };
    }
    if (activeType === 'doctor') {
      return {
        ...base,
        doctorName: doc.doctorName,
        qualification: doc.qualification,
        email: doc.email,
        address: doc.address,
        mobile: doc.mobile,
        kmcRegNumber: doc.kmcReg,
        kmcUpload: doc.kmcUpload?.name || null,
      };
    }
    if (activeType === 'representative') {
      return { ...base, name: rep.name, companyName: rep.companyName, mobile: rep.mobile, email: rep.email };
    }
    return {
      ...base,
      patientName: patient.patientName,
      doctorName: patient.doctorName,
      mobile: patient.mobile,
      doctorQualification: patient.doctorQualification,
      address: patient.address,
      hospitalName: patient.hospitalName,
      prescription: patient.prescription?.name || null,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accept) {
      toast({ title: 'Please accept the terms', description: 'You must confirm the information is accurate.' });
      return;
    }
    setSubmitting(true);
    const payload = buildPayload();
    const webhookUrl = process.env.REACT_APP_REGISTER_WEBHOOK_URL || 'http://localhost:4000/api/register';
    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Registration failed: ${res.status} ${errorText}`);
      }
      toast({
        title: 'Registration submitted',
        description: `Your ${activeMeta.label.toLowerCase()} registration has been sent to the Zenex team.`,
      });
      navigate('/login');
    } catch (err) {
      console.error('Register submission error:', err);
      toast({
        title: 'Submission failed',
        description: err.message || 'Please try again or contact info@zenexinternational.com.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 bg-slate-50">
        {/* Top hero band with title */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80"
              alt=""
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-50/90 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] tracking-tight">
              Register with Zenex International
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
              Please provide the required information based on your registration type to create your account with us.
            </p>
          </div>
        </section>

        {/* Main white card */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-6 sm:-mt-10">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-8 lg:p-10">
            <p className="text-red-600 font-semibold text-sm">Step 1 of 3</p>
            <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">Select Registration Type</h2>

            {/* Type selector cards */}
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {REG_TYPES.map((t) => {
                const Icon = t.icon;
                const active = activeType === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveType(t.id)}
                    className={`relative rounded-xl border-2 transition-all p-4 sm:p-6 text-center focus:outline-none ${
                      active
                        ? 'border-blue-600 bg-blue-50/60 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    {active && (
                      <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-blue-600 text-white grid place-items-center">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                    )}
                    <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 ${active ? 'text-blue-700' : 'text-blue-600'}`} strokeWidth={1.5} />
                    <span className={`block text-xs sm:text-sm font-semibold ${active ? 'text-blue-800' : 'text-slate-800'}`}>
                      {t.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeType}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-8"
                >
                  {/* Drug License Holder — simplified 2-column layout */}
                  {activeType === 'drug_license' && (
                    <section>
                      <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Drug License Registration</h3>
                        <p className="mt-2 text-sm text-slate-500">Please provide information for the Billing Purpose.</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {/* LEFT COLUMN */}
                        <div className="space-y-5">
                          <Field label="Name" required>
                            <input required className={inputCls} value={dl.name} onChange={(e) => setDl({ ...dl, name: e.target.value })} />
                          </Field>
                          <Field label="Address" required>
                            <textarea required rows={3} className={inputCls} value={dl.address} onChange={(e) => setDl({ ...dl, address: e.target.value })} />
                          </Field>
                          <Field label="Owner/In-charge Name" required>
                            <input required className={inputCls} value={dl.ownerName} onChange={(e) => setDl({ ...dl, ownerName: e.target.value })} />
                          </Field>
                          <Field label="E-Mail Address" required>
                            <input required type="email" className={inputCls} value={dl.email} onChange={(e) => setDl({ ...dl, email: e.target.value })} />
                          </Field>
                          <Field label="Mobile Number" required>
                            <input required className={inputCls} value={dl.mobile} onChange={(e) => setDl({ ...dl, mobile: e.target.value })} />
                          </Field>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-5">
                          {/* DI Number 1 with inline upload */}
                          <div className="space-y-1.5">
                            <Label required>DI Number1</Label>
                            <div className="flex gap-2">
                              <input required className={inputCls} placeholder="Add Number here" value={dl.diNumber1} onChange={(e) => setDl({ ...dl, diNumber1: e.target.value })} />
                              <label className="shrink-0 inline-flex items-center gap-1.5 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/30 px-4 rounded-lg cursor-pointer text-sm font-medium text-slate-700">
                                <Upload className="w-4 h-4" /> Upload
                                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => setDl({ ...dl, upload1: e.target.files?.[0] || null })} />
                              </label>
                            </div>
                            {dl.upload1 && <p className="text-[11px] text-slate-500 truncate">{dl.upload1.name}</p>}
                          </div>
                          {/* DI Number 2 with inline upload */}
                          <div className="space-y-1.5">
                            <Label>DI Number2</Label>
                            <div className="flex gap-2">
                              <input className={inputCls} placeholder="Add Number here" value={dl.diNumber2} onChange={(e) => setDl({ ...dl, diNumber2: e.target.value })} />
                              <label className="shrink-0 inline-flex items-center gap-1.5 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/30 px-4 rounded-lg cursor-pointer text-sm font-medium text-slate-700">
                                <Upload className="w-4 h-4" /> Upload
                                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => setDl({ ...dl, upload2: e.target.files?.[0] || null })} />
                              </label>
                            </div>
                            {dl.upload2 && <p className="text-[11px] text-slate-500 truncate">{dl.upload2.name}</p>}
                          </div>
                          {/* DI Number 3 with inline upload */}
                          <div className="space-y-1.5">
                            <Label>DI Number3</Label>
                            <div className="flex gap-2">
                              <input className={inputCls} placeholder="Add Number here" value={dl.diNumber3} onChange={(e) => setDl({ ...dl, diNumber3: e.target.value })} />
                              <label className="shrink-0 inline-flex items-center gap-1.5 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/30 px-4 rounded-lg cursor-pointer text-sm font-medium text-slate-700">
                                <Upload className="w-4 h-4" /> Upload
                                <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => setDl({ ...dl, upload3: e.target.files?.[0] || null })} />
                              </label>
                            </div>
                            {dl.upload3 && <p className="text-[11px] text-slate-500 truncate">{dl.upload3.name}</p>}
                          </div>
                          <Field label="Validity" required>
                            <input required type="date" className={inputCls} value={dl.validity} onChange={(e) => setDl({ ...dl, validity: e.target.value })} />
                          </Field>
                          <Field label="GST Number" required>
                            <input required className={inputCls} value={dl.gstNumber} onChange={(e) => setDl({ ...dl, gstNumber: e.target.value })} />
                          </Field>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Doctor */}
                  {activeType === 'doctor' && (
                    <section>
                      <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-4">{activeMeta.heading}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Doctor Name" required>
                          <input required className={inputCls} placeholder="Enter doctor name" value={doc.doctorName} onChange={(e) => setDoc({ ...doc, doctorName: e.target.value })} />
                        </Field>
                        <Field label="Qualification" required>
                          <input required className={inputCls} placeholder="e.g. MBBS, MD" value={doc.qualification} onChange={(e) => setDoc({ ...doc, qualification: e.target.value })} />
                        </Field>
                        <Field label="Email" required>
                          <input required type="email" className={inputCls} placeholder="Enter email address" value={doc.email} onChange={(e) => setDoc({ ...doc, email: e.target.value })} />
                        </Field>
                        <Field label="Address" required>
                          <textarea required rows={3} className={inputCls} placeholder="Enter address" value={doc.address} onChange={(e) => setDoc({ ...doc, address: e.target.value })} />
                        </Field>
                        <Field label="Mobile Number" required>
                          <input required className={inputCls} placeholder="Enter mobile number" value={doc.mobile} onChange={(e) => setDoc({ ...doc, mobile: e.target.value })} />
                        </Field>
                        <div className="space-y-1.5">
                          <Label required>KMC Reg Number</Label>
                          <div className="flex gap-2">
                            <input required className={inputCls} placeholder="Add Number here" value={doc.kmcReg} onChange={(e) => setDoc({ ...doc, kmcReg: e.target.value })} />
                            <label className="shrink-0 inline-flex items-center gap-2 border border-slate-300 hover:border-blue-500 hover:bg-blue-50/30 px-4 rounded-lg cursor-pointer text-sm font-medium text-slate-700">
                              <Upload className="w-4 h-4" /> Upload
                              <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => setDoc({ ...doc, kmcUpload: e.target.files?.[0] || null })} />
                            </label>
                          </div>
                          {doc.kmcUpload && <p className="text-[11px] text-slate-500 truncate">{doc.kmcUpload.name}</p>}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Company Representative */}
                  {activeType === 'representative' && (
                    <section>
                      <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-4">{activeMeta.heading}</h3>
                      <p className="text-sm text-slate-500 mb-4">Please provide information for the sales data and other information.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Name" required>
                          <input required className={inputCls} placeholder="Enter full name" value={rep.name} onChange={(e) => setRep({ ...rep, name: e.target.value })} />
                        </Field>
                        <Field label="Company Name" required>
                          <input required className={inputCls} placeholder="Enter company name" value={rep.companyName} onChange={(e) => setRep({ ...rep, companyName: e.target.value })} />
                        </Field>
                        <Field label="Mobile Number" required>
                          <input required className={inputCls} placeholder="Enter mobile number" value={rep.mobile} onChange={(e) => setRep({ ...rep, mobile: e.target.value })} />
                        </Field>
                        <Field label="Email" required>
                          <input required type="email" className={inputCls} placeholder="Enter email address" value={rep.email} onChange={(e) => setRep({ ...rep, email: e.target.value })} />
                        </Field>
                      </div>
                    </section>
                  )}

                  {/* Patient */}
                  {activeType === 'patient' && (
                    <section>
                      <h3 className="text-base sm:text-lg font-bold text-blue-700 mb-4">{activeMeta.heading}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Patient Name" required>
                          <input required className={inputCls} placeholder="Enter patient name" value={patient.patientName} onChange={(e) => setPatient({ ...patient, patientName: e.target.value })} />
                        </Field>
                        <Field label="Doctor Name" required>
                          <input required className={inputCls} placeholder="Enter doctor name" value={patient.doctorName} onChange={(e) => setPatient({ ...patient, doctorName: e.target.value })} />
                        </Field>
                        <Field label="Mobile Number" required>
                          <input required className={inputCls} placeholder="Enter mobile number" value={patient.mobile} onChange={(e) => setPatient({ ...patient, mobile: e.target.value })} />
                        </Field>
                        <Field label="Doctor Qualification">
                          <input className={inputCls} placeholder="e.g. MBBS, MD" value={patient.doctorQualification} onChange={(e) => setPatient({ ...patient, doctorQualification: e.target.value })} />
                        </Field>
                        <Field label="Address" required>
                          <textarea required rows={3} className={inputCls} placeholder="Enter address" value={patient.address} onChange={(e) => setPatient({ ...patient, address: e.target.value })} />
                        </Field>
                        <Field label="Hospital Name" required>
                          <input required className={inputCls} placeholder="Enter hospital name" value={patient.hospitalName} onChange={(e) => setPatient({ ...patient, hospitalName: e.target.value })} />
                        </Field>
                        <FileDrop label="Prescription" required file={patient.prescription} onChange={(f) => setPatient({ ...patient, prescription: f })} />
                      </div>
                    </section>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Safety notice */}
              <div className="flex items-start gap-4 bg-blue-50/70 border border-blue-100 rounded-xl p-4 sm:p-5">
                <div className="shrink-0 w-9 h-9 grid place-items-center rounded-lg bg-blue-100 text-blue-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-800">Your information is safe with us</p>
                  <p className="text-[12px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    We ensure the privacy and security of your data. Your information will only be used for account creation and relevant communication.
                  </p>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 select-none cursor-pointer">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-slate-700 leading-relaxed">
                  I confirm that all information provided is accurate and agree to Zenex International&rsquo;s{' '}
                  <a href="/terms-and-conditions" className="text-blue-700 font-semibold hover:underline">Terms &amp; Conditions</a> and{' '}
                  <a href="/privacy-policy" className="text-blue-700 font-semibold hover:underline">Privacy Policy</a>.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-red-500/30"
              >
                {submitting ? 'Submitting…' : activeMeta.submitLabel}
              </button>

              <p className="text-center text-sm text-slate-600">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-blue-700 hover:underline">Sign in</Link>
              </p>
            </form>
          </div>

          {/* Bottom trust features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5"
              >
                <div className="shrink-0 w-11 h-11 grid place-items-center rounded-full bg-blue-50 text-blue-700">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default Register;
