'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Building2, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Enterprise & Government Tenders</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">Request B2B Quote & Consultations</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Get in touch with our engineering and procurement team for bulk fire safety equipment supply, technical site surveys, or Annual Maintenance Contracts (AMC).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="h-5 w-5 text-red-500" /> Headquarters
              </h2>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Nimrod House, 77 Parklands Road, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-red-400 shrink-0" />
                  <span>+254 (0) 20 3740200 / +254 722 000000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-red-400 shrink-0" />
                  <span>info@nimrodafrica.com</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <ShieldCheck className="h-6 w-6 text-red-400" />
              <h3 className="text-sm font-bold text-white">Procurement Readiness</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We supply complete compliance packs including Tax Compliance Certificates, CR12, KEBS Certificates, and HSE documentation for vendor onboarding.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
                <h2 className="text-xl font-bold text-white">Quote Request Received</h2>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Thank you for contacting Nimrod Africa Ltd. Our technical sales engineers will review your request and get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 rounded-md transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-base font-bold text-white">RFQ / Procurement Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enterprise Ltd / Embassy"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jdoe@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 700 000000"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Requirement *</label>
                  <select
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-red-500"
                  >
                    <option value="">Select Category...</option>
                    <option value="extinguishers">Portable Extinguishers (Bulk Order)</option>
                    <option value="suppression">Pyrogen & Engineered Systems</option>
                    <option value="pumps">Tohatsu Fire Pumps & Hose Systems</option>
                    <option value="alarms">Addressable / Conventional Alarm Systems</option>
                    <option value="amc">Annual Maintenance Contract (AMC)</option>
                    <option value="audit">Safety Audit & Site Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Scope & Specifications</label>
                  <textarea
                    rows={4}
                    placeholder="Specify equipment counts, facility square footage, or tender submission deadlines..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold text-xs py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Submit B2B Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}