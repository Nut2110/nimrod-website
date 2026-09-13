import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fire Safety Services & AMCs | Nimrod Africa Ltd',
  description: 'Comprehensive fire protection services in Kenya including site surveys, installation, annual maintenance contracts (AMC), and staff fire training.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <section className="bg-slate-900 text-white py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/80 px-3.5 py-1.5 rounded-full border border-red-800/60">
              End-to-End Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
              Our Fire Protection Services
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
              From site audits and technical design to annual maintenance contracts (AMCs) and live fire training, we deliver certified safety across Kenya.
            </p>
          </div>
        </section>

        {/* Detailed Service Breakdown */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Stage 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 text-4xl font-extrabold text-red-600">01</div>
            <div className="md:col-span-11 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">1. Comprehensive Site Survey &amp; Engineering Design</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our licensed technical experts conduct rigorous on-site risk assessments and structural audits. We design custom fire detection and suppression layouts tailored to your floor plans while ensuring full compliance with Kenyan OSHA, NEMA, and Factories Act requirements alongside BS-EN3 standards.
              </p>
            </div>
          </div>

          {/* Stage 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 text-4xl font-extrabold text-red-600">02</div>
            <div className="md:col-span-11 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">2. Certified Fire Equipment Supply</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We supply high-caliber, BSI Kitemarked, and CE certified fire equipment including portable fire extinguishers (Water, Foam, CO2, Powder, Wet Chemical), fire hose reels, fire blankets, automatic suppression gas systems, and addressable fire alarm panels.
              </p>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 text-4xl font-extrabold text-red-600">03</div>
            <div className="md:col-span-11 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">3. System Installation &amp; Wiring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional mounting, pipefitting, electrical integration, and commissioning of fire protection infrastructure. All installations are executed by qualified engineers to guarantee complete readiness in emergency scenarios.
              </p>
            </div>
          </div>

          {/* Stage 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 text-4xl font-extrabold text-red-600">04</div>
            <div className="md:col-span-11 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">4. Service, Inspection &amp; Maintenance Contracts (AMC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Equipment requires regular servicing to remain compliant. We offer formal Annual Maintenance Contracts (AMC) for both Fire Equipment and Fire Alarms, including scheduled pressure testing, refilling, and emergency mobile fleet support.
              </p>
              <div className="pt-2">
                <Link
                  href="/#services"
                  className="inline-block text-xs font-bold text-red-600 hover:text-red-700 underline"
                >
                  Download AMC Contract Forms &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Stage 5 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-1 text-4xl font-extrabold text-red-600">05</div>
            <div className="md:col-span-11 space-y-2">
              <h3 className="text-xl font-bold text-slate-900">5. Live Fire Training &amp; Emergency Drills</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Having the right equipment is only half the battle. We provide practical workplace fire response training, live fire extinguisher usage demonstrations, and evacuation drill planning for your staff and designated safety marshals.
              </p>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}