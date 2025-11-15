import React, { useState } from 'react'

const rooms = {
  modern: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
  loft: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1600&auto=format&fit=crop',
  dining: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  bedroom: 'https://images.unsplash.com/photo-1495255167545-6d7b68e4c9cf?q=80&w=1600&auto=format&fit=crop',
}

export default function RoomSimulator(){
  const [room, setRoom] = useState('modern')
  const [intensity, setIntensity] = useState(0.8)
  const [temp, setTemp] = useState(4000)
  const [height, setHeight] = useState(50)

  const tempTint = () => {
    const t = Math.min(Math.max((temp-3000)/(6500-3000),0),1)
    const warm = 255, cool = 180
    const blue = 255
    const r = Math.round(warm - (warm-cool)*t)
    const g = Math.round(r)
    return `rgba(${r},${g},255,${0.12})`
  }

  return (
    <div className="grid md:grid-cols-[1fr_320px] gap-8">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
        <img src={rooms[room]} alt="room" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 50% ${height}%, rgba(255,255,200,${intensity*0.45}), transparent 60%)` }} />
        <div className="absolute inset-0" style={{ backgroundColor: tempTint() }} />
        {/* chandelier silhouette */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: `${height}%` }}>
          <div className="w-56 h-56 rounded-full border-2 border-white/60 shadow-[0_0_30px_rgba(56,189,248,0.25)]" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm text-zinc-300">Interior</label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {Object.keys(rooms).map(r => (
              <button key={r} onClick={() => setRoom(r)} className={`rounded-full capitalize px-3 py-2 text-sm border ${room===r?'border-cyan-400 text-cyan-200':'border-white/10 text-zinc-300'} bg-white/5`}>{r}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-zinc-300">Light Intensity</label>
          <input type="range" min={0} max={1} step={0.01} value={intensity} onChange={e=>setIntensity(parseFloat(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-zinc-300">Color Temperature: {temp}K</label>
          <input type="range" min={3000} max={6500} step={100} value={temp} onChange={e=>setTemp(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm text-zinc-300">Hanging Height</label>
          <input type="range" min={10} max={80} step={1} value={height} onChange={e=>setHeight(parseInt(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  )
}
