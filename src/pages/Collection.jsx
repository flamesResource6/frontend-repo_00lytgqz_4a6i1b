import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

function ProductCard({ item }){
  return (
    <a href={`/product/${item.slug}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div className="absolute -inset-12 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="aspect-[4/3] overflow-hidden">
        <img src={item.hero_image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
      </div>
      <div className="p-5">
        <div className="text-zinc-200 text-lg font-medium">{item.name}</div>
        <div className="mt-1 text-sm text-zinc-400">from ${item.base_price}</div>
        <div className="mt-3 inline-flex items-center text-cyan-300 text-sm">Configure <span className="ml-1">→</span></div>
      </div>
    </a>
  )
}

export default function Collection(){
  const [items, setItems] = useState([])
  useEffect(() => { fetch(`${baseUrl}/api/products`).then(r=>r.json()).then(setItems).catch(()=>{}) }, [])
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>Arcadia Collection</h1>
        <p className="mt-3 text-zinc-400">An ensemble of luminous sculptures.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(it => (<ProductCard key={it.slug} item={it} />))}
        </div>
      </div>
    </div>
  )
}
