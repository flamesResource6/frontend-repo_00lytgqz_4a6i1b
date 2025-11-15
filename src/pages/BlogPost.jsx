import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function BlogPost(){
  const slug = window.location.pathname.split('/').pop()
  const [post, setPost] = useState(null)
  useEffect(() => { fetch(`${baseUrl}/api/blog/${slug}`).then(r=>r.json()).then(setPost).catch(()=>{}) }, [slug])
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>{post?.title || 'Magazine'}</h1>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          {post?.cover_image && <img src={post.cover_image} className="w-full" />}
        </div>
        <div className="prose prose-invert mt-8 max-w-none text-zinc-300">
          {post?.content}
        </div>
      </div>
    </div>
  )
}
