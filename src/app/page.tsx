  'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [formData, setFormData] = useState({
    directorsName: '',
    directorsMobile: '',
    company: '',
    email: '',
    kraPin: '',
    serviceArea: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert('Please accept the Terms and Conditions to proceed.');
      return;
    }
    // Handle backend submission or lead capture here if needed
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setIsContractModalOpen(false);
    // Reset state after closing
    setTimeout(() => {
      setFormSubmitted(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-red-400 bg-red-950/80 px-3.5 py-1.5 rounded-full border border-red-800/60 shadow-inner">
                Established 1977 — Fire Safety Partner
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Nimrod Africa Limited
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                The leading fire safety equipment and fire alarm systems provider in Kenya. Protecting lives, property, and businesses with international quality standards.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/products"
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-lg shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Browse Catalogue
                </Link>
                <Link
                  href="/contact"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 hover:border-slate-500"
                >
                  Contact Technical Team
                </Link>
              </div>
            </div>

            {/* Headquarters Image Card */}
<div className="lg:col-span-5 group relative w-full h-80 lg:h-[440px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 transition-all duration-500 hover:border-red-500/50 hover:shadow-red-900/20">
  <Image
    src="/images/nimrod-building.jpg"
    alt="Nimrod Africa Headquarters"
    fill
    className="object-cover brightness-110 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
    priority
  />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/60 w-full transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="text-white font-bold text-base group-hover:text-red-400 transition-colors">
                    Nimrod Africa Headquarters
                  </p>
                  <p className="text-slate-300 text-xs">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ACCREDITATIONS & CERTIFICATIONS STRIPE (TRANSPARENT BACKGROUND LOGOS) --- */}
        <section className="bg-yellow-400 py-6 border-y border-yellow-500 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-black tracking-widest text-slate-900 uppercase mb-4">
              Internationally Certified &amp; Accredited Standards
            </p>
            <div className="flex flex-wrap items-center justify-around gap-8">
              {/* BSI */}
              <div className="relative h-12 w-28 mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/logos/bsi.jpg"
                  alt="BSI Kitemarked Certification"
                  fill
                  className="object-contain"
                />
              </div>

              {/* CE Mark */}
              <div className="relative h-12 w-24 mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/logos/ce-mark.jpg"
                  alt="CE Mark Compliance"
                  fill
                  className="object-contain"
                />
              </div>

              {/* LPCB */}
              <div className="relative h-12 w-28 mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/logos/lpcb.png"
                  alt="LPCB Loss Prevention Certification Board Approved"
                  fill
                  className="object-contain"
                />
              </div>

              {/* IFPO */}
              <div className="relative h-12 w-28 mix-blend-multiply opacity-90 hover:opacity-100 transition-all duration-300">
                <Image
                  src="/logos/ifpo.png"
                  alt="IFPO Member"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT & FLEET SHOWCASE --- */}
        <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md border border-red-100">
                Established 1977
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Kenya&apos;s Leading Provider of Fire Protection &amp; Safety Equipment
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4 text-sm sm:text-base">
                <p>
                  Established in 1977, Nimrod Africa Ltd. is the leading fire safety equipment and fire alarm systems provider in Kenya. For more than 40 years, Nimrod has been designing, installing, and maintaining fire equipment to protect its customers, employees, assets, and premises.
                </p>
                <p>
                  The company is managed by a highly efficient team of professional admin staff and supported by qualified technicians with vast experience in fire protection. Nimrod has established itself as the trusted partner in fire safety with customers across multiple sectors—from small businesses and private premises to hospitality, oil &amp; gas, banks, education, industrial sites, and medical facilities.
                </p>
                <p>
                  Since its inception, Nimrod has provided its customers with exceptional service standards and the best quality fire safety equipment. Nimrod’s service proposition involves a licensed and branded vehicle fleet with fully trained and qualified technicians who carry out fire equipment services country-wide.
                </p>
              </div>
            </div>

            {/* Fleet Image Card */}
            <div className="lg:col-span-6 group relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 transition-all duration-500 hover:shadow-2xl hover:border-slate-300">
              <Image
                src="/images/fleet.jpg"
                alt="Nimrod Africa Service & Delivery Fleet"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/60 w-full transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="text-white font-bold text-lg group-hover:text-red-400 transition-colors">
                    Mobile Response &amp; Logistics Fleet
                  </p>
                  <p className="text-slate-300 text-xs mt-1">
                    Equipped for rapid site dispatch and scheduled maintenance services across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- MISSION & VISION --- */}
        <section className="bg-white py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div className="relative w-full h-48 sm:h-56 bg-slate-800">
                  <Image
                    src="/images/vision.jpg"
                    alt="Nimrod Africa Future Vision"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />
                  <span className="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-widest text-white bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-md">
                    Our Direction
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To be the leading provider of total environmental health, fire safety, and emergency response solutions in the region, recognized for our commitment to innovation, sustainability, and operational excellence.
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div className="relative w-full h-48 sm:h-56 bg-slate-800">
                  <Image
                    src="/images/mission.jpg"
                    alt="Nimrod Africa Fire Protection Mission"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40" />
                  <span className="absolute top-4 left-4 text-xs font-extrabold uppercase tracking-widest text-white bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-md">
                    Our Purpose
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    To protect lives, property, and the environment by delivering high-quality, reliable, and integrated fire safety solutions, tailored to meet the unique needs of our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHAT WE OFFER --- */}
        <section id="services" className="bg-slate-950 py-20 border-t border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-red-950/80 px-3.5 py-1.5 rounded-full border border-red-800/60">
                Services &amp; Solutions
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
                What We Offer
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {/* Site Survey */}
              <div className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 shadow-lg">
                <div>
                  <div className="w-12 h-12 mb-6 text-lime-400 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                    Site Survey &amp; Design
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Our technical experts conduct thorough on-site risk assessments to design custom fire protection layouts that fulfill regulatory compliance.
                  </p>
                </div>
              </div>

              {/* Fire Equipment Sales */}
              <div className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 shadow-lg">
                <div>
                  <div className="w-12 h-12 mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    Fire Equipment Sales
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Supply of high-grade BS EN3 certified fire extinguishers, hose reels, fire blankets, smoke detectors, and alarm systems.
                  </p>
                </div>
              </div>

              {/* Installation */}
              <div className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 shadow-lg">
                <div>
                  <div className="w-12 h-12 mb-6 text-red-500 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m0 0l-3.03 2.496c-.384.317-.626.74-.766 1.208m8.45-8.45l-3.03 2.496c-.384.317-.626.74-.766 1.208" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    System Installation
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Professional fitting and wiring of fire alarm panels, emergency lighting, hose reels, and automatic suppression systems by licensed engineers.
                  </p>
                </div>
              </div>

              {/* Service & Maintenance (MODAL TRIGGER BUTTON) */}
              <div className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 shadow-lg">
                <div>
                  <div className="w-12 h-12 mb-6 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25v1.05m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Service &amp; Maintenance
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Scheduled refilling, testing, and annual maintenance contracts (AMC) to ensure equipment operates flawlessly when needed.
                  </p>
                </div>
                <button
                  onClick={() => setIsContractModalOpen(true)}
                  className="inline-flex items-center justify-center w-full bg-white text-slate-900 font-bold text-xs py-2.5 px-3 rounded-lg hover:bg-amber-400 hover:text-slate-950 transition-colors shadow-md mt-2 cursor-pointer"
                >
                  Contract Forms &rarr;
                </button>
              </div>

              {/* Training */}
              <div className="group bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 shadow-lg">
                <div>
                  <div className="w-12 h-12 mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Training &amp; Demos
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Practical live-fire training and emergency drill demonstrations for staff to prepare teams for swift action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US (UPDATED ICONS FOR ESTABLISHED PRESENCE & SUSTAINABILITY) --- */}
        <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md border border-red-100">
                Core Strengths
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Why Choose Us
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Building lasting partnerships through heritage, technical excellence, and sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 01 - Family-run */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.97 5.97 0 00-.942 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Family-run
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A friendly, family-run private company that cares and provides excellent customer support.
                </p>
              </div>

              {/* Card 02 - Established Presence (NEW ICON: PROTECTIVE SHIELD + HISTORIC BUILDING) */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.8V5.25L12 2l8 3.25V9.2c0 7.3-8 11.8-8 11.8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14v-3h6v3M12 8v3" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Established Presence
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Over 40 years experience as a fire safety solutions provider in Kenya covering multiple sectors and a range of international clients.
                </p>
              </div>

              {/* Card 03 - Quality */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-red-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-red-600 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  Quality
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Committed to providing safe, reliable and quality fire equipment, adhering to internationally-recognised BS-EN3 standards.
                </p>
              </div>

              {/* Card 04 - Technical Expertise */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-slate-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-slate-700 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.25c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zM9 15l2.25 2.25L15 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  Technical Expertise
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Fully trained and qualified technicians for expert installation and services.
                </p>
              </div>

              {/* Card 05 - Innovation */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-amber-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M12 3c-3.314 0-6 2.686-6 6 0 2.165 1.148 4.062 2.869 5.111.45.275.731.765.731 1.289V16.5h4.8v-1.1c0-.524.281-1.014.731-1.289C16.852 13.062 18 11.165 18 9c0-3.314-2.686-6-6-6z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                  Innovation
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We strive to be at the forefront of product innovation, providing our clients with the latest technology in fire equipment.
                </p>
              </div>

              {/* Card 06 - Sustainability (NEW ICON: LEAF / ECO RECYCLING LOOP) */}
              <div className="group bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full stroke-[1.5]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-500 transition-colors">
                  Sustainability
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our 3R strategy of Reduce, Reuse, and Recycle is key to our sustainability effort. We are committed to doing our bit for the environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- CONTRACT FORMS MODAL POPUP (MATCHES ATTACHED WIX DESIGN) --- */}
      {isContractModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 p-8 sm:p-10 text-slate-800">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 transition-colors"
              aria-label="Close Modal"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 stroke-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header Icon */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-indigo-900/80 flex items-center justify-center text-indigo-900 mb-3">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 stroke-[1.8]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-indigo-950 font-bold tracking-tight">
                Contract Forms
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                Provide your contact details below to download the relevant contract forms.
              </p>
            </div>

            {!formSubmitted ? (
              /* Short Lead Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="directorsName"
                    required
                    placeholder="Director's Name"
                    value={formData.directorsName}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-800 placeholder-slate-500 outline-none"
                  />
                  <input
                    type="tel"
                    name="directorsMobile"
                    required
                    placeholder="Director's Mobile"
                    value={formData.directorsMobile}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-800 placeholder-slate-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-800 placeholder-slate-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-800 placeholder-slate-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="kraPin"
                    required
                    placeholder="KRA PIN"
                    value={formData.kraPin}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-800 placeholder-slate-500 outline-none"
                  />
                  <select
                    name="serviceArea"
                    required
                    value={formData.serviceArea}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 text-xs text-slate-700 outline-none bg-white"
                  >
                    <option value="" disabled>
                      Service Area
                    </option>
                    <option value="nairobi">Nairobi Region</option>
                    <option value="mombasa">Mombasa / Coast</option>
                    <option value="nakuru">Rift Valley / Nakuru</option>
                    <option value="kisumu">Western / Kisumu</option>
                    <option value="other">Other Regions in Kenya</option>
                  </select>
                </div>

                {/* Checkbox Agreement */}
              <div className="flex items-center gap-2 pt-2">
  <input
    type="checkbox"
    id="terms"
    checked={agreedTerms}
    onChange={(e) => setAgreedTerms(e.target.checked)}
    className="w-4 h-4 text-red-600 rounded border-slate-300 focus:ring-red-500 cursor-pointer"
  />
  <label htmlFor="terms" className="text-xs text-slate-600">
    I agree to the{' '}
    <a
      href="/docs/terms-and-conditions.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 underline font-semibold hover:text-red-700 cursor-pointer"
    >
      Terms &amp; Conditions
    </a>
  </label>
</div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-indigo-950 hover:bg-indigo-900 text-white font-semibold py-3 rounded-md text-xs tracking-wide transition-colors shadow-md"
                >
                  Access AMC Downloads &rarr;
                </button>
              </form>
            ) : (
              /* Success & Download Options */
              <div className="space-y-4 text-center py-4">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs">
                  Thank you! Access granted to official Annual Maintenance Contracts.
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="/docs/fire-equipment-amc.pdf"
                    download
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-red-50 hover:border-red-200 transition-all text-left group"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-red-600">
                        1. Fire Equipment Annual Maintenance Contract (AMC)
                      </p>
                      <p className="text-[11px] text-slate-500">PDF Contract Document</p>
                    </div>
                    <span className="text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                      Download &darr;
                    </span>
                  </a>

                  <a
                    href="/docs/fire-alarm-amc.pdf"
                    download
                    className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-red-50 hover:border-red-200 transition-all text-left group"
                  >
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-red-600">
                        2. Fire Alarm Annual Maintenance Contract (AMC)
                      </p>
                      <p className="text-[11px] text-slate-500">PDF Contract Document</p>
                    </div>
                    <span className="text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                      Download &darr;
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}