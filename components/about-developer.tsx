export default function AboutDeveloper() {
  const stats = [
    { n: "90+", l: "Years of Excellence" },
    { n: "10 Design", l: "UK Masterplanner" },
    { n: "2029", l: "Delivery Date" },
    { n: "1,217", l: "Limited Residences" },
  ]
  return (
    <section id="developer" className="py-24 px-6 lg:px-12" style={{background:"#F5F0E8"}}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{color:"#8B5E3C"}}>The Developer</p>
          <h2 className="text-4xl font-black mb-5 leading-tight" style={{fontFamily:"serif", fontWeight:400, color:"#1C1C1A"}}>
            Grova Developments<br/><em className="font-normal" style={{color:"#4A5C3A"}}>by Hassan Allam Holding</em>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            East Hills is the first residential community by Grova Developments — the real estate arm of Hassan Allam Holding, bringing ninety years of infrastructure excellence to a deeply personal form of living.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            Masterplanner & Architecture: <strong style={{color:"#1C1C1A"}}>10 Design (UK)</strong> · Landscape Design: <strong style={{color:"#1C1C1A"}}>SRLA (UK)</strong> · Contractor: <strong style={{color:"#1C1C1A"}}>Hassan Allam Construction</strong> · Construction Start: December 2025.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="border border-border p-6">
                <div className="text-2xl font-black mb-1" style={{fontFamily:"serif", color:"#4A5C3A"}}>{s.n}</div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="https://grovadevelopments.com/assets/east-cairo.jpg"
            alt="Grova EastHills" className="w-full aspect-[4/5] object-cover" />
          <div className="absolute bottom-6 left-6 p-4" style={{background:"#F5F0E8"}}>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Limited Release</p>
            <p className="text-sm font-black" style={{fontFamily:"serif"}}>Grounded in What Lasts</p>
          </div>
        </div>
      </div>
    </section>
  )
}
