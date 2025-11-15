import React, { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

export default function FAQAccordion({ compact=false }){
  const [faqs, setFaqs] = useState([])
  const [open, setOpen] = useState(0)
  useEffect(() => { fetch(`${baseUrl}/api/faq`).then(r=>r.json()).then(setFaqs).catch(()=>{}) }, [])
  return (
    <div className={`divide-y divide-white/10 ${compact? 'max-w-3xl mx-auto':''}`}>
      {faqs.map((f, i) => (
        <details key={i} open={open===i} onToggle={(e)=> setOpen(e.target.open? i : -1)} className="group">
          <summary className="cursor-pointer list-none py-4 flex items-center justify-between">
            <span className="text-zinc-100">{f.question}</span>
            <span className="ml-6 text-cyan-300">{open===i? '−' : '+'}</span>
          </summary>
          <div className="pb-4 text-zinc-400">{f.answer}</div>
        </details>
      ))}
    </div>
  )
}
