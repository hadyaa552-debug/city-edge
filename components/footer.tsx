export default function Footer() {
  return (
    <footer className="py-8 pb-24 lg:pb-8 px-6 lg:px-12 border-t border-border flex flex-col lg:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-base font-black" style={{fontFamily:"serif", color:"#4A5C3A"}}>Grova</span>
        <span className="text-xs text-muted-foreground ml-2 tracking-widest uppercase">· EastHills</span>
      </div>
      <p className="text-xs text-muted-foreground text-center">© 2026 Grova Developments — Hassan Allam Holding | Grandeur Spaces – Authorized Agent</p>
    </footer>
  )
}
