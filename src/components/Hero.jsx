import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = '/hero1.png'
    img.onload = () => setBgLoaded(true)
    // Start loading regardless of result
    setTimeout(() => setBgLoaded(true), 3000) // fallback after 3 seconds
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-dark md:items-start md:pt-28">
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${bgLoaded ? 'opacity-40' : 'opacity-0'}`}
        style={{ backgroundImage: "url('/hero1.png')" }}
      />
      
      {/* Skeleton/placeholder while loading */}
      {!bgLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/50 to-dark/50 animate-pulse" />
      )}
      
      {/* Subtle top-down gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/30 to-dark/80" />
      
      {/* Minimal gold accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div className="max-w-4xl text-center p-6 relative z-10">
        <motion.h1 
          initial={{y:60, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{duration:1.8, ease:[0.22, 1, 0.36, 1]}} 
          className="text-7xl md:text-9xl font-tangerine font-bold text-gold tracking-wide"
          style={{textShadow: '0 0 20px rgba(212, 175, 55, 0.3)'}}
        >
          Ghanavi Events
        </motion.h1>
        <motion.p 
          initial={{x:-80, opacity:0}} 
          animate={{x:0, opacity:1}} 
          transition={{delay:0.4, duration:1.6, ease:[0.22, 1, 0.36, 1]}} 
          className="mt-4 text-lg md:text-2xl text-white/90 font-cormorant font-light tracking-wider italic"
        >
          Where Every Celebration Becomes a Cherished Memory
        </motion.p>
        <motion.div 
          initial={{scale:0.8, opacity:0}} 
          animate={{scale:1, opacity:1}} 
          transition={{delay:0.8, duration:1.4, ease:[0.22, 1, 0.36, 1]}} 
          className="mt-12 md:mt-20 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="group px-8 py-3 bg-gold text-dark font-semibold rounded-full hover:bg-gold-dim transition-all duration-700 transform hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Plan Your Event</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>
          </a>
          <a href="#gallery" className="px-8 py-3 glass border border-gold/30 text-gold font-semibold rounded-full hover:border-gold hover:bg-gold/10 transition-all duration-700">View Portfolio</a>
        </motion.div>
      </div>
    </section>
  )
}
