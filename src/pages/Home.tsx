import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const heroImages = ['/truck.png', '/hero.png', '/example.png', '/equipment.png']

const serviceCards = [
  {
    title: 'Roof Wash',
    desc: 'Safe soft-wash treatments that remove algae, moss, and stains without damaging your shingles.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
      </svg>
    ),
  },
  {
    title: 'Deck Cleaning',
    desc: 'Restore the natural beauty of your wood or composite deck with professional cleaning.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'House Wash',
    desc: 'Full exterior soft-wash cleaning for vinyl siding, brick, stucco, and more.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: 'Concrete Wash & Seal',
    desc: 'High-pressure cleaning and sealing of driveways and patios for lasting protection.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3h14a1 1 0 011 1v4H4V4a1 1 0 011-1zM4 8h16v4H4zM4 12h16v4H4zM4 16h16v4H4" />
      </svg>
    ),
  },
]

const steps = [
  {
    num: '01',
    title: 'Call',
    desc: 'Give us a call or fill out our online form to discuss your property needs.',
  },
  {
    num: '02',
    title: 'Schedule',
    desc: "We'll set up a convenient time — available 7 days a week to work around you.",
  },
  {
    num: '03',
    title: 'Enjoy',
    desc: 'Sit back and enjoy a spotless property. Results guaranteed.',
  },
]

const trustPoints = [
  { title: '7 Days a Week', desc: 'We work around your schedule, including weekends and holidays.' },
  { title: 'Safe Methods', desc: 'Soft-wash techniques that protect your property and landscaping.' },
  { title: 'Fully Insured', desc: 'Complete peace of mind on every job we take.' },
  { title: 'Results Guaranteed', desc: 'Best results possible or we come back and make it right.' },
]

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#00aeef]/10 border border-[#00aeef]/30 rounded-full px-4 py-1.5 text-[#00aeef] text-sm font-medium mb-6">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Power Washing Union Member
              </div>
              <img
                src="/logo.png"
                alt="Coastal Property Maintenance"
                className="w-72 md:w-80 mb-6"
              />
              <p className="text-lg md:text-xl text-gray-700 mb-3">
                Palm Coast's trusted professionals for roof washing, house washing,
                driveway cleaning, and more.
              </p>
              <p className="text-gray-500 text-sm mb-10">
                Available 7 days a week &nbsp;·&nbsp; Residential &amp; Commercial
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-sand-500 hover:bg-sand-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors text-center shadow-md"
                >
                  Schedule Now — 20% OFF
                </Link>
                <Link
                  to="/what-we-clean"
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors text-center"
                >
                  What We Clean
                </Link>
              </div>
            </div>

            {/* Right: rotating images */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100 lg:w-[calc(100%+10vw)]">
              <img
                key={heroImages[heroIndex]}
                src={heroImages[heroIndex]}
                alt="Professional power washing service"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-3">Our Core Services</h2>
          <p className="text-gray-500 text-center mb-10">Professional results using safe and effective processes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start gap-4"
              >
                <div className="text-ocean-500 bg-ocean-50 rounded-xl p-3">{card.icon}</div>
                <h3 className="font-bold text-navy-800 text-lg">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{card.desc}</p>
                <Link to="/contact" className="text-ocean-500 hover:text-ocean-600 text-sm font-semibold">
                  Get a Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-3">How It Works</h2>
          <p className="text-gray-500 text-center mb-12">Three simple steps to a cleaner property</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy-800 text-sand-400 font-extrabold text-xl mb-5 relative z-10">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">Why Trust the Professionals</h2>
          <p className="text-blue-200/70 text-center mb-12">Your property is safe in our hands</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <div key={item.title} className="bg-navy-800 rounded-2xl p-6">
                <div className="w-10 h-10 bg-sand-500 rounded-full mb-4 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-sand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for a Cleaner Property?</h2>
          <p className="text-amber-100 mb-8 text-lg">Schedule today and save 20% on your first service</p>
          <Link
            to="/contact"
            className="bg-navy-800 hover:bg-navy-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
