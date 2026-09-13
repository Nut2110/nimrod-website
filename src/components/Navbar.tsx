import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/nimrod-logo.png"
            alt="Nimrod Africa Ltd"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products & Catalog</Link>
          <Link href="/compliance" className="hover:text-white transition-colors">Compliance & HSE</Link>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition-colors"
          >
            Request B2B Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}