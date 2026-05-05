import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const mainImages   = ['/roofcleaning.png', '/roofcleaningB.png', '/walkway.png', '/yard.png']
const beforeImages = ['/dirty.png',        '/dirtyroof.png',     '/fenceA.png',  '/gutterA.png']
const afterImages  = ['/clean.png',        '/cleanroof.png',     '/fenceB.png',  '/gutterB.png']

const surfaces = [
  {
    title: 'Asphalt Shingle Roofs',
    desc: 'We use safe low-pressure soft-wash techniques to remove black algae streaks, moss, lichen, and mold — extending roof life without voiding manufacturer warranties.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    title: 'Vinyl Siding',
    desc: "Dirt, mildew, and green algae thrive on vinyl in Florida's humidity. Our soft-wash treatment restores your home's curb appeal without high-pressure damage.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: 'Driveways & Walkways',
    desc: 'High-pressure cleaning blasts away oil stains, tire marks, mold, and embedded grime from concrete, pavers, and asphalt. Optional sealing available.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 1h8zM13 8h4l3 5v3h-7V8z" />
      </svg>
    ),
  },
  {
    title: 'Patios & Pool Decks',
    desc: 'We clean and seal concrete, travertine, and paver patios — removing algae slick spots, stains, and weathering for a safe and beautiful outdoor space.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16v2H4zM4 10h16v2H4zM4 14h16v2H4zM4 18h16v2H4" />
      </svg>
    ),
  },
  {
    title: 'Wood & Fences',
    desc: 'Restore weathered wood decks, fences, and pergolas with our wood-safe cleaning process that removes gray weathering and brings back the natural color.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v16M8 4v16M12 4v16M16 4v16M20 4v16M4 8h16M4 16h16" />
      </svg>
    ),
  },
  {
    title: 'Full Home Soft Wash',
    desc: 'A comprehensive exterior cleaning of your entire home — roof, siding, gutters, fascia, and more — all in one visit using our safe, eco-friendly solutions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13l2 2 4-4" />
      </svg>
    ),
  },
]

export default function WhatWeClean() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % mainImages.length), 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-4">What We Clean</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                From rooftops to driveways, we handle every surface on your property
                using safe and effective methods.
              </p>
            </div>

            {/* Right: main image + before/after below */}
            <div className="flex flex-col gap-3">

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                <img key={mainImages[idx]} src={mainImages[idx]} alt="Professional cleaning result" className="w-full h-full object-cover" />
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                  <img key={beforeImages[idx]} src={beforeImages[idx]} alt="Before cleaning" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-gray-900/75 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                  <img key={afterImages[idx]} src={afterImages[idx]} alt="After cleaning" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 left-2 bg-[#00aeef] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    AFTER
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {surfaces.map((surface) => (
              <div
                key={surface.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-ocean-500 bg-ocean-50 rounded-xl p-3 inline-flex mb-5">
                  {surface.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{surface.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{surface.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-navy-800 text-white">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">Don't See Your Surface?</h2>
          <p className="text-blue-200 mb-6">
            Contact us — we handle a wide range of exterior cleaning needs.
          </p>
          <Link
            to="/contact"
            className="bg-sand-500 hover:bg-sand-600 text-white font-bold px-8 py-3 rounded-xl transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
