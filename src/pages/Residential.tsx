import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Roof Treatment & Washing',
    desc: 'Our certified soft-wash roof cleaning removes harmful algae, moss, and lichen that shorten roof lifespan. We follow manufacturer-safe low-pressure methods that will not void warranties.',
    details: ['Asphalt shingle safe', 'No voided warranties', 'Kills algae at the root', 'Long-lasting results'],
  },
  {
    title: 'Soft Wash Home Cleaning',
    desc: 'A full exterior house wash using specially formulated eco-friendly cleaning solutions. We clean from top to bottom — siding, soffits, fascia, and gutters all included.',
    details: ['All siding types', 'Eco-friendly solutions', 'Removes mildew & mold', 'Improves curb appeal'],
  },
  {
    title: 'Vinyl Cleaning',
    desc: "Vinyl siding traps dirt and grows algae in Florida's humid climate. Our soft-wash process restores the bright, clean look of your home without high-pressure damage.",
    details: ['Removes green algae', 'Streak-free finish', 'Protects color integrity', 'Safe for all vinyl'],
  },
  {
    title: 'Driveway Cleaning & Resealing',
    desc: 'We pressure wash away oil stains, tire tracks, and embedded dirt, then apply a professional concrete sealer that protects your driveway and extends its life.',
    details: ['High-pressure wash', 'Oil stain treatment', 'Concrete sealing', 'Paver & asphalt options'],
  },
  {
    title: 'Wood & Fence Cleaning',
    desc: 'Revitalize your weathered wood fence, deck, or pergola. We remove gray weathering, mold, and mildew to restore the natural wood color and prepare surfaces for staining.',
    details: ['Wood-safe process', 'Prep for staining', 'Fence & deck cleaning', 'Removes gray weathering'],
  },
  {
    title: 'Patio Cleaning',
    desc: 'Whether concrete, pavers, travertine, or tile — we clean and restore your patio to a safe, attractive condition, removing algae slick spots, stains, and weathering.',
    details: ['All patio surfaces', 'Algae & moss removal', 'Pool deck safe', 'Optional sealing'],
  },
]

export default function Residential() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Residential Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Complete exterior cleaning solutions for homeowners in Palm Coast and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="bg-navy-800 hover:bg-navy-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
