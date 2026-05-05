import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-3">
              Coastal Property Maintenance
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Professional power washing and soft wash services in Palm Coast, FL.
              Available 7 days a week for residential and commercial properties.
            </p>
            <p className="text-xs text-gray-500">Member of the Power Washing Union</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-sand-400 transition-colors">Home</Link></li>
              <li><Link to="/what-we-clean" className="hover:text-sand-400 transition-colors">What We Clean</Link></li>
              <li><Link to="/services/residential" className="hover:text-sand-400 transition-colors">Residential Services</Link></li>
              <li><Link to="/services/commercial" className="hover:text-sand-400 transition-colors">Commercial Services</Link></li>
              <li><Link to="/contact" className="hover:text-sand-400 transition-colors">Contact & Free Quote</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <p className="text-sm text-gray-400 mb-2">Palm Coast, FL</p>
            <a
              href="tel:8563590339"
              className="text-sand-400 hover:text-sand-300 font-semibold text-sm mb-5 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              856-359-0339
            </a>
            <p className="text-xs text-gray-500 mb-4">Available 7 days a week</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100078922907418" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-sand-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Coastal Property Maintenance. All rights reserved. | Palm Coast, FL
        </div>
      </div>
    </footer>
  )
}
