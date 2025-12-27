import React, {useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [showFallbackLogo, setShowFallbackLogo] = useState(false)
  const links = ['Home','About','Services','Gallery','Contact']

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      const scrollPos = window.scrollY + 200
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActive(links[i].toLowerCase())
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full top-4 z-40 pointer-events-none px-4">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between glass rounded-2xl shadow-2xl backdrop-blur-lg pointer-events-auto">
        <a href="#home" onClick={()=>setActive('home')} className="hover:text-gold-dim transition-colors cursor-pointer inline-flex items-center gap-3 p-1 md:p-2">
          {!showFallbackLogo && (
            <img src="/logo.png" alt="Ghanavi Events" onError={() => setShowFallbackLogo(true)} className="h-12 md:h-16 w-auto object-contain block" />
          )}
          {showFallbackLogo && (
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
              <circle cx="50" cy="50" r="48" fill="#D4AF37" />
              <text x="50%" y="58%" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="44" fill="#071014">G</text>
            </svg>
          )}
        </a>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l=> <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setActive(l.toLowerCase())} className={`hover:text-gold-dim rounded-md px-2 py-1 transition-colors ${active === l.toLowerCase() ? 'text-gold font-semibold' : ''}`}>{l}</a>)}
        </nav>
        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
            {open ? <X className="text-gold" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{height:0, opacity:0, y: -10}} 
            animate={{height:'auto', opacity:1, y: 0}} 
            exit={{height:0, opacity:0, y: -10}}
            transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
            className="md:hidden mt-2 pointer-events-auto overflow-hidden"
          >
            <div className="max-w-6xl mx-auto p-6 glass flex flex-col gap-2 rounded-xl shadow-lg border border-gold/20">
              {links.map((l, i) => (
                <motion.a 
                  key={l}
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                  href={`#${l.toLowerCase()}`} 
                  onClick={()=>{setActive(l.toLowerCase()); setOpen(false)}} 
                  className={`block px-4 py-3 rounded-lg hover:bg-gold/10 transition-all duration-300 ${active === l.toLowerCase() ? 'text-gold font-semibold bg-gold/5' : 'text-white/80'}`}
                >
                  {l}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
