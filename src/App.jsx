import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles, Sun, Moon, Lightbulb, Cpu, ShieldCheck, Clock, Eye, ChevronRight } from 'lucide-react'
import HeroSpline from './components/HeroSpline'
import Viewer360 from './components/Viewer360'
import RoomSimulator from './components/RoomSimulator'
import Configurator from './components/Configurator'
import TechSection from './components/TechSection'
import FAQAccordion from './components/FAQAccordion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [darkRoom, setDarkRoom] = useState(false)

  return (
    <div className={`min-h-screen bg-[#0b0c10] text-white relative`}>      
      <Navbar darkRoom={darkRoom} onToggleDarkRoom={() => setDarkRoom(v => !v)} />

      {/* HERO */}
      <section className="relative h-[90vh] overflow-hidden">
        <HeroSpline />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10]/10 via-[#0b0c10]/40 to-[#0b0c10] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-24 flex flex-col items-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center text-5xl md:text-7xl font-semibold tracking-[-0.02em] font-[PlayfairDisplay] drop-shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Arcadia Chandeliers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 max-w-3xl text-center text-zinc-300"
          >
            Sculptural light for the future home. Precision, elegance, and intelligent glow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a href="/collection" className="group relative inline-flex items-center overflow-hidden rounded-full border border-cyan-400/40 bg-black/40 px-6 py-3 text-sm font-medium backdrop-blur-md">
              <span className="absolute inset-[-1px] bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 blur-xl transition group-hover:opacity-100" />
              <span className="relative flex items-center gap-2 text-cyan-100">
                Explore the Collection <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a href="#configurator" className="relative inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(56,189,248,0.45)]">
              Configure Your Chandelier
            </a>
          </motion.div>
        </div>
      </section>

      {/* 360 Viewer Preview */}
      <section id="viewer" className="relative py-24 px-6 bg-gradient-to-b from-[#0b0c10] to-[#0b0c10]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-[PlayfairDisplay]" style={{ fontFamily: 'Playfair Display, serif' }}>360° Experience</h2>
            <a href="/collection" className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-2">
              View in 360° <ChevronRight size={18} />
            </a>
          </div>
          <p className="mt-3 text-zinc-400">Rotate, switch finishes, and toggle lights to explore the sculpture in space.</p>
          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-8 shadow-2xl shadow-cyan-500/10">
            <Viewer360 />
          </div>
        </div>
      </section>

      {/* Room Simulator */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-[PlayfairDisplay]" style={{ fontFamily: 'Playfair Display, serif' }}>Room Simulator</h2>
          </div>
          <p className="mt-3 text-zinc-400">Preview Arcadia in curated interiors. Adjust intensity, color temperature, and hanging height.</p>
          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-8">
            <RoomSimulator />
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0b0c10] via-[#0b0c10] to-[#0b0c10]">
        <div className="max-w-6xl mx-auto">
          <TechSection />
        </div>
      </section>

      {/* Configurator */}
      <section id="configurator" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Configurator />
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-[#0b0c10] to-black/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-[PlayfairDisplay]" style={{ fontFamily: 'Playfair Display, serif' }}>Installation & Support</h2>
            <a href="/support" className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-2">Explore Support <ChevronRight size={18} /></a>
          </div>
          <p className="mt-3 text-zinc-400">Guides, mini-animations, and FAQs.</p>
          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-8">
            <FAQAccordion compact />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Dark Room Overlay */}
      {darkRoom && (
        <div className="pointer-events-none fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition" />
      )}
    </div>
  )
}
