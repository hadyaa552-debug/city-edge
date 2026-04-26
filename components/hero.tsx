"use client"
import { useEffect, useState } from "react"
import ContactForm from "@/components/contact-form"

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://grovadevelopments.com/assets/hero-left.jpg"
          alt="Grova EastHills" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{background:"linear-gradient(to right, rgba(28,24,20,0.88) 40%, rgba(28,24,20,0.5) 70%, rgba(28,24,20,0.15) 100%)"}} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-28">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{background:"#8B5E3C"}} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{color:"#8B5E3C"}}>Grova Developments • Hassan Allam Holding</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-none mb-3" style={{fontFamily:"serif"}}>
              A Signature<br/><em className="font-normal" style={{color:"#8B5E3C"}}>Living</em>
            </h1>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-8">Grounded in What Lasts</p>
            <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-md">
              Set across 1,260,000 m² of naturally elevated terrain in East Cairo. Seven neighbourhoods, seven landscape typologies, and an architecture that emerges from the earth.
            </p>
            <div className="grid grid-cols-3 gap-0 border-t pt-8" style={{borderColor:"rgba(255,255,255,0.1)"}}>
              {[{ v: "300", l: "Feddan" }, { v: "1,217", l: "Residences" }, { v: "7", l: "Neighbourhoods" }].map((s, i) => (
                <div key={i} className="pr-6 mr-6 last:pr-0 last:mr-0" style={{borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none"}}>
                  <div className="text-3xl font-black text-white" style={{fontFamily:"serif"}}>{s.v}</div>
                  <div className="text-xs text-white/40 mt-1 tracking-widest uppercase">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
