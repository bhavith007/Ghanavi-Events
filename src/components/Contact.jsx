import React from 'react'
import { site } from '../data/siteData'
import { Mail, MessageCircle } from 'lucide-react'

export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/30"></div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gold tracking-widest uppercase">Contact Us</h2>
          <div className="flex-1 h-px bg-gold/30"></div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Let's Create Your Dream
          </h3>
          <h3 className="text-4xl md:text-5xl font-playfair text-gold italic mb-6">
            Celebration Together
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Get in touch with us today and let's discuss how we can bring your celebration vision to life. Quality events are just a message away.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:info@ghanavievents.com"
            className="group flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gold/60 text-gold rounded-full hover:bg-gold/10 transition-all duration-700 font-semibold relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail className="w-5 h-5" />
              Email Us
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>
          </a>
          <a 
            href={`https://wa.me/${site.phones[0].replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gold text-dark rounded-full hover:bg-gold-dim transition-all duration-700 font-semibold shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
