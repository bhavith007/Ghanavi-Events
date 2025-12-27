import React from 'react'
import { Link } from 'react-router-dom'
import { useLazyImage } from '../hooks/useLazyImage'
import SkeletonLoader from './SkeletonLoader'
import { galleryFolders } from '../data/siteData'

export default function Gallery(){
  // Take only first 9 folders for gallery grid
  const items = galleryFolders.slice(0, 9).map((folder, idx) => ({
    ...folder,
    id: idx + 1,
    // Responsive grid spans for 9 items in 3x3
    span: 'col-span-1 row-span-1',
    height: 'h-56 md:h-64',
  }))
  
  return (
    <section id="gallery" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/30"></div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gold tracking-widest uppercase">Gallery</h2>
          <div className="flex-1 h-px bg-gold/30"></div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item)=> (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryImage({ item }) {
  const src = `/g${item.id}.png`
  const { imageSrc, isLoaded, imgRef, handleLoad } = useLazyImage(src)

  return (
    <Link to={`/gallery/${item.key}`}>
      <div 
        ref={imgRef}
        className={`${item.span} ${item.height} bg-white/5 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-gold/20 hover:border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] relative cursor-pointer group`}
      >
        {!isLoaded && <SkeletonLoader />}
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={item.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleLoad}
          />
        )}
        
        {/* Overlay with title - always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 bg-dark/60 md:bg-dark/0 md:group-hover:bg-dark/60 transition-all duration-300 flex items-center justify-center">
          <h3 className="text-white font-playfair text-lg md:text-xl text-center px-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            {item.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}
