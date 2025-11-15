import React, { useEffect, useMemo, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function Configurator(){
  const [products, setProducts] = useState([])
  const [slug, setSlug] = useState('arcadia-halo')
  const [finish, setFinish] = useState('gold')
  const [size, setSize] = useState('M')
  const [temperature, setTemperature] = useState(4000)
  const [price, setPrice] = useState(null)

  useEffect(() => {
    fetch(`${baseUrl}/api/products`).then(r=>r.json()).then(d=>{
      setProducts(d)
      if(d?.[0]?.slug) setSlug(d[0].slug)
    }).catch(() => {})
  }, [])

  useEffect(() => {
    if(!slug) return
    fetch(`${baseUrl}/api/price`, { method:'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ slug, finish, size, temperature })})
      .then(r=>r.json()).then(d=>setPrice(d.price)).catch(()=>{})
  }, [slug, finish, size, temperature])

  const product = useMemo(() => products.find(p=>p.slug===slug), [products, slug])

  return (
    <div className="grid md:grid-cols-[1fr_360px] gap-8">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black">
        <img src={product?.hero_image} alt="hero" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border-2" style={{ borderColor: finish==='gold'? '#f5c84b' : finish==='silver' ? '#d1d5db' : '#0ea5e9', boxShadow: '0 0 40px rgba(56,189,248,0.35)'}} />
        </div>
        <div className="absolute top-4 left-4 text-xs text-zinc-300 bg-black/40 rounded-full px-3 py-1 backdrop-blur">Transparent preview</div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm text-zinc-300">Model</label>
          <select value={slug} onChange={e=>setSlug(e.target.value)} className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2">
            {products.map(p => (<option value={p.slug} key={p.slug}>{p.name}</option>))}
          </select>
        </div>
        <div>
          <label className="text-sm text-zinc-300">Frame Color</label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {['gold','black','silver'].map(f => (
              <button key={f} onClick={() => setFinish(f)} className={`rounded-full px-3 py-2 text-sm border ${finish===f?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>{f}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-zinc-300">Size</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {['S','M','L','XL'].map(s => (
              <button key={s} onClick={() => setSize(s)} className={`rounded-full px-3 py-2 text-sm border ${size===s?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>{s}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-zinc-300">Color Temperature: {temperature}K</label>
          <input type="range" min={3000} max={6500} step={100} value={temperature} onChange={e=>setTemperature(parseInt(e.target.value))} className="w-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-zinc-400">Real-time price</div>
          <div className="text-3xl font-semibold text-cyan-300">{price? `$${price}` : '—'}</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="#viewer" className="rounded-full border border-cyan-400/40 text-cyan-100 bg-white/5 px-4 py-3 text-center">View in 360°</a>
          <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-4 py-3">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
