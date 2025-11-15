import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function Blog(){
  const [posts, setPosts] = useState([])
  useEffect(() => { fetch(`${baseUrl}/api/blog`).then(r=>r.json()).then(setPosts).catch(()=>{}) }, [])
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>Arcadia Magazine</h1>
        <p className="mt-3 text-zinc-400">Design, lighting, lifestyle.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {posts.map(p => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[16/9]">
                <img src={p.cover_image} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
              </div>
              <div className="p-5">
                <div className="text-2xl font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>{p.title}</div>
                <div className="mt-1 text-zinc-400">{p.excerpt}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
