const units = [
  { type: "Large Villa", config: "G+2", bua: "465 sqm", plot: "Avg. 630 sqm" },
  { type: "Medium Villa", config: "G+1", bua: "395.7 – 397 sqm", plot: "Avg. 600 sqm" },
  { type: "Small Villa", config: "G+1", bua: "331.5 sqm", plot: "Avg. 470 sqm" },
  { type: "Twin House", config: "G+1", bua: "276 – 286.5 sqm", plot: "Avg. 340 sqm" },
  { type: "Town House", config: "G+1", bua: "262.5 sqm", plot: "Avg. 300 sqm" },
]

export default function Residences() {
  const phone = "+201008900076"
  const waLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("I'm interested in Grova EastHills residences. Please send details.")}`

  return (
    <section id="residences" className="py-24 px-6 lg:px-12" style={{background:"#1C1C1A", color:"#fff"}}>
      <div className="max-w-7xl mx-auto">
        {/* Header + Image Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#8B5E3C"}}>Our Residences</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight" style={{fontFamily:"serif", fontWeight:400}}>
              Explore Your<br/><em className="font-normal" style={{color:"#8B5E3C"}}>Home</em>
            </h2>
            <p className="text-xs tracking-widest uppercase mt-4" style={{color:"rgba(255,255,255,0.35)"}}>Fully Finished — Delivered 2029</p>
          </div>
          <div className="relative overflow-hidden aspect-[16/9]">
            <img src="https://grovadevelopments.com/assets/east-cairo.jpg"
              alt="EastHills" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top, rgba(28,28,26,0.5), transparent)"}} />
          </div>
        </div>

        {/* Unit Table */}
        <div className="border-t mb-10" style={{borderColor:"rgba(255,255,255,0.08)"}}>
          <div className="grid grid-cols-4 gap-4 py-4 text-xs font-semibold tracking-widest uppercase" style={{color:"rgba(255,255,255,0.3)"}}>
            <span>Type</span><span>Config</span><span>Built-Up Area</span><span>Plot Area</span>
          </div>
          {units.map((u, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 py-5 border-t hover:bg-white/5 transition-colors" style={{borderColor:"rgba(255,255,255,0.06)"}}>
              <span className="font-black text-white text-sm" style={{fontFamily:"serif"}}>{u.type}</span>
              <span className="text-sm" style={{color:"rgba(255,255,255,0.4)"}}>{u.config}</span>
              <span className="text-sm font-bold text-white">{u.bua}</span>
              <span className="text-sm" style={{color:"rgba(255,255,255,0.4)"}}>{u.plot}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="text-xs font-black tracking-widest uppercase px-8 py-3 transition-colors"
            style={{background:"#4A5C3A", color:"#fff"}}>
            WhatsApp
          </a>
          <a href={`tel:${phone}`}
            className="text-xs font-black tracking-widest uppercase px-8 py-3 border transition-all"
            style={{border:"1px solid rgba(255,255,255,0.2)", color:"#fff"}}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
