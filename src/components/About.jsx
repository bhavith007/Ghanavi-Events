import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function About(){
  const [currentImage, setCurrentImage] = useState(0)
  const images = ['/a1.png', '/a2.png', '/a3.png']
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gold/30"></div>
            <h2 className="text-2xl md:text-3xl font-playfair text-gold tracking-widest uppercase">About Us</h2>
            <div className="flex-1 h-px bg-gold/30"></div>
          </div>
          <p className="mt-4 text-white/80">We craft unforgettable luxury experiences — engagement parties, weddings, and more. Our design language is dark, glassy and accented with gold.</p>
        </div>
        <div className="glass p-2 rounded-lg border-2 border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          <div className="h-56 rounded-lg overflow-hidden relative bg-dark">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentImage}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={images[currentImage]} 
                  alt={`About ${currentImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
