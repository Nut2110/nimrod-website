'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

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
            Portable Fire Extinguishers & Trolleys
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
            Fire Pumps, Hoses & Fittings
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

        {/* TAB 1: EXTINGUISHERS */}
        {activeTab === 'extinguishers' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">BS-EN3 Certified Range</span>
                <h2 className="text-2xl font-bold text-white">Portable Extinguishers & Mobile Trolleys</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Complete line of portable fire extinguishers including Carbon Dioxide (CO₂), ABC Dry Powder, AFFF Foam, Water, and Clean Agent units, engineered for high performance in commercial and industrial settings.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                    <span>BS-EN3, CE & KEBS certified pressure cylinders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-red-500 shrink-0" />
                    <span>Comprehensive capacities: 1kg to 9kg handheld, 25kg to 50kg wheeled trolley units</span>
                  </div>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2">
                    Request Bulk Quote <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/extinguisher-co2.jpg"
                  alt="Nimrod Fire Extinguishers"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Specifications Table */}
            <div>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">Extinguisher Specifications</h3>
              <div className="overflow-x-auto border border-slate-800 rounded-lg">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-900 text-slate-200 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Available Capacities</th>
                      <th className="p-3">Fire Class Rating</th>
                      <th className="p-3">Primary Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950">
                    <tr>
                      <td className="p-3 font-semibold text-white">Carbon Dioxide (CO₂)</td>
                      <td className="p-3">2 KG, 5 KG</td>
                      <td className="p-3">Class B, Electrical</td>
                      <td className="p-3">Server rooms, control panels, laboratories</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">ABC Dry Powder</td>
                      <td className="p-3">1 KG, 2 KG, 6 KG, 9 KG, 25 KG, 50 KG</td>
                      <td className="p-3">Class A, B, C, Electrical</td>
                      <td className="p-3">Factories, warehouses, commercial transport</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">AFFF Foam</td>
                      <td className="p-3">6 Litres, 9 Litres</td>
                      <td className="p-3">Class A, B</td>
                      <td className="p-3">Fuel stations, chemical stores, workshops</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Water / Water Mist</td>
                      <td className="p-3">9 Litres</td>
                      <td className="p-3">Class A</td>
                      <td className="p-3">Paper, wood, textile hazards</td>
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
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Aerosol & Clean Agent Suppression</span>
                <h2 className="text-2xl font-bold text-white">Pyrogen Engineered Fire Suppression Systems</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Solid aerosol and clean-agent chemical fire suppression systems designed to protect high-value electronic assets, server infrastructure, and switchgear without leaving residue or causing thermal shock.
                </p>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2">
                    Request Engineering Survey <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/extinguisher-clearagent.jpg"
                  alt="Clean Agent & Pyrogen System"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PUMPS & FITTINGS */}
        {activeTab === 'pumps' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">High Discharge Water Delivery</span>
                <h2 className="text-2xl font-bold text-white">Portable Fire Pumps, Hoses & Hydrant Fittings</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Portable fire pumps, lay-flat delivery hoses, hose reels, landing valves, and heavy-duty hydrants engineered for high-pressure emergency response across industrial and municipal sites.
                </p>
                <div className="pt-4 flex gap-3">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2">
                    Request Technical Pricing <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-80 relative">
                <Image
                  src="/images/1551206.jpg"
                  alt="Fire Pumps & Water Fittings"
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
          <div className="space-y-12">
            {/* Addressable Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Intelligent Multi-Zone Warning</span>
                <h2 className="text-2xl font-bold text-white">Addressable Fire Alarm Systems</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pinpoint exact detector locations during fire emergencies across complex, multi-story commercial facilities. Fully compatible with optical smoke sensors, thermal detectors, and manual call points.
                </p>
                <div className="pt-2">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-2">
                    Quote Addressable System <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-72 relative">
                <Image
                  src="/images/addressable_panel.PNG"
                  alt="Addressable Fire Alarm Panel"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Conventional Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Zone-Based Early Detection</span>
                <h2 className="text-2xl font-bold text-white">Conventional Fire Alarm Systems</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Dependable zone-based early warning alarm networks for small-to-medium offices, retail spaces, and standalone facilities. Feature robust battery backup and straightforward maintenance protocols.
                </p>
                <div className="pt-2">
                  <a href="/contact" className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold rounded-md transition-colors inline-flex items-center gap-2">
                    Quote Conventional System <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex justify-center items-center h-72 relative">
                <Image
                  src="/images/conventional_panel.PNG"
                  alt="Conventional Fire Alarm Panel"
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