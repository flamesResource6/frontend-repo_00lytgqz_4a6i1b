import React, { useEffect, useMemo, useState } from 'react'
import Viewer360 from '../components/Viewer360'
import Configurator from '../components/Configurator'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function Product(){
  const slug = window.location.pathname.split('/').pop()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({ author: '', rating: 5, comment: '' })

  useEffect(() => {
    fetch(`${baseUrl}/api/products/${slug}`).then(r=>r.json()).then(setProduct).catch(()=>{})
    fetch(`${baseUrl}/api/reviews?product=${slug}`).then(r=>r.json()).then(setReviews).catch(()=>{})
  }, [slug])

  const submitReview = async (e) => {
    e.preventDefault()
    const payload = { ...form, product_slug: slug, rating: Number(form.rating) }
    await fetch(`${baseUrl}/api/reviews`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    setForm({ author: '', rating: 5, comment: '' })
    const fresh = await fetch(`${baseUrl}/api/reviews?product=${slug}`).then(r=>r.json()).catch(()=>[])
    setReviews(fresh)
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl" style={{ fontFamily: 'Playfair Display, serif' }}>{product?.name || 'Arcadia'}</h1>
            <p className="mt-3 text-zinc-400">{product?.subtitle}</p>
            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-4 md:p-8 backdrop-blur-xl">
              <Viewer360 />
            </div>
            <div className="mt-10">
              <h3 className="text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>Reviews</h3>
              <div className="mt-4 space-y-4">
                {reviews.map((r, i) => (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-sm text-zinc-400">{r.author} — {r.rating}/5</div>
                    <div className="mt-1">{r.comment}</div>
                  </div>
                ))}
                {reviews.length === 0 && <div className="text-zinc-500">Be the first to review.</div>}
              </div>
              <form onSubmit={submitReview} className="mt-6 grid sm:grid-cols-3 gap-3">
                <input value={form.author} onChange={e=>setForm(f=>({...f, author: e.target.value}))} placeholder="Your name" className="rounded-lg bg-white/5 border border-white/10 px-3 py-2" required />
                <select value={form.rating} onChange={e=>setForm(f=>({...f, rating: e.target.value}))} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                  {[5,4,3,2,1].map(n=> <option key={n} value={n}>{n}</option>)}
                </select>
                <input value={form.comment} onChange={e=>setForm(f=>({...f, comment: e.target.value}))} placeholder="Comment" className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 sm:col-span-3" />
                <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-2 sm:col-span-3">Submit Review</button>
              </form>
            </div>
          </div>
          <div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 md:p-6 backdrop-blur-xl sticky top-28">
              <Configurator />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
