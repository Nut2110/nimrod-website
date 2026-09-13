'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  categoryGroup: string;
  certification: string;
  description: string;
  features: string[];
  image: string;
  guideImage?: string;
  secondaryImage?: string;
  isAutomatic?: boolean;
}

const CATEGORIES = [
  'All Equipment',
  'Portable & Mobile Suppression',
  'Automatic Suppression Systems',
  'Fire Detection & Alarm Systems',
  'Emergency & First-Response Gear',
  'Accessories & Signage',
  'Valves, Fittings & Hardware',
  'Heavy Duty & Specialized Equipment',
] as const;

const products: Product[] = [
  // --- 1. PORTABLE & MOBILE SUPPRESSION ---
  {
    id: 'water-extinguisher',
    name: 'Water Fire Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Marked / Kitemarked',
    description: 'Cost-effective cooling solution for Class A fires involving solid materials such as wood, textiles, cardboard, and paper.',
    features: [
      'Suitable for Class A fires',
      'Deep drawn cylinder with internal polyethylene lining',
      'Polyester powder coating (Passed 480-hr salt spray test)',
      'Squeeze grip operation with durable non-kink hose'
    ],
    image: '/images/extinguisher-water.jpg',
    guideImage: '/images/guide_a.jpg',
  },
  {
    id: 'co2-extinguisher',
    name: 'Carbon Dioxide (CO2) Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Marked / Kitemarked',
    description: 'Non-toxic, residue-free suppression designed for electrical risks and Class B flammable liquid fires.',
    features: [
      'Suitable for Class B and Electrical fires',
      'Leaves zero residue – safe for sensitive electronics',
      'Lightweight cylinder with high-quality valve assembly',
      'Corrosion-resistant finish'
    ],
    image: '/images/extinguisher-co2.jpg',
    guideImage: '/images/guide_b.jpg',
  },
  {
    id: 'foam-extinguisher',
    name: 'AFFF Foam Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Marked / Kitemarked',
    description: 'Dual-action foam suppressant creating a cooling barrier to extinguish Class A solids and Class B flammable liquids.',
    features: [
      'Suitable for Class A & B multi-risk hazards',
      'Safe near electrical equipment from a distance',
      'Deep drawn cylinder with internal polyethylene lining',
      'Polyester powder coated (Passed 480-hr salt spray test)'
    ],
    image: '/images/extinguisher-foam.jpg',
    guideImage: '/images/guide_c.jpg',
  },
  {
    id: 'dry-powder-extinguisher',
    name: 'Dry Powder (ABC) Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Marked / Kitemarked',
    description: 'Multi-purpose unit providing fast flame knockdown on Class A, B, C, and electrical hazards in commercial sites.',
    features: [
      'Multi-risk coverage: Class A, B, C & Electrical',
      'Heavy-duty brass valve with visible pressure gauge',
      'Corrosion-resistant finish',
      'Also available in Automatic variants'
    ],
    image: '/images/extinguisher-drypowder.jpg',
    guideImage: '/images/guide_d.jpg',
  },
  {
    id: 'wet-chemical-extinguisher',
    name: 'Wet Chemical Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Marked / Kitemarked',
    description: 'Specialized suppression designed for Class F cooking oil/fat fires in commercial kitchens and fast-food chains.',
    features: [
      'Engineered for Class F cooking oil & fat fires',
      'Gentle spray nozzle prevents hot oil splashing',
      'Cools burning oil and seals surface against re-ignition',
      'Heavy-duty brass valve & internal polyethylene lining'
    ],
    image: '/images/extinguisher-wet_chemical.png',
    guideImage: '/images/guide_e.jpg',
  },
  {
    id: 'clean-agent-extinguisher',
    name: 'Clean Agent Gas Extinguisher',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'UK Manufactured / CE Marked',
    description: 'Ozone-friendly Halon alternative for server rooms, laboratories, data centers, and aviation environments.',
    features: [
      'Covers Class A, B, C, D, F, K & Electrical risks',
      'Electrically non-conductive & leaves zero residue',
      'Stops combustion via chemical heat absorption',
      'Brass valve assembly with pressure gauge'
    ],
    image: '/images/extinguisher-clearagent.jpg',
    guideImage: '/images/guide_f.jpg',
  },
  {
    id: 'mobile-trolley-units',
    name: 'Mobile Trolley Units (CO2, Powder, Foam)',
    categoryGroup: 'Portable & Mobile Suppression',
    certification: 'BS EN3 / CE Compliant',
    description: 'High-capacity mobile fire protection designed for petrol station forecourts, trade fairs, and construction sites.',
    features: [
      'Available in CO2, Dry Powder, and Foam configurations',
      'Rapid fire control for high-risk industrial zones',
      'Heavy-duty wheeled frame for fast site mobilization',
      'Long-reach discharge hoses with control nozzles'
    ],
    image: '/images/mobile_trolley_units.png',
  },

  // --- 2. AUTOMATIC SUPPRESSION SYSTEMS ---
  {
    id: 'auto-dry-powder',
    name: 'Automatic Dry Powder Extinguisher',
    categoryGroup: 'Automatic Suppression Systems',
    certification: 'CE Approved / Stored Pressure',
    description: 'Hands-free engine bay & vehicle compartment protection triggered automatically by temperature elevation.',
    features: [
      'Brass sprinkler valve with Red 68°C glass bulb',
      'Protects engine compartments and remote bays',
      'Powder-coated metal ceiling bracket included',
      'Safe for use on live electrical fires'
    ],
    image: '/images/extinguisher-automatic_dry_powder.png',
    isAutomatic: true,
  },
  {
    id: 'auto-clean-agent',
    name: 'Automatic Clean Agent Extinguisher',
    categoryGroup: 'Automatic Suppression Systems',
    certification: 'CE Approved / Stored Pressure',
    description: 'Self-activating total flooding unit designed for computer rooms, server enclosures, and high-value asset protection.',
    features: [
      'Brass sprinkler valve with Yellow 79°C glass bulb',
      'Leaves zero harmful residue on instruments',
      'Includes metal transport bracket & stainless-steel clip',
      'Safe for use on live electrical fires'
    ],
    image: '/images/extinguisher-automatic_clean_agent.jpg',
    isAutomatic: true,
  },
  {
    id: 'pyrogen-system',
    name: 'Pyrogen Aerosol Suppression System',
    categoryGroup: 'Automatic Suppression Systems',
    certification: '100% Eco-Friendly / Zero Pressure',
    description: 'Solid propellant aerosol technology for total flooding or direct-to-source enclosure protection.',
    features: [
      'Zero-pressure storage with no moving parts',
      'No pipework or manifold required',
      'Total flooding & direct-to-source variants',
      'Covers Class A, B, C, D, F, K & Electrical'
    ],
    image: '/images/pyrogen.jpg',
  },

  // --- 3. FIRE DETECTION & ALARM SYSTEMS ---
  {
    id: 'addressable-panel',
    name: 'BSR-2100 Addressable Fire Panel',
    categoryGroup: 'Fire Detection & Alarm Systems',
    certification: 'EN54-2 / EN54-4 / LPCB Approved',
    description: '2 to 4 loop addressable detection panel (expandable to 8 loops) designed for malls, hotels, and industrial plants.',
    features: [
      'Supports up to 150 points per loop across 96 zones',
      'LCD panel address mapping (1 to 150 per loop)',
      'PC-based software configuration via Ethernet',
      'Strict EN54 compliance for large infrastructure'
    ],
    image: '/images/addressable_panel.png',
  },
  {
    id: 'conventional-panel',
    name: 'Conventional Fire Alarm Panel (8-16 Zones)',
    categoryGroup: 'Fire Detection & Alarm Systems',
    certification: 'EN 54-2 / EN 54-4 Approved',
    description: 'Robust conventional detection panel range (8, 12, and 16 zones) suitable for commercial buildings and factories.',
    features: [
      'Up to 16 detection zones with identical controls',
      '2 siren outputs, alarm relay, and fault relay',
      'Ethernet connection for easy PC adjustment',
      'Dual 12V battery backup support'
    ],
    image: '/images/conventional_panel.png',
  },
  {
    id: 'smoke-heat-alarms',
    name: 'Commercial & Domestic Smoke and Heat Alarms',
    categoryGroup: 'Fire Detection & Alarm Systems',
    certification: 'Industrial & Domestic Grade',
    description: 'Fast-response optical smoke and thermal sensors designed to signal master alarm panels or issue local alerts.',
    features: [
      '9V battery operated or system-wired options',
      'High decibel alert (85dB at 3 meters)',
      'Built-in test button & low battery warning bleep',
      'Easy ceiling surface mounting'
    ],
    image: '/images/smoke_heat_alarms.png',
  },
  {
    id: 'sounders-sensors',
    name: 'Hazard Sounders & Intrusion Sensors',
    categoryGroup: 'Fire Detection & Alarm Systems',
    certification: 'Commercial Standard',
    description: 'Multi-tone hazard sounders and integrated intrusion sensors for perimeter hazard notifications.',
    features: [
      'High-decibel audible sirens for industrial facilities',
      'Multi-tone hazard alert options',
      'Fully compatible with addressable & conventional panels',
      'Durable weatherproof casing options'
    ],
    image: '/images/sounders_&_sensors.png',
  },
  {
    id: 'howler-site-alarm',
    name: 'Site Alert Howler Evacuation Alarm',
    categoryGroup: 'Fire Detection & Alarm Systems',
    certification: 'Weatherproof / High-Decibel',
    description: 'Battery-operated evacuation alarm with high-intensity LED beacon for noisy construction sites and forecourts.',
    features: [
      '100dB output at 1 meter',
      'High-intensity red flashing LED beacon',
      'Linkable up to 20 units via 2-core cable',
      'Weatherproof rocker switch & low battery bleep'
    ],
    image: '/images/howler_alarm.png',
    secondaryImage: '/images/howler_alarm_slim.png',
  },

  // --- 4. EMERGENCY & FIRST-RESPONSE GEAR ---
  {
    id: 'fire-hose-reel',
    name: 'Fire Hose Reel System',
    categoryGroup: 'Emergency & First-Response Gear',
    certification: 'Certified to EN 671-1: 2012',
    description: 'Short-range manual water delivery system permanently connected to mains supply for Class A hazards.',
    features: [
      'Available in Fixed and Swinging types',
      'UV Ageing tested (1000 hrs) & salt spray tested',
      'Working pressure: 12 bar (Min flow 34L/min @ 4 bar)',
      'Flame red epoxy polyester powder coating'
    ],
    image: '/images/fire_hose_reel.png',
  },
  {
    id: 'fire-blanket',
    name: 'Heavy-Duty Fire Blanket',
    categoryGroup: 'Emergency & First-Response Gear',
    certification: 'BS EN 1869:1997 / UK Made',
    description: 'Unique 3-ply material designed for smothering kitchen oil fires, waste bins, and personal clothing fires.',
    features: [
      'Manufactured in the UK',
      '3-Ply structure: 2 woven glass-fibre layers + fire-retardant inner film',
      'Quick-release compact housing',
      'Extinguishes Class F cooking oil hazards'
    ],
    image: '/images/fire_blanket_nimrod.png',
  },
  {
    id: 'delivery-hose',
    name: 'High-Pressure Delivery Hose',
    categoryGroup: 'Emergency & First-Response Gear',
    certification: 'Heavy Duty Construction',
    description: 'Flexible lay-flat hose extension for delivering pressurized water at high speeds over long distances.',
    features: [
      'Strong woven synthetic construction minimalizing ruptures',
      'Long-life durability under high pressure',
      'Compatible with standard international couplings',
      'Resistant to abrasion and oil'
    ],
    image: '/images/delivery_hose.png',
  },

  // --- 5. ACCESSORIES & SIGNAGE ---
  {
    id: 'safety-signs',
    name: 'Photoluminescent Safety Signs',
    categoryGroup: 'Accessories & Signage',
    certification: 'Standard Compliance Signs',
    description: 'High-quality flexible poly-plastic hazard and evacuation signs with glow-in-the-dark visibility.',
    features: [
      'Photo-luminescent (glow in the dark) technology',
      'High-grade flexible poly-plastic material',
      'Clear graphic symbols for emergency exits and equipment',
      'Weather and fade-resistant print'
    ],
    image: '/images/safety_signs.png',
  },
  {
    id: 'fire-extinguisher-covers',
    name: 'Fire Extinguisher Protective Covers',
    categoryGroup: 'Accessories & Signage',
    certification: 'Weather Resistant',
    description: 'Durable protective covers designed to guard portable extinguishers from dust, moisture, and UV wear.',
    features: [
      'Clear vision panel for rapid gauge inspection',
      'Hand loops for immediate removal during emergencies',
      'Velcro fastening for a tailored, snug fit',
      'Available for 2kg to 9kg cylinder sizes'
    ],
    image: '/images/extinguisher-covers.png',
  },
  {
    id: 'metal-fire-bucket',
    name: 'Metal Fire Bucket',
    categoryGroup: 'Accessories & Signage',
    certification: 'Traditional Safety Standard',
    description: 'Distinguishable red metal bucket designed for storing fire-suppression sand in remote areas, lodges, and farms.',
    features: [
      'Heavy-duty corrosion-resistant steel construction',
      'Bold "FIRE" labeling for immediate identification',
      'Sturdy carry handle for quick deployment',
      'Ideal for sand storage near flammable liquid stores'
    ],
    image: '/images/metal_fire_bucket.jpg',
  },

  // --- 6. VALVES, FITTINGS & HARDWARE ---
  {
    id: 'fire-fittings',
    name: 'Fire Equipment Fittings & Couplings',
    categoryGroup: 'Valves, Fittings & Hardware',
    certification: 'Industrial Grade',
    description: 'Complete range of brass and nylon nozzles, hydrants, adapters, and coupling wrenches for fire response.',
    features: [
      'Heavy-duty brass and nylon jet/spray nozzles',
      'Standardized hose couplings and female/male adapters',
      'Hydrant wrenches and control valves',
      'Engineered to withstand extreme battle heat and pressure'
    ],
    image: '/images/fire_fitting_big.jpg',
  },

  // --- 7. HEAVY DUTY & SPECIALIZED EQUIPMENT ---
  {
    id: 'tohatsu-pump',
    name: 'Tohatsu VC82ASE Portable Fire Pump',
    categoryGroup: 'Heavy Duty & Specialized Equipment',
    certification: 'Industrial Grade / OEM',
    description: 'High-power portable fire pump engineered with auto-mixing oil injection and oil-less vacuum priming.',
    features: [
      'Lightweight & compact engine with low noise',
      'Auto choke carburetor & maintenance-free battery',
      'Twin outlet water delivery with centralized control',
      'Includes battery charger & floodlight standard'
    ],
    image: '/images/tohatsu_pump.png',
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Equipment');

  const filteredProducts = selectedCategory === 'All Equipment'
    ? products
    : products.filter((p) => p.categoryGroup === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
              BS EN3 &amp; CE Certified
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              Nairobi Stocked
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industrial Fire Safety &amp; Engineering Catalogue
          </h1>
          <p className="text-slate-600 mt-2 max-w-3xl text-sm sm:text-base leading-relaxed">
            Engineered and manufactured exclusively for Nimrod Africa. Certified to international BS EN3, CE, and EN54 standards for commercial, industrial, and enterprise fire compliance across East Africa.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-16 z-40 bg-slate-50/95 backdrop-blur py-4 mb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap border ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white border-red-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

{/* Symmetrical Products Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-rows-[auto_auto_auto_1fr_1fr_auto]"
    >
      {/* 1. Image Area */}
      <div className="relative h-60 w-full bg-slate-100 border-b border-slate-100 p-4 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
        {product.isAutomatic && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
            Automatic Unit
          </span>
        )}
      </div>

      {/* 2. Top Badges (Fixed height across row) */}
      <div className="px-6 pt-6 pb-2 flex items-start justify-between gap-2 min-h-[3rem]">
        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded border border-red-100">
          {product.categoryGroup}
        </span>
        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 text-right leading-tight max-w-[150px]">
          {product.certification}
        </span>
      </div>

      {/* 3. Title & Description (Fixed locked heights) */}
      <div className="px-6 flex flex-col justify-start">
        <h2 className="text-lg font-bold text-slate-900 leading-snug h-[3.25rem] flex items-center">
          {product.name}
        </h2>
        <p className="text-xs text-slate-600 mt-1 h-[3.25rem] leading-relaxed overflow-hidden">
          {product.description}
        </p>
      </div>

      {/* 4. Sub-Box 1: Key Technical Features (Header inside box for strict alignment) */}
      <div className="px-6 py-3">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 h-full flex flex-col justify-start">
          <p className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-2.5 pb-1 border-b border-slate-200">
            Key Technical Features
          </p>
          <ul className="text-xs text-slate-600 space-y-2">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 font-bold leading-none mt-0.5">•</span>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Sub-Box 2: Safety Guide Chart (Header inside box to match Box 1) */}
      <div className="px-6 py-3">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 h-full flex flex-col justify-between">
          <p className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-2 pb-1 border-b border-slate-200">
            Application &amp; Safety Guide Chart
          </p>
          <div className="relative h-24 w-full flex items-center justify-center p-1">
            {product.guideImage ? (
              <Image
                src={product.guideImage}
                alt={`${product.name} Usage Chart`}
                fill
                className="object-contain"
              />
            ) : (
              <span className="text-xs text-slate-400 font-medium italic">
                Universal Application
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 6. Action Buttons */}
      <div className="p-6 pt-2 flex flex-col gap-2">
        <Link
          href={`/contact?product=${encodeURIComponent(product.name)}`}
          className="w-full text-center bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors shadow-sm"
        >
          Request a Quote
        </Link>
        <a
          href={`/datasheets/${product.id}.pdf`}
          download
          className="w-full text-center bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Download Datasheet
        </a>
      </div>
    </div>
  ))}
</div>
      </main>

      <Footer />
    </div>
  );
}