import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Simple faux 360 using rotated gradients as placeholder (no external images needed)
export default function Viewer360() {
  const [angle, setAngle] = useState(0)
  const [finish, setFinish] = useState('gold')
  const [lightsOn, setLightsOn] = useState(true)

  const ringColor = {
    gold: 'from-yellow-300 to-amber-500',
    black: 'from-zinc-700 to-zinc-900',
    silver: 'from-slate-200 to-slate-500'
  }[finish]

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-8 items-center">
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/10">
        <motion.div
          className={`absolute inset-8 rounded-full bg-gradient-to-br ${ringColor} shadow-[0_0_80px_rgba(56,189,248,0.15)]`}
          style={{ filter: lightsOn ? 'brightness(1)' : 'brightness(0.4)' }}
          animate={{ rotate: angle }}
          transition={{ type: 'spring', stiffness: 60, damping: 12 }}
        />
        <div className="absolute inset-0" onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = e.clientX - rect.left
          const pct = x / rect.width
          setAngle(Math.round(pct * 360))
        }} />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-zinc-400">Drag to rotate · Angle {angle}°</div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-zinc-300">Frame Finish</label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {['gold','black','silver'].map(f => (
              <button key={f} onClick={() => setFinish(f)} className={`rounded-full px-3 py-2 text-sm border ${finish===f?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>{f}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-zinc-300">Lights</label>
          <div className="mt-2 inline-flex items-center gap-2">
            <button onClick={() => setLightsOn(true)} className={`rounded-full px-3 py-2 text-sm border ${lightsOn?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>On</button>
            <button onClick={() => setLightsOn(false)} className={`rounded-full px-3 py-2 text-sm border ${!lightsOn?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>Off</button>
          </div>
        </div>
      </div>
    </div>
  )
}
