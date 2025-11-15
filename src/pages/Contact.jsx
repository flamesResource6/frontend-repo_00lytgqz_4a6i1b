import React from 'react'

export default function Contact(){
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>Contact</h1>
        <p className="mt-3 text-zinc-400">We would love to hear from you.</p>
        <form className="mt-10 grid gap-3">
          <input placeholder="Name" className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <input placeholder="Email" className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <textarea placeholder="Message" rows={5} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2">Send</button>
        </form>
        <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-4 text-zinc-400">Modern map placeholder</div>
      </div>
    </div>
  )
}
