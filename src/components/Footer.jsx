import React from 'react'

export default function Footer(){
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_80%_110%,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 relative">
        <div>
          <div className="text-2xl font-semibold"><span className="text-cyan-300">Arcadia</span></div>
          <p className="mt-3 text-zinc-400">Designer luminaires crafted with technology and art.</p>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Collection</div>
          <ul className="mt-3 space-y-2 text-zinc-400 text-sm">
            <li><a href="/collection" className="hover:text-cyan-200">All Models</a></li>
            <li><a href="#configurator" className="hover:text-cyan-200">Configurator</a></li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">About</div>
          <ul className="mt-3 space-y-2 text-zinc-400 text-sm">
            <li><a href="/about" className="hover:text-cyan-200">Our Story</a></li>
            <li><a href="/blog" className="hover:text-cyan-200">Magazine</a></li>
          </ul>
        </div>
        <div>
          <div className="text-zinc-200 font-medium">Support</div>
          <ul className="mt-3 space-y-2 text-zinc-400 text-sm">
            <li><a href="/support" className="hover:text-cyan-200">FAQ</a></li>
            <li><a href="#" className="hover:text-cyan-200">Manuals</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Arcadia — All rights reserved.</div>
    </footer>
  )
}
