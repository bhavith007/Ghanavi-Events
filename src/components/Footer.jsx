import React from 'react'
import { site } from '../data/siteData'
import { MapPin, Phone, Facebook, Instagram, Twitter, Youtube, Linkedin, Sparkles } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="border-t border-gold/20 mt-12 py-6 bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="Ghanavi Events" className="h-20 md:h-24 w-auto" />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-3">
            <div className="flex flex-col gap-3">
              <h4 className="text-gold font-semibold">Contact</h4>
              <div className="flex items-start gap-2 text-white/70">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  {site.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/[^0-9]/g, '')}`} className="hover:text-gold transition-colors text-sm">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-gold font-semibold">Address</h4>
              <div className="flex items-start gap-2 text-white/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-sm">{site.address}</p>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="text-center md:text-right">
            <h4 className="text-gold font-semibold mb-2">Proprietor</h4>
            <p className="text-white/70">{site.owner}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-4">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright & Credits */}
          <div className="flex flex-col justify-center items-center gap-2 text-sm text-white/60">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>
              Designed and developed by{' '}
              <span className="group relative inline-block cursor-default">
                <span className="text-gold relative z-10">1mb</span>
                {/* Confetti burst from center */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  {/* Gold confetti */}
                  <span className="absolute w-2 h-2 bg-gold opacity-0 group-hover:animate-[confetti-1_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0'}}></span>
                  <span className="absolute w-1.5 h-1.5 bg-gold-dim opacity-0 group-hover:animate-[confetti-2_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.1s'}}></span>
                  <span className="absolute w-2 h-2 bg-gold rounded-full opacity-0 group-hover:animate-[confetti-3_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.2s'}}></span>
                  {/* White confetti */}
                  <span className="absolute w-1.5 h-1.5 bg-white opacity-0 group-hover:animate-[confetti-4_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.15s'}}></span>
                  <span className="absolute w-2 h-1 bg-white/80 opacity-0 group-hover:animate-[confetti-5_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.25s'}}></span>
                  <span className="absolute w-1 h-2 bg-white/70 opacity-0 group-hover:animate-[confetti-6_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.3s'}}></span>
                  {/* Gold variations */}
                  <span className="absolute w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:animate-[confetti-7_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.35s'}}></span>
                  <span className="absolute w-2 h-1 bg-gold-dim opacity-0 group-hover:animate-[confetti-8_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.4s'}}></span>
                  <span className="absolute w-1 h-1.5 bg-gold opacity-0 group-hover:animate-[confetti-9_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.05s'}}></span>
                  <span className="absolute w-2 h-2 bg-white/90 rounded-full opacity-0 group-hover:animate-[confetti-10_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.45s'}}></span>
                  <span className="absolute w-1.5 h-2 bg-gold-dim opacity-0 group-hover:animate-[confetti-11_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.12s'}}></span>
                  <span className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:animate-[confetti-12_3s_ease-out] group-hover:opacity-100" style={{top: '0', left: '0', animationDelay: '0.18s'}}></span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
