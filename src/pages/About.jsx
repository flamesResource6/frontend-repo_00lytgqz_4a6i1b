import React from 'react'

export default function About(){
  const steps = [
    { y: 0, title: 'Origins', text: 'Born from the pursuit of luminous purity.' },
    { y: 1, title: 'Craft', text: 'Engineered in aerospace aluminum, finished in satin blacks and warm golds.' },
    { y: 2, title: 'Intelligence', text: 'Smart control that adapts to your rituals.' },
    { y: 3, title: 'Future', text: 'Lighting as architectural art.' },
  ]
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>About Arcadia</h1>
        <p className="mt-3 text-zinc-400">A story told in light.</p>
        <div className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
              <div className="text-xl font-medium">{s.title}</div>
              <div className="mt-1 text-zinc-400">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
