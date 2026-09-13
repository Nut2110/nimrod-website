import React from 'react';

export default function CompanyOverview() {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-red-600 text-xs font-extrabold uppercase tracking-widest mb-2">
              Our Direction
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the premier provider of certified fire safety and life-protection engineering solutions across East Africa, setting the benchmark for industrial compliance, reliability, and technical excellence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-red-600 text-xs font-extrabold uppercase tracking-widest mb-2">
              Our Purpose
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To safeguard lives, infrastructure, and commercial enterprise by delivering OEM-manufactured, fully certified fire protection hardware backed by expert engineering support and local inventory availability.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Choose Nimrod Africa
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Engineered compliance and local supply assurance for commercial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">BS EN3 & CE Certified</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All suppression equipment is rigorously tested and manufactured to meet strict European and British standards for municipal inspection approval.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Nairobi Stock Availability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain direct local inventory in Nairobi, enabling rapid deployment and immediate site fulfillment across the region.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Technical Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team assists with system specification, equipment selection, and technical documentation for engineering projects.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">What We Offer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-sm font-bold mb-1">Equipment Supply</h4>
              <p className="text-xs text-slate-400">
                Complete range of portable, automatic, and heavy-duty suppression hardware.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-sm font-bold mb-1">Alarm & Detection</h4>
              <p className="text-xs text-slate-400">
                Addressable and conventional panels, optical sensors, and warning sounders.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-sm font-bold mb-1">First-Response Gear</h4>
              <p className="text-xs text-slate-400">
                EN671-1 hose reels, heavy-duty delivery hoses, and BS EN 1869 blankets.
              </p>
            </div>
            <div className="border-l-2 border-red-600 pl-4">
              <h4 className="text-sm font-bold mb-1">Project Consultation</h4>
              <p className="text-xs text-slate-400">
                Technical datasheets, compliance documentation, and quotation support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}