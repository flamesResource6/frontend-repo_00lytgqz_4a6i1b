import React from 'react'

export default function Navbar({ darkRoom, onToggleDarkRoom }){
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-cyan-300">Arcadia</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#viewer" className="hover:text-white">360°</a>
          <a href="#configurator" className="hover:text-white">Configurator</a>
          <a href="/blog" className="hover:text-white">Magazine</a>
          <a href="/support" className="hover:text-white">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onToggleDarkRoom} className={`rounded-full border px-4 py-2 text-sm ${darkRoom? 'border-cyan-400 text-cyan-200' : 'border-white/10 text-zinc-300'} bg-white/5`}>Dark Room</button>
          <a href="#configurator" className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 text-sm">Configure</a>
        </div>
      </div>
    </div>
  )
}
