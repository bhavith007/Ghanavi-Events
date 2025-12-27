import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLazyImage } from '../hooks/useLazyImage'
import SkeletonLoader from './SkeletonLoader'
import { loadFolderImages } from '../utils/imageLoader'
import Lightbox from './Lightbox'

export default function GalleryDetail({ folderName, folderKey }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const loadImages = async () => {
      try {
        const folderImages = await loadFolderImages(folderKey)
        setImages(folderImages)
      } catch (error) {
        console.error('Error loading images:', error)
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [folderKey])

  return (
    <>
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <h1 className="text-4xl md:text-5xl font-playfair text-gold tracking-widest uppercase">
            {folderName}
          </h1>
        </div>
        <div className="h-px bg-gold/30 mb-6"></div>
        

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-lg overflow-hidden">
                <SkeletonLoader />
              </div>
            ))}
          </div>
        ) : images.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, idx) => (
                <GalleryDetailImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  onOpen={() => {
                    setLightboxIndex(idx)
                    setLightboxOpen(true)
                  }}
                />
              ))}
            </div>

            {lightboxOpen && (
              <Lightbox
                images={images}
                startIndex={lightboxIndex}
                onClose={() => setLightboxOpen(false)}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No images found in this gallery.</p>
          </div>
        )}
      </div>
    </div>

    {/* Floating back button bottom-left (gold-only) */}
    <Link
      to="/#gallery"
      aria-label="Back to gallery"
      className="fixed left-6 bottom-6 z-50 grid place-items-center w-14 h-14 rounded-full text-dark bg-gold shadow-[0_14px_40px_rgba(212,175,55,0.45)] hover:scale-105 transition-transform text-2xl font-semibold"
    >
      ‹
    </Link>
    </>
  )
}

function GalleryDetailImage({ src, alt, onOpen }) {
  const { imageSrc, isLoaded, imgRef, handleLoad } = useLazyImage(src)

  return (
    <div
      ref={imgRef}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen() }}
      className="h-64 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gold/20 hover:border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
    >
      {!isLoaded && <SkeletonLoader />}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
        />
      )}
    </div>
  )
}
