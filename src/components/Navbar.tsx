import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-sand-400' : 'text-white hover:text-sand-300'}`

  const isServicesActive =
    location.pathname.startsWith('/services')

  return (
    <nav className="bg-navy-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop nav — links on the left */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/what-we-clean" className={linkClass}>What We Clean</NavLink>

            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServicesActive ? 'text-sand-400' : 'text-white hover:text-sand-300'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100">
                  <Link
                    to="/services/residential"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-800 hover:text-white transition-colors rounded-lg mx-1"
                  >
                    Residential
                  </Link>
                  <Link
                    to="/services/commercial"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-800 hover:text-white transition-colors rounded-lg mx-1"
                  >
                    Commercial
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* CTA — pinned to the right */}
          <Link
            to="/contact"
            className="hidden md:block bg-sand-500 hover:bg-sand-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-navy-700 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 py-4 flex flex-col gap-3">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/what-we-clean" className={linkClass}>What We Clean</NavLink>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-white w-full"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-navy-700 pl-3">
                <NavLink to="/services/residential" className={linkClass}>Residential</NavLink>
                <NavLink to="/services/commercial" className={linkClass}>Commercial</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <Link
            to="/contact"
            className="bg-sand-500 hover:bg-sand-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-center mt-1"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
