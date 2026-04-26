const distances = [
  { dest: "AUC Campus", time: "5 mins" },
  { dest: "Westin Resort", time: "6 mins" },
  { dest: "Sokhna Road", time: "8 mins" },
  { dest: "6th Settlement", time: "15 mins" },
  { dest: "Mostakbal City", time: "25 mins" },
  { dest: "New Capital City", time: "30 mins" },
]

export default function Location() {
  return (
    <section id="location">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Image */}
        <div className="relative overflow-hidden min-h-[300px]">
          <img src="https://grovadevelopments.com/assets/og-image.jpg"
            alt="EastHills Location" className="w-full h-full object-cover absolute inset-0" />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center px-10 lg:px-14 py-16" style={{background:"#4A5C3A", color:"#fff"}}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{color:"rgba(255,255,255,0.45)"}}>Prime Location</p>
          <h2 className="text-4xl font-black mb-2 text-white" style={{fontFamily:"serif", fontWeight:400}}>East Cairo,<br/>New Cairo</h2>
          <p className="text-sm mb-10" style={{color:"rgba(255,255,255,0.45)"}}>AUC Avenue, South Investors Area, New Cairo</p>
          <div className="space-y-0">
            {distances.map((d, i) => (
              <div key={i} className="flex justify-between py-3 border-b" style={{borderColor:"rgba(255,255,255,0.1)"}}>
                <span className="text-sm" style={{color:"rgba(255,255,255,0.6)"}}>{d.dest}</span>
                <span className="text-sm font-bold text-white">{d.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
