'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Download, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'extinguishers' | 'suppression' | 'pumps' | 'alarms'>('extinguishers');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Certified Equipment Catalog</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1">Industrial & Commercial Fire Safety</h1>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            All equipment complies with BS-EN3, BSI Kitemark, CE, and KEBS standards. Designed for enterprise environments, industrial facilities, and commercial properties across East Africa.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-2 mb-8">
          <button
            onClick={() => setActiveTab('extinguishers')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'extinguishers'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Portable Fire Extinguishers (BS-EN3)
          </button>
          <button
            onClick={() => setActiveTab('suppression')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'suppression'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Pyrogen & Engineered Systems
          </button>
          <button
            onClick={() => setActiveTab('pumps')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'pumps'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Tohatsu Fire Pumps & Hoses
          </button>
          <button
            onClick={() => setActiveTab('alarms')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'alarms'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            Detection & Fire Alarm Panels
          </button>
        </div>

        {/* TAB 1: PORTABLE EXTINGUISHERS */}
        {activeTab === 'extinguishers' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">BS-EN3 Certified</span>
                <h2 className="text-2xl font-bold text-white">Carbon Dioxide ($\text{CO}_2$) Extinguishers</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specifically engineered for electrical fire risks and flammable liquid hazards. Leaves zero residue, protecting sensitive electronic devices, server rooms, and heavy industrial machinery.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                    <span>Non-conductive, clean-agent residue-free discharge</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                    <span>Seamless alloy steel cylinder with frost-free horn</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors">
                    Request Quote / Bulk Order
                  </a>
                </div>
              </div>

              {/* Product Image Stage */}
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/products/extinguisher-co2.jpg"
                  alt="Nimrod CO2 Fire Extinguisher"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Spec Table */}
            <div>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">Technical Specifications</h3>
              <div className="overflow-x-auto border border-slate-800 rounded-lg">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Model Capacity</th>
                      <th className="p-3">Fire Rating</th>
                      <th className="p-3">Working Pressure</th>
                      <th className="p-3">Standard Certification</th>
                      <th className="p-3">Ideal Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950">
                    <tr>
                      <td className="p-3 font-semibold text-white">2 KG $\text{CO}_2$</td>
                      <td className="p-3">34B</td>
                      <td className="p-3">174 Bar</td>
                      <td className="p-3">BS-EN3 / CE / KEBS</td>
                      <td className="p-3">Server rooms, offices, electrical panels</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">5 KG $\text{CO}_2$</td>
                      <td className="p-3">70B</td>
                      <td className="p-3">174 Bar</td>
                      <td className="p-3">BS-EN3 / CE / KEBS</td>
                      <td className="p-3">Industrial plants, factories, generator rooms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PYROGEN & SUPPRESSION */}
        {activeTab === 'suppression' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Aerosol Suppression Technology</span>
                <h2 className="text-2xl font-bold text-white">Pyrogen Engineered Suppression Systems</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Environmentally safe solid aerosol fire extinguishing technology. Pyrogen systems activate rapidly upon detection, extinguishing fires at a chemical level without oxygen depletion or pressure spikes.
                </p>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors">
                    Schedule Technical Site Survey
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/products/pyrogen-system.jpg"
                  alt="Pyrogen Engineered System"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PUMPS & HOSES */}
        {activeTab === 'pumps' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Authorized Distributor</span>
                <h2 className="text-2xl font-bold text-white">Tohatsu Portable Fire Pumps</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineered in Japan, Tohatsu portable fire pumps deliver unmatched reliability, high discharge pressure, and compact transportability for emergency municipal, airport, and industrial response teams.
                </p>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors">
                    Request Spec Sheet & Pricing
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/products/pump-tohatsu.jpg"
                  alt="Tohatsu Fire Pump"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ALARMS */}
        {activeTab === 'alarms' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Early Detection Systems</span>
                <h2 className="text-2xl font-bold text-white">Addressable & Conventional Fire Alarm Panels</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete early-warning alarm networks featuring optical smoke sensors, heat detectors, manual call points, and multi-zone control panels for corporate towers and manufacturing complexes.
                </p>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors">
                    Request System Integration Quote
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/products/alarm-panel.jpg"
                  alt="Fire Alarm Panel and Sensors"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
