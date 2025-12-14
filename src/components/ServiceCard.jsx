import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ServiceCard({title, description, images = [], index = 0}){
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const hasMultipleImages = images.length > 1

  // Different animation directions based on card index
  const directions = [
    { x: '100%' }, // slide from right
    { y: '100%' }, // slide from bottom
    { x: '-100%' }, // slide from left
    { y: '-100%' }, // slide from top
  ]
  
  const exitDirections = [
    { x: '-100%' },
    { y: '-100%' },
    { x: '100%' },
    { y: '100%' },
  ]

  const direction = directions[index % directions.length]
  const exitDirection = exitDirections[index % exitDirections.length]

  useEffect(() => {
    if (!hasMultipleImages) return
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [hasMultipleImages, images.length])

  return (
    <div 
      className="glass p-2 rounded-lg hover:scale-[1.02] transition-transform border-2 border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 rounded-lg overflow-hidden relative bg-dark">
        {images.length > 0 ? (
          <>
            <AnimatePresence initial={false}>
              <motion.div
                key={currentImage}
                initial={hasMultipleImages ? direction : {}}
                animate={{ x: 0, y: 0 }}
                exit={hasMultipleImages ? exitDirection : {}}
                transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={images[currentImage]} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Hover overlay with text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-dark/80 flex flex-col items-center justify-center p-4 text-center"
            >
              <h3 className="text-xl font-playfair text-gold mb-2">{title}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </motion.div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/50">No image</p>
          </div>
        )}
      </div>
    </div>
  )
}
