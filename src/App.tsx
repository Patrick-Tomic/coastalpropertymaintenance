import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhatWeClean from './pages/WhatWeClean'
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-clean" element={<WhatWeClean />} />
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
