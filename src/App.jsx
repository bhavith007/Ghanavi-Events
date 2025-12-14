import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { site } from './data/siteData'

export default function App(){
  return (
    <div className="min-h-screen text-white bg-dark font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services services={site.services} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
