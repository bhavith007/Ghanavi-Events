import React from 'react'
import ServiceCard from './ServiceCard'
import { Star } from 'lucide-react'

export default function Services({services=[]}){
  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/30"></div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gold tracking-widest uppercase">Our Services</h2>
          <div className="flex-1 h-px bg-gold/30"></div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i)=> (
            <ServiceCard key={s.key} title={s.title} description={s.desc} images={s.images} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
