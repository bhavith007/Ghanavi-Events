import React from 'react'

export default function Gallery(){
  const items = [
    { id: 1, span: 'col-span-1 row-span-2 md:col-span-2 md:row-span-2', height: 'h-80' },
    { id: 2, span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', height: 'h-40' },
    { id: 3, span: 'col-span-1 row-span-2 md:col-span-1 md:row-span-1', height: 'h-80 md:h-40' },
    { id: 4, span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', height: 'h-40' },
    { id: 5, span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1', height: 'h-40' },
    { id: 6, span: 'col-span-1 row-span-2 md:col-span-1 md:row-span-1', height: 'h-80 md:h-40' },
    { id: 7, span: 'col-span-1 row-span-1 md:col-span-3 md:row-span-1', height: 'h-40' }
  ]
  
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gold/30"></div>
          <h2 className="text-2xl md:text-3xl font-playfair text-gold tracking-widest uppercase">Gallery</h2>
          <div className="flex-1 h-px bg-gold/30"></div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4">
          {items.map((item)=> (
            <div 
              key={item.id} 
              className={`${item.span} ${item.height} bg-white/5 rounded-lg overflow-hidden transform hover:scale-[1.02] transition border border-gold/20 hover:border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]`}
            >
              <img src={`/g${item.id}.png`} alt={`Gallery ${item.id}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
