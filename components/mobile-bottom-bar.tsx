export default function MobileBottomBar() {
  const msg = encodeURIComponent("I'm interested in Grova EastHills")
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 shadow-lg">
      <a href="tel:+201008900076" className="flex items-center justify-center py-4 text-white font-black text-xs tracking-widest uppercase" style={{background:"#4A5C3A"}}>📞 Call Now</a>
      <a href={`https://wa.me/201008900076?text=${msg}`} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-center py-4 bg-green-500 text-white font-black text-xs tracking-widest uppercase">💬 WhatsApp</a>
    </div>
  )
}
