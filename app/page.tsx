"use client";
import { useState } from "react";
import Image from "next/image";
import Tiltcard from "./components/Tiltcard";
import ContactModal from "./components/ContactModal";
import OceanEffects from "./components/OceanEffects";

const products = [
  {
    title: "Fish Oil",
    desc: "Custom EPA/DHA specs, deodorized, bulk packaging available.",
    img: "/logo.png",
    sectionId: "section-3",
  },
  {
    title: "Omega-3 Powder",
    desc: "Plant-based DHA/EPA solutions for EU/NA supplement brands.",
    img: "/logo.png",
    sectionId: "section-4",
  },
  {
    title: "capsules",
    desc: "Customized processing for deep-sea derived ingredients and intermediates.",
    img: "/logo.png",
    sectionId: "section-5",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#EDECE9] via-[#E2E2E2] to-[#DEDFE0] font-sans dark:bg-black">
      <OceanEffects />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}

      {/* Fixed contact FAB — bottom-left */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed bottom-8 left-8 z-40 w-14 h-14 rounded-full bg-zinc-800 shadow-lg hover:bg-zinc-700 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        title="Contact Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
      <main className="flex min-h-screen w-full flex-col items-center justify-between sm:items-start">
        <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory justify-between scroll-smooth">

          {/* Section 1 — Hero */}
          <section className="relative h-screen snap-start flex items-center justify-center bg-[#E2E2E2]/80 text-[#66ccff]">
            <div className="w-full max-w-4xl items-center px-6 mx-auto">
              <Image
                src="/logo_transparent.png"
                alt="HWI SENN"
                width={1400}
                height={1400}
                className="mx-auto w-full h-auto"
                priority
              />
            </div>

            {/* LA Warehouse Badge */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4 rounded-full border border-zinc-300 bg-white/70 px-8 py-4 shadow-sm backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-base font-medium tracking-wide text-zinc-600">
                Los Angeles Warehouse &nbsp;·&nbsp; US Domestic Shipping
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left -mt-24">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Omega-3 Fatty Acids: Essential Nutrients for Brain and Heart Health
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Looking for more information or need to contact us?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowContact(true)}
                  className="px-6 py-3 rounded-full bg-zinc-800 text-white text-sm font-semibold tracking-wide hover:bg-zinc-700 transition-colors shadow-sm"
                >
                  Contact Us →
                </button>
                <a
                  href="https://www.linkedin.com/in/shelley-jiang-1a2b2337/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-300 text-zinc-600 hover:bg-zinc-100 hover:text-[#0A66C2] transition-colors"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* Section 2 — Products */}
          <section className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0]/80 text-zinc-600">
            <div className="relative z-10 w-full max-w-7xl items-center px-6 mx-auto">
              <h2 className="text-4xl text-center font-semibold">Products</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(product.sectionId)}
                    className="text-left cursor-pointer group"
                  >
                    <Tiltcard>
                      <div className="bg-white rounded-lg shadow-md transition-shadow group-hover:shadow-lg">
                        <Image
                          src={product.img}
                          alt={product.title}
                          width={500}
                          height={500}
                          className="mt-4 w-full h-auto"
                        />
                        <h3 className="text-2xl font-semibold">{product.title}</h3>
                        <p className="mt-2 text-xl text-gray-700">{product.desc}</p>
                      </div>
                    </Tiltcard>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 — Fish Oil */}
          <section id="section-3" className="h-screen snap-start flex items-center justify-center bg-[#E2E2E2]/80 text-zinc-700 overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

              {/* Left: intro + highlights */}
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-xl font-bold uppercase tracking-wider text-zinc-500">Fish Oil</p>
                <h2 className="text-4xl font-extrabold leading-tight text-zinc-900 tracking-tight">
                  Ultra-Pure Omega-3<br />Fatty Acids
                </h2>
                <p className="text-lg leading-8 font-medium text-zinc-800">
                  Highly concentrated EPA/DHA for nutritional and pharmaceutical use. Exceeds USP, EP and GOED monograph standards. FOS-qualified, fully traceable supply chain.
                </p>
                <ul className="flex flex-col gap-2 text-xl text-zinc-700 mt-1">
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">Ethyl Ester concentrates up to 60–70% &amp; 84%</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">TG &amp; rTG form available</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">Custom EPA/DHA ratios on request (% or mg/g)</span></li>
                </ul>
                <p className="text-sm font-semibold text-zinc-400 border-t border-zinc-300 pt-3 mt-1 tracking-wide uppercase">
                  Packing: N₂-protected iron drum &nbsp;·&nbsp; 48 / 180 / 190 kg net
                </p>
              </div>

              {/* Right: spec table */}
              <div className="flex-1">
                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md text-lg">
                  <thead>
                    <tr className="bg-zinc-700 text-white">
                      <th className="px-4 py-3 text-left font-semibold tracking-wide text-base">Category</th>
                      <th className="px-4 py-3 text-left font-semibold tracking-wide text-base">Specifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 font-semibold text-zinc-500 text-base align-top whitespace-nowrap border-b border-zinc-100" rowSpan={8}>EE · 60–70%</td>
                      <td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 18 · DHA 12</td>
                    </tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 33 · DHA 22</td></tr>
                    <tr className="bg-zinc-50"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 40 · DHA 30</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 50 · DHA 20</td></tr>
                    <tr className="bg-zinc-50"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 10 · DHA 60</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 36 · DHA 24</td></tr>
                    <tr className="bg-zinc-50"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 20 · DHA 40</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-200">EPA 20 · DHA 50</td></tr>

                    <tr className="bg-zinc-50">
                      <td className="px-4 py-2 font-semibold text-zinc-500 text-base align-top whitespace-nowrap border-b border-zinc-100" rowSpan={4}>EE · 84%</td>
                      <td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 50 · DHA 25</td>
                    </tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 70 · DHA 8</td></tr>
                    <tr className="bg-zinc-50"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 7 · DHA 75</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-200">EPA 8 · DHA 70</td></tr>

                    <tr className="bg-zinc-50">
                      <td className="px-4 py-2 font-semibold text-zinc-500 text-base align-top whitespace-nowrap border-b border-zinc-100" rowSpan={4}>TG / rTG</td>
                      <td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 18 · DHA 12 TG</td>
                    </tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 33 · DHA 22 rTG</td></tr>
                    <tr className="bg-zinc-50"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 40 · DHA 30 rTG</td></tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800 border-b border-zinc-200">EPA 50 · DHA 20 rTG</td></tr>

                    <tr className="bg-zinc-50">
                      <td className="px-4 py-2 font-semibold text-zinc-500 text-base align-top whitespace-nowrap" rowSpan={2}>Innovative</td>
                      <td className="px-4 py-2 text-zinc-800 border-b border-zinc-100">EPA 46 · DHA 38 EE</td>
                    </tr>
                    <tr className="bg-white"><td className="px-4 py-2 text-zinc-800">EPA 97% EE</td></tr>
                  </tbody>
                </table>
              </div>

            </div>
          </section>

          {/* Section 4 — Omega-3 Powder */}
          <section id="section-4" className="h-screen snap-start flex items-center justify-center bg-[#DEDFE0]/80 text-zinc-700 overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">
              {/* Left: text */}
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-xl font-bold uppercase tracking-wider text-zinc-500">Omega-3 Powder</p>
                <h2 className="text-4xl font-extrabold leading-tight text-zinc-900 tracking-tight">
                  Dedicated Supplier of<br />Omega-3 Fatty Acids
                </h2>
                <p className="text-lg leading-8 font-medium text-zinc-800">
                  Suitable for human nutrition. Pure and innovative technology to produce microencapsulated powder of polyunsaturated fatty acids — high quality standards exceeding industry averages, with customized processing and small SKU considered.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-1 py-6">
                  {/* Fish Oil DHA */}
                  <div>
                    <p className="text-lg font-semibold uppercase tracking-wider text-zinc-400 mb-2">Fish Oil DHA</p>
                    <ul className="flex flex-col gap-1 text-xl text-zinc-800">
                      <li>DHA 10%</li>
                      <li>DHA 15%</li>
                      <li>DHA 20%</li>
                    </ul>
                  </div>
                  {/* Fish Oil EPA */}
                  <div>
                    <p className="text-lg font-semibold uppercase tracking-wider text-zinc-400 mb-2">Fish Oil EPA</p>
                    <ul className="flex flex-col gap-1 text-xl text-zinc-800">
                      <li>EPA 8% DHA 6%</li>
                      <li>EPA 10% DHA 8%</li>
                    </ul>
                  </div>
                  {/* Algae Oil DHA */}
                  <div>
                    <p className="text-lg font-semibold uppercase tracking-wider text-zinc-400 mb-2">Algae Oil DHA</p>
                    <ul className="flex flex-col gap-1 text-xl text-zinc-800">
                      <li>7% CWS</li>
                      <li>10% CWS</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm font-semibold text-zinc-400 border-t border-zinc-300 pt-3 mt-1 tracking-wide uppercase">
                  Special assay customized on request &nbsp;·&nbsp; Standard packing 25 kg / paper bag
                </p>
              </div>
              {/* Right: placeholder */}
              <div className="flex-1 flex items-center justify-center h-72 lg:h-96 rounded-xl bg-zinc-200">
                <Image src="/logo.png" alt="Omega-3 Powder" width={300} height={300} className="object-contain opacity-40" />
              </div>
            </div>
          </section>

          {/* Section 5 — Capsules */}
          <section id="section-5" className="h-screen snap-start flex items-center justify-center bg-[#E8E8E6]/80 text-zinc-700 overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10">

              {/* Left: intro */}
              <div className="flex-1 flex flex-col gap-4">
                <p className="text-xl font-bold uppercase tracking-wider text-zinc-500">Capsules</p>
                <h2 className="text-4xl font-extrabold leading-tight text-zinc-900 tracking-tight">
                  Customized Omega-3<br />Capsule Solutions
                </h2>
                <p className="text-lg leading-8 font-medium text-zinc-800">
                  Deep-sea derived Omega-3 EPA/DHA in softgel capsule form. Supports nutritional and pharmaceutical end-use applications. Custom concentrations, sizes and packaging available on request.
                </p>
                <ul className="flex flex-col gap-2 text-xl text-zinc-700 mt-1">
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">Fish oil &amp; algae oil-based formulations</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">EE, TG and rTG forms supported</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2.5 h-2 w-2 rounded-full bg-zinc-400 shrink-0"/><span className="font-medium">Custom EPA/DHA ratios &amp; capsule sizes on request</span></li>
                </ul>
                <p className="text-sm font-semibold text-zinc-400 border-t border-zinc-300 pt-3 mt-1 tracking-wide uppercase">
                  Detailed specs available upon inquiry
                </p>
              </div>

              {/* Right: contact card */}
              <div className="flex-1 flex flex-col items-center justify-center h-72 lg:h-96 rounded-2xl border-2 border-dashed border-zinc-300 bg-white/50 gap-5">
                <p className="text-6xl">💊</p>
                <p className="text-2xl font-extrabold text-zinc-800 tracking-tight">Contact for More</p>
                <p className="text-base font-medium text-zinc-500 text-center max-w-xs leading-7">
                  Full product catalogue, certifications and custom formulation details available on request.
                </p>
                <button
                  onClick={() => setShowContact(true)}
                  className="mt-2 px-6 py-3 rounded-full bg-zinc-800 text-white text-sm font-semibold tracking-wide hover:bg-zinc-700 transition-colors"
                >
                  Get in Touch →
                </button>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
