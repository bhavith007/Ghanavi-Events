import React from 'react'

export default function SkeletonLoader({ width = 'w-full', height = 'h-full' }) {
  return (
    <div className={`${width} ${height} relative overflow-hidden rounded-lg bg-gradient-to-br from-dark/50 via-dark/30 to-dark/50 border border-gold/10`}>
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/20 to-transparent" style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 2.5s infinite'
      }} />
      
      {/* Decorative gold accents */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gold/5 rounded-br-full blur-xl" />
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gold/5 rounded-tl-full blur-lg" />
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

export function SkeletonGallery() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg bg-gradient-to-br from-dark/50 via-dark/30 to-dark/50 border border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/20 to-transparent" style={{
        backgroundSize: '200% 100%',
        animation: 'shimmer 2.5s infinite'
      }} />
      <div className="absolute top-0 left-0 w-16 h-16 bg-gold/5 rounded-br-full blur-xl" />
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gold/5 rounded-tl-full blur-lg" />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

export function SkeletonServiceCard() {
  return (
    <div className="space-y-4">
      <div className="h-48 relative overflow-hidden rounded-lg bg-gradient-to-br from-dark/50 via-dark/30 to-dark/50 border border-gold/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent" />
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/20 to-transparent" style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2.5s infinite'
        }} />
        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </div>
      <div className="h-6 relative overflow-hidden rounded bg-gradient-to-r from-dark/50 to-dark/30 border border-gold/10">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/15 to-transparent" style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite'
        }} />
        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </div>
      <div className="h-4 w-3/4 relative overflow-hidden rounded bg-gradient-to-r from-dark/50 to-dark/30 border border-gold/10">
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-gold/15 to-transparent" style={{
          backgroundSize: '200% 100%',
          animation: 'shimmer 2.2s infinite'
        }} />
        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </div>
    </div>
  )
}
