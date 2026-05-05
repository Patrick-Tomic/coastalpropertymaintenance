import { useState, FormEvent, ChangeEvent } from 'react'

const SERVICES = [
  'Roof Wash',
  'Gutters',
  'House Wash',
  'Driveway Cleaning & Sealing',
  'Patio Cleaning',
  'Wood & Fence Cleaning',
  'Commercial Service',
  'Other',
]

type FormState = {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  message: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const API_URL = import.meta.env.VITE_API_URL ?? '/api/quote'

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`Server responded with ${res.status}`)
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get a Free Quote</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you quickly. Available 7 days a week.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-0.5">Prefer to talk? Call us directly</p>
            <p className="text-navy-800 font-bold text-lg">Available 7 days a week</p>
          </div>
          <a
            href="tel:8563590339"
            className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            856-359-0339
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {status === 'success' ? (
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy-800 mb-3">Request Received!</h2>
              <p className="text-gray-500 mb-6">
                Thank you for reaching out. We'll review your request and follow up shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-ocean-500 font-semibold hover:underline text-sm"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Request a Quote</h2>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(386) 555-0100"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent bg-white transition"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Ocean Dr, Palm Coast, FL 32137"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent resize-none transition"
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-navy-800 hover:bg-navy-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-base transition-colors"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Quote Request'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll respond within 24 hours. Available 7 days a week.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
