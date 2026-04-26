const items = [
  { num: "01/", title: "Terrain Led Masterplan", desc: "Roads follow contour lines. Every residence inherits an elevated position with 100% views. Only 15% built footprint — 85% open landscape." },
  { num: "02/", title: "7 Distinct Neighbourhoods", desc: "From elevated plateaus to sheltered valley corridors. Each neighbourhood anchored by a landscaped spine stretching up to 120 metres wide." },
  { num: "03/", title: "Active Living Infrastructure", desc: "Walking trails, cycling paths, valley walks, and ridgeline circuits — all integrated with engineering-grade precision." },
  { num: "04/", title: "Community Amenities", desc: "Signature clubhouse, restaurants, wellness facilities, medical centre, children's areas, and solar-powered infrastructure. 5 gated entrances." },
  { num: "05/", title: "Natural Materials", desc: "Local limestone, sandstone aggregate, earth pigments — materials chosen to age beautifully in this climate. Fully finished, delivered 2029." },
  { num: "06/", title: "Pedestrian-First Design", desc: "Car-free streetscapes. Children's routes that never cross vehicle roads. Dedicated parking areas discreetly positioned at each neighbourhood." },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-16 flex-col lg:flex-row gap-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#8B5E3C"}}>Key Highlights</p>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight" style={{fontFamily:"serif", fontWeight:400}}>
              Shaped by the<br/><em className="font-normal" style={{color:"#4A5C3A"}}>Land Itself</em>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm lg:text-right">
            Set across 1,260,000 m² of naturally elevated terrain in East Cairo. An architecture that emerges from the earth rather than being imposed upon it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item, i) => (
            <div key={i} className="bg-background p-9 hover:bg-secondary transition-colors">
              <span className="text-xs font-bold tracking-widest mb-4 block" style={{color:"#8B5E3C"}}>{item.num}</span>
              <h3 className="text-base font-black text-foreground mb-4" style={{fontFamily:"serif", fontWeight:700}}>{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
