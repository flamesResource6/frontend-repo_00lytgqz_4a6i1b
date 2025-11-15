import React from 'react'
import FAQAccordion from '../components/FAQAccordion'

export default function Support(){
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>Installation & Support</h1>
        <p className="mt-3 text-zinc-400">Guides, mini-animations and answers.</p>
        <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-4 md:p-8">
          <FAQAccordion />
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center text-zinc-400">Step {i} video</div>
          ))}
        </div>
      </div>
    </div>
  )
}
