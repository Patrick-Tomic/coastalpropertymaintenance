import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-sand-400' : 'text-white hover:text-sand-300'}`

  return (
    <nav className="bg-navy-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop nav — links on the left */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/what-we-clean" className={linkClass}>What We Clean</NavLink>
            <NavLink to="/services/residential" className={linkClass}>Residential</NavLink>
            <NavLink to="/services/commercial" className={linkClass}>Commercial</NavLink>
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
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-4 py-2 flex flex-col">
          <NavLink to="/" className={linkClass} end>
            <span className="block py-3">Home</span>
          </NavLink>
          <NavLink to="/what-we-clean" className={linkClass}>
            <span className="block py-3">What We Clean</span>
          </NavLink>
          <NavLink to="/services/residential" className={linkClass}>
            <span className="block py-3">Residential</span>
          </NavLink>
          <NavLink to="/services/commercial" className={linkClass}>
            <span className="block py-3">Commercial</span>
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            <span className="block py-3">Contact</span>
          </NavLink>
          <Link
            to="/contact"
            className="bg-sand-500 hover:bg-sand-600 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-center my-2"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  )
}
