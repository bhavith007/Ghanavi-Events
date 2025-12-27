import React, { useEffect, useState } from 'react'

export default function Lightbox({ images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    setIndex(startIndex)
  }, [startIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIndex((i) => (i + 1) % images.length)

  if (!images || images.length === 0) return null

  const img = images[index]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 text-gold text-2xl bg-black/30 rounded-full p-3 hover:bg-black/50 shadow-[0_0_12px_rgba(212,175,55,0.5)] border border-gold/30"
      >
        ✕
      </button>

      <button
        aria-label="Previous"
        onClick={goPrev}
        className="absolute left-4 md:left-8 text-gold text-4xl bg-black/20 rounded-full p-3 hover:bg-black/40 shadow-[0_0_14px_rgba(212,175,55,0.45)] border border-gold/20"
      >
        ‹
      </button>

      <div className="max-w-[95%] max-h-[95%] flex items-center justify-center">
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-full object-contain rounded shadow-lg"
        />
      </div>

      <button
        aria-label="Next"
        onClick={goNext}
        className="absolute right-4 md:right-8 text-gold text-4xl bg-black/20 rounded-full p-3 hover:bg-black/40 shadow-[0_0_14px_rgba(212,175,55,0.45)] border border-gold/20"
      >
        ›
      </button>

      <div className="absolute bottom-6 text-gold text-sm font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
