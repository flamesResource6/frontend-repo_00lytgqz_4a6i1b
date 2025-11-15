import React from 'react'
import { Cpu, Lightbulb, ShieldCheck, Clock } from 'lucide-react'

const features = [
  { icon: Lightbulb, title: 'High‑Efficiency LEDs', desc: 'Luminous efficacy above 140 lm/W with precision optics.' },
  { icon: Cpu, title: 'Smart Control', desc: 'Adaptive dimming, scenes, and voice control.' },
  { icon: ShieldCheck, title: 'Premium Materials', desc: 'Aerospace aluminum, sapphire coating, crystal diffusion.' },
  { icon: Clock, title: '50,000h Lifespan', desc: 'Thermal architecture engineered for longevity.' },
]

export default function TechSection(){
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-[PlayfairDisplay]" style={{ fontFamily: 'Playfair Display, serif' }}>Arcadia Technology</h2>
      <p className="mt-3 text-zinc-400">Light, reimagined through engineering and art.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 blur-2xl transition group-hover:opacity-100 pointer-events-none" />
            <f.icon className="text-cyan-300" />
            <div className="mt-4 text-xl font-semibold">{f.title}</div>
            <div className="mt-1 text-zinc-400 text-sm">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
