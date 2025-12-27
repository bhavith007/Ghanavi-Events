import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryDetail from '../components/GalleryDetail'
import { galleryFolders } from '../data/siteData'

export default function GalleryPage() {
  const { folderKey } = useParams()
  const folder = galleryFolders.find(f => f.key === folderKey)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [folderKey])

  if (!folder) {
    return (
      <div className="min-h-screen text-white bg-dark font-poppins">
        <Navbar />
        <div className="py-32 text-center">
          <h1 className="text-3xl font-playfair text-gold mb-4">Gallery Not Found</h1>
          <Link to="/#gallery" className="text-gold hover:text-gold/80 transition">
            Back to Gallery
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white bg-dark font-poppins">
      <Navbar />
      <main className="pt-24 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 mb-4 relative z-50">
          <Link 
            to="/#gallery" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition bg-dark/0 px-2 py-1 rounded"
          >
            <ChevronLeft size={18} />
            Back to Gallery
          </Link>
        </div>
        <GalleryDetail folderName={folder.name} folderKey={folder.key} />
      </main>
      <Footer />
    </div>
  )
}
