import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-white font-bold text-sm mb-2">Nimrod Africa Ltd</p>
          <p className="leading-relaxed">
            Established 1977. Kenya’s leading provider of BS-EN3 certified fire extinguishers, engineered suppression systems, and field servicing.
          </p>
        </div>

        <div>
          <p className="text-white font-bold text-sm mb-2">Headquarters</p>
          <p>Nimrod House, 77 Parklands Road</p>
          <p>Nairobi, Kenya</p>
          <p className="mt-2">Tel: +254 (0) 20 3740200</p>
        </div>

        <div>
          <p className="text-white font-bold text-sm mb-2">Quick Navigation</p>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Products Catalog</Link></li>
            <li><Link href="/compliance" className="hover:text-white">Compliance & Governance</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact / Quote Form</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-4 border-t border-slate-900 text-center text-slate-500">
        &copy; {new Date().getFullYear()} Nimrod Africa Ltd. All rights reserved.
      </div>
    </footer>
  );
}