import { Link } from 'react-router-dom'

const services = [
  {
    title: 'HOA Power Washing',
    desc: 'Keep common areas, fences, entrances, and community spaces clean and well-maintained. We work with HOA boards and property managers to schedule minimal-disruption service.',
  },
  {
    title: 'Hotels & Inns',
    desc: 'First impressions matter. We clean building exteriors, walkways, pool decks, and parking areas to ensure guests arrive at a spotless property.',
  },
  {
    title: 'Gas Stations',
    desc: 'Oil and fuel stains, gum, and heavy traffic residue are no match for our commercial-grade equipment. We keep your forecourt clean and compliant.',
  },
  {
    title: 'Construction Sites',
    desc: 'Post-construction cleaning of concrete, masonry, and new construction surfaces. We remove paint overspray, mortar, and construction debris from exterior surfaces.',
  },
  {
    title: 'Restaurants',
    desc: 'Grease buildup, dumpster areas, and customer-facing exteriors cleaned regularly to maintain hygiene standards and curb appeal for your diners.',
  },
  {
    title: 'Apartment Complexes',
    desc: 'Regular exterior maintenance for multi-unit properties — building facades, breezeways, parking structures, and pool areas kept pristine for residents.',
  },
]

export default function Commercial() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Commercial Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Scalable commercial power washing for businesses, property managers, and
            facilities throughout Palm Coast.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-ocean-500 rounded-xl mb-5 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need a Custom Commercial Quote?</h2>
            <p className="text-blue-200 mb-6">
              We offer recurring service contracts and volume discounts for commercial properties.
            </p>
            <Link
              to="/contact"
              className="bg-sand-500 hover:bg-sand-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
