"use client"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/toaster"

const PHONE = "+201123466035"
const WA = "https://wa.me/201123466035"
const EMAIL = "apkzoz85@gmail.com"

// ── Countdown ────────────────────────────────────────
function useCountdown() {
  const [time, setTime] = useState({ d:0, h:0, m:0, s:0 })
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    let target: Date
    try {
      const stored = localStorage.getItem("ced_offer_end")
      target = stored ? new Date(stored) : (() => {
        const t = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        localStorage.setItem("ced_offer_end", t.toISOString())
        return t
      })()
    } catch { target = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) }
    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTime({ d: Math.floor(diff/86400000), h: Math.floor((diff%86400000)/3600000), m: Math.floor((diff%3600000)/60000), s: Math.floor((diff%60000)/1000) })
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])
  return { ...time, mounted }
}

function TimeBox({ v, l, mounted }: { v: number; l: string; mounted: boolean }) {
  return (
    <div className="border border-white/15 px-4 py-3 text-center min-w-[56px]">
      <div className="text-2xl font-black text-white tabular-nums">{mounted ? String(v).padStart(2,"0") : "--"}</div>
      <div className="text-[10px] text-white/30 mt-0.5">{l}</div>
    </div>
  )
}

function TimeBoxDark({ v, l, mounted }: { v: number; l: string; mounted: boolean }) {
  return (
    <div className="bg-white/5 border border-white/10 py-3 text-center">
      <div className="text-xl font-black text-white tabular-nums">{mounted ? String(v).padStart(2,"0") : "--"}</div>
      <div className="text-xs text-white/40 mt-0.5">{l}</div>
    </div>
  )
}

// ── Lead Form ────────────────────────────────────────
function LeadForm({ subject, dark=false }: { subject: string; dark?: boolean }) {
  const [form, setForm] = useState({ name:"", phone:"", project:"" })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({...form, _subject: subject, _captcha:"false", _template:"table"}),
      })
      if (res.ok) router.push("/thank-you"); else throw new Error()
    } catch { toast({title:"خطأ",variant:"destructive"}); setLoading(false) }
  }
  const inp = `w-full bg-transparent border-0 border-b py-3 text-sm outline-none transition-colors ${dark?"border-white/25 text-white placeholder:text-white/35 focus:border-white":"border-border text-foreground placeholder:text-muted-foreground focus:border-primary"}`
  return (
    <form onSubmit={submit} className="space-y-1">
      <input placeholder="الاسم الكريم *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required className={inp} />
      <div className="h-2"/>
      <input type="tel" placeholder="رقم الهاتف *" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required className={inp} dir="ltr" />
      <div className="h-2"/>
      <select value={form.project} onChange={e=>setForm({...form,project:e.target.value})}
        className={`w-full bg-transparent border-0 border-b py-3 text-sm outline-none cursor-pointer ${dark?"border-white/25 text-white/50":"border-border text-muted-foreground"}`}>
        <option value="">اختر المشروع</option>
        <option value="العالمين">العالمين — العاصمة الإدارية | من 3.5 مليون جنيه</option>
        <option value="جاردن سيتي العاصمة">جاردن سيتي العاصمة | من 2.8 مليون جنيه</option>
        <option value="المقصد">المقصد — العاصمة الإدارية | من 4.2 مليون جنيه</option>
      </select>
      <div className="h-4"/>
      <button type="submit" disabled={loading}
        className={`w-full py-4 text-sm font-black tracking-widest transition-opacity hover:opacity-85 ${dark?"bg-white text-primary":"bg-primary text-white"}`}>
        {loading ? "..." : "احجز استشارة مجانية"}
      </button>
    </form>
  )
}

// ── Popup ────────────────────────────────────────────
function Popup({ d,h,m,s,mounted, onClose }: { d:number;h:number;m:number;s:number;mounted:boolean; onClose:()=>void }) {
  const router = useRouter(); const { toast } = useToast()
  const [form, setForm] = useState({name:"",phone:""})
  const [loading, setLoading] = useState(false)
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({...form, _subject:"ليد بوب اب — City Edge", _captcha:"false", _template:"table"}),
      })
      if (res.ok) { onClose(); router.push("/thank-you") } else throw new Error()
    } catch { toast({title:"خطأ",variant:"destructive"}); setLoading(false) }
  }
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{background:"rgba(0,0,0,0.75)",backdropFilter:"blur(4px)"}}>
      <div className="bg-white w-full max-w-md relative overflow-hidden shadow-2xl">
        <div className="bg-primary px-6 py-4 text-white">
          <button onClick={onClose} className="absolute top-3 left-4 text-white/60 hover:text-white text-xl">✕</button>
          <p className="text-xs font-bold tracking-widest text-white/60 mb-1">🔥 عرض لفترة محدودة</p>
          <h2 className="text-lg font-black">أسعار حصرية على مشاريع<br/>City Edge</h2>
        </div>
        <div className="bg-foreground px-6 py-4 grid grid-cols-4 gap-2">
          {[{v:d,l:"يوم"},{v:h,l:"ساعة"},{v:m,l:"دقيقة"},{v:s,l:"ثانية"}].map((t,i)=>(
            <TimeBoxDark key={i} v={t.v} l={t.l} mounted={mounted} />
          ))}
        </div>
        <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
          {["🏙️ العالمين — من 3.5M","🌿 جاردن سيتي — من 2.8M","🏛️ المقصد — من 4.2M"].map((p,i)=>(
            <span key={i} className="border border-primary/20 text-primary text-xs font-bold px-3 py-1.5">{p}</span>
          ))}
        </div>
        <div className="px-6 pb-6">
          <p className="text-xs text-muted-foreground mb-4">سجل اهتمامك الآن وسيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
          <form onSubmit={submit} className="space-y-1">
            <input placeholder="الاسم الكريم *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required
              className="w-full border-0 border-b border-border py-3 text-sm outline-none focus:border-primary bg-transparent placeholder:text-muted-foreground" />
            <div className="h-2"/>
            <input type="tel" placeholder="رقم الهاتف *" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required
              className="w-full border-0 border-b border-border py-3 text-sm outline-none focus:border-primary bg-transparent" dir="ltr" />
            <div className="h-4"/>
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-primary text-white text-sm font-black hover:opacity-85 transition-opacity">
              {loading ? "..." : "احجز الآن — العرض ينتهي قريباً"}
            </button>
          </form>
          <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بعروض City Edge الحصرية")}`} target="_blank" rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 py-3 border border-green-500 text-green-600 text-sm font-bold hover:bg-green-50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            واتساب مباشر
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Project Section ──────────────────────────────────
function ProjectSection({ id, num, name, location, desc, price, payment, img, img2, img3, details, features, bgDark=false }:
  { id:string;num:string;name:string;location:string;desc:string;price:string;payment:string;img:string;img2?:string;img3?:string;details:{k:string;v:string}[];features:string[];bgDark?:boolean }) {
  const waMsg = encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${name} من City Edge وأريد معرفة التفاصيل والأسعار`)
  const bg = bgDark ? "bg-foreground" : "bg-white"
  const tc = (base: string) => bgDark ? base.replace("text-foreground","text-white").replace("text-muted-foreground","text-white/40").replace("border-border","border-white/10") : base
  return (
    <section id={id} className={bg}>
      {/* Banner */}
      <div className={`px-6 lg:px-12 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b relative overflow-hidden ${bgDark?"border-white/10":"border-border bg-secondary"}`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[8rem] font-black tracking-widest whitespace-nowrap" style={{color:bgDark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)"}}>{name}</span>
        </div>
        <div className="relative">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">{num}</p>
          <h2 className={`text-2xl lg:text-3xl font-black ${bgDark?"text-white":"text-foreground"}`}>{name}</h2>
        </div>
        <div className="flex gap-8 relative">
          {[{v:price,l:"يبدأ السعر من"},{v:payment,l:"خطة السداد"}].map((s,i)=>(
            <div key={i} className="text-right">
              <div className="text-base font-black text-primary">{s.v}</div>
              <div className={`text-xs mt-0.5 ${bgDark?"text-white/30":"text-muted-foreground"}`}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 min-h-[75vh]">
        <div className="relative overflow-hidden min-h-[55vw] lg:min-h-0">
          <img src={img} alt={name} className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(0,0,0,.5) 0%,transparent 50%)"}} />
        </div>
        <div className={`flex flex-col justify-center px-8 lg:px-14 py-14 ${bg}`}>
          <p className="text-primary text-xs font-bold tracking-widest uppercase mb-4">City Edge Developments</p>
          <h3 className={`text-3xl font-black leading-tight mb-2 ${bgDark?"text-white":"text-foreground"}`}>{name}</h3>
          <p className={`text-xs tracking-widest uppercase mb-6 ${bgDark?"text-white/30":"text-muted-foreground"}`}>{location}</p>
          <div className="w-8 h-px bg-primary mb-6" />
          <p className={`text-sm leading-relaxed mb-8 ${bgDark?"text-white/50":"text-muted-foreground"}`}>{desc}</p>
          <div className="mb-8">
            {details.map((d,i)=>(
              <div key={i} className={`flex justify-between py-3 border-b ${bgDark?"border-white/8":"border-border"}`}>
                <span className={`text-sm font-bold ${bgDark?"text-white":"text-foreground"}`}>{d.v}</span>
                <span className={`text-xs ${bgDark?"text-white/30":"text-muted-foreground"}`}>{d.k}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {features.map((f,i)=>(
              <span key={i} className="text-xs font-semibold px-3 py-1.5 border border-primary/20 text-primary" style={{background:"rgba(50,80,150,.06)"}}>{f}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={`${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3 bg-green-500 text-white text-xs font-black text-center hover:opacity-85 transition-opacity">💬 واتساب</a>
            <a href={`tel:${PHONE}`}
              className={`flex-1 py-3 text-xs font-black text-center border transition-colors ${bgDark?"border-white/20 text-white hover:bg-white/10":"border-primary text-primary hover:bg-primary hover:text-white"}`}>
              📞 اتصل الآن
            </a>
          </div>
        </div>
      </div>

      {/* Gallery strip */}
      {(img2 || img3) && (
        <div className="grid grid-cols-2 h-52 gap-0.5">
          {[img2,img3].filter(Boolean).map((src,i)=>(
            <div key={i} className="overflow-hidden">
              <img src={src!} alt={`${name} ${i+2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      )}

      {/* Register row */}
      <div className={`px-6 lg:px-12 py-12 border-t ${bgDark?"border-white/10":"border-border bg-secondary/50"}`}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <h3 className={`text-xl font-black mb-3 ${bgDark?"text-white":"text-foreground"}`}>سجّل بياناتك</h3>
            <p className={`text-sm leading-relaxed mb-5 ${bgDark?"text-white/40":"text-muted-foreground"}`}>
              تواصل معنا اليوم وسيتصل بك مستشارنا لتزويدك بأحدث الأسعار والعروض الحصرية. فريقنا متاح ٢٤ ساعة.
            </p>
            <div className="flex gap-3">
              <a href={`${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 flex items-center justify-center hover:opacity-85 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href={`tel:${PHONE}`} className="w-10 h-10 bg-primary flex items-center justify-center hover:opacity-85 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </a>
            </div>
          </div>
          <LeadForm subject={`ليد — ${name} City Edge`} dark={bgDark} />
        </div>
      </div>
    </section>
  )
}

// ── MAIN ─────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const { d, h, m, s, mounted } = useCountdown()

  useEffect(()=>{
    const fn = ()=>setScrolled(window.scrollY>40)
    window.addEventListener("scroll",fn)
    return ()=>window.removeEventListener("scroll",fn)
  },[])

  useEffect(()=>{
    try {
      if (!sessionStorage.getItem("ced_popup_seen")) {
        const t = setTimeout(()=>{ setShowPopup(true); sessionStorage.setItem("ced_popup_seen","1") }, 3500)
        return ()=>clearTimeout(t)
      }
    } catch {}
  },[])

  const scroll = (id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"})

  // Real City Edge images
  const ALAMEIN_1 = "/images/alamein-new.jpg"
  const ALAMEIN_2 = "/images/alamein-new.jpg"
  const GARDEN_1 = "/images/garden-new.jpg"
  const GARDEN_2 = "/images/garden-new.jpg"
  const MAQSAD_1 = "/images/maqsad-new.webp"
  const MAQSAD_2 = "/images/maqsad-new.webp"

  return (
    <>
      <Toaster />

      {showPopup && <Popup d={d} h={h} m={m} s={s} mounted={mounted} onClose={()=>setShowPopup(false)} />}

      {/* Announcement Bar */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-white py-2.5 px-4 flex items-center justify-between gap-3 text-xs font-bold">
        <span>🔥 عروض حصرية لفترة محدودة على مشاريع City Edge</span>
        <div className="flex items-center gap-1.5 font-black tabular-nums">
          {[{v:d,l:"ي"},{v:h,l:"س"},{v:m,l:"د"},{v:s,l:"ث"}].map((t,i)=>(
            <React.Fragment key={i}>
              {i>0 && <span className="opacity-40">:</span>}
              <span className="bg-white/15 px-2 py-0.5">{mounted ? String(t.v).padStart(2,"0") : "--"}{t.l}</span>
            </React.Fragment>
          ))}
          <button onClick={()=>setShowPopup(true)} className="mr-3 bg-white text-primary px-3 py-0.5 font-black hover:opacity-90 transition-opacity">
            احجز الآن
          </button>
        </div>
      </div>

      {/* NAV */}
      <nav className={`fixed top-8 inset-x-0 z-50 h-16 flex items-center px-5 lg:px-10 justify-between transition-all duration-300 ${scrolled?"bg-white/97 backdrop-blur-lg border-b border-border shadow-sm":"bg-transparent"}`}>
        <div className="flex flex-col leading-none">
          <span className={`text-lg font-black tracking-widest transition-colors ${scrolled?"text-primary":"text-white"}`}>City Edge</span>
          <span className={`text-[10px] tracking-widest font-semibold transition-colors ${scrolled?"text-muted-foreground":"text-white/50"}`}>DEVELOPMENTS</span>
        </div>
        <nav className="hidden lg:flex gap-8">
          {[["العالمين","alamein"],["جاردن سيتي","garden"],["المقصد","maqsad"],["تواصل","contact"]].map(([l,id])=>(
            <button key={id} onClick={()=>scroll(id)}
              className={`text-xs font-bold tracking-wide transition-colors ${scrolled?"text-muted-foreground hover:text-primary":"text-white/60 hover:text-white"}`}>{l}</button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE}`} className={`hidden sm:block text-sm font-black transition-colors ${scrolled?"text-foreground":"text-white"}`} dir="ltr">01123466035</a>
          <button onClick={()=>setShowPopup(true)} className="bg-primary text-white px-5 py-2.5 text-xs font-black tracking-widest hover:opacity-85 transition-opacity">
            احجز الآن
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{paddingTop:32}}>
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(10,20,50,.95) 0%,rgba(10,20,50,.55) 50%,rgba(10,20,50,.2) 100%)"}} />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span className="text-[10rem] font-black tracking-widest whitespace-nowrap" style={{color:"rgba(255,255,255,0.04)"}}>CITY EDGE</span>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20 pt-28">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5 flex-row-reverse justify-end">
                <div className="w-6 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-widest">City Edge Developments</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-red-500 text-white text-xs font-black px-4 py-2 mb-5">
                🔥 عروض حصرية — لفترة محدودة فقط
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-none mb-4">
                ٣ مشاريع<br/><span className="font-light text-white/50">بأسعار</span><br/>استثنائية
              </h1>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                العالمين، جاردن سيتي العاصمة، والمقصد — مشاريع متميزة من City Edge في أرقى مناطق العاصمة الإدارية الجديدة.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {[{n:"العالمين — من 3.5M",id:"alamein"},{n:"جاردن سيتي — من 2.8M",id:"garden"},{n:"المقصد — من 4.2M",id:"maqsad"}].map(p=>(
                  <button key={p.id} onClick={()=>scroll(p.id)}
                    className="border border-white/20 text-white/70 px-4 py-2 text-xs font-bold hover:border-primary hover:text-primary transition-colors">
                    {p.n}
                  </button>
                ))}
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/30 text-xs mb-3 tracking-widest">ينتهي العرض خلال</p>
                <div className="flex gap-2">
                  {[{v:d,l:"يوم"},{v:h,l:"ساعة"},{v:m,l:"دقيقة"},{v:s,l:"ثانية"}].map((t,i)=>(
                    <TimeBox key={i} v={t.v} l={t.l} mounted={mounted} />
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/15 p-8">
              <h2 className="text-white text-lg font-black mb-1">احجز استشارة مجانية</h2>
              <p className="text-white/40 text-xs mb-6">سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
              <LeadForm subject="ليد هيرو — City Edge" dark={true} />
              <div className="flex gap-3 mt-5">
                <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بعروض City Edge الحصرية")}`} target="_blank" rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-500 text-white text-xs font-black text-center hover:opacity-85 transition-opacity">💬 واتساب</a>
                <a href={`tel:${PHONE}`} className="flex-1 py-3 border border-white/20 text-white text-xs font-black text-center hover:bg-white/10 transition-colors">📞 اتصل</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALAMEIN */}
      <ProjectSection
        id="alamein" num="٠١ — العاصمة الإدارية الجديدة"
        name="العالمين" location="العاصمة الإدارية الجديدة — R7"
        desc="العالمين هو مشروع سكني فاخر من City Edge في قلب العاصمة الإدارية الجديدة. يقع في المنطقة السكنية R7 ويقدم وحدات متنوعة بتشطيبات راقية ومساحات خضراء واسعة. مشروع متكامل الخدمات مع موقف سيارات وأمن ٢٤ ساعة."
        price="من 3,500,000 جنيه" payment="10% مقدم / 8 سنوات"
        img={ALAMEIN_1} img2={ALAMEIN_2}
        details={[
          {k:"الموقع",v:"العاصمة الإدارية — R7"},
          {k:"المطور",v:"City Edge Developments"},
          {k:"الوحدات",v:"شقق • دوبلكس • بنتهاوس"},
          {k:"المساحات",v:"من 100 م² — 300 م²"},
          {k:"التشطيب",v:"سوبر لوكس — كامل"},
          {k:"خطة السداد",v:"10% مقدم — حتى 8 سنوات"},
        ]}
        features={["موقع R7 المتميز","تشطيب سوبر لوكس","مساحات خضراء","أمن ٢٤/٧","نادي اجتماعي","حمامات سباحة","موقف سيارات","قريب من الحي الحكومي"]}
      />

      {/* GARDEN CITY */}
      <ProjectSection
        id="garden" num="٠٢ — العاصمة الإدارية الجديدة"
        name="جاردن سيتي العاصمة" location="العاصمة الإدارية الجديدة"
        desc="جاردن سيتي العاصمة من City Edge — مجتمع سكني متكامل يوفر بيئة خضراء راقية في قلب العاصمة الإدارية. يتميز بالتصميم المعماري الفريد والمساحات الخضراء الواسعة والخدمات المتكاملة المناسبة للعائلات."
        price="من 2,800,000 جنيه" payment="10% مقدم / 7 سنوات"
        img={GARDEN_1} img2={GARDEN_2}
        details={[
          {k:"الموقع",v:"العاصمة الإدارية الجديدة"},
          {k:"المطور",v:"City Edge Developments"},
          {k:"الوحدات",v:"شقق • تاون هاوس"},
          {k:"المساحات",v:"من 90 م² — 250 م²"},
          {k:"التشطيب",v:"تشطيب كامل راقي"},
          {k:"خطة السداد",v:"10% مقدم — حتى 7 سنوات"},
        ]}
        features={["تصميم معماري فريد","٨٠٪ مساحات خضراء","حمامات سباحة","كلوب هاوس","قريب من المدارس","موقف سيارات","أمن متكامل","مناسب للعائلات"]}
        bgDark={true}
      />

      {/* MAQSAD */}
      <ProjectSection
        id="maqsad" num="٠٣ — العاصمة الإدارية الجديدة"
        name="المقصد" location="العاصمة الإدارية الجديدة — R3"
        desc="المقصد هو المشروع الرائد من City Edge في العاصمة الإدارية. يقع في منطقة R3 المتميزة ويقدم وحدات سكنية فاخرة بمساحات متنوعة. موقع استراتيجي قريب من أبرز معالم العاصمة ومحطة القطار السريع."
        price="من 4,200,000 جنيه" payment="10% مقدم / 10 سنوات"
        img={MAQSAD_1} img2={MAQSAD_2}
        details={[
          {k:"الموقع",v:"العاصمة الإدارية — R3"},
          {k:"المطور",v:"City Edge Developments"},
          {k:"الوحدات",v:"شقق • دوبلكس • بنتهاوس"},
          {k:"المساحات",v:"من 120 م² — 400 م²"},
          {k:"التشطيب",v:"سوبر لوكس — كامل"},
          {k:"خطة السداد",v:"10% مقدم — حتى 10 سنوات"},
        ]}
        features={["منطقة R3 المتميزة","قريب من القطار السريع","إطلالات استثنائية","تشطيب سوبر لوكس","حمامات سباحة","أمن ٢٤/٧","موقف تحت الأرض","استثمار مضمون"]}
      />

      {/* CONTACT */}
      <section id="contact" className="grid lg:grid-cols-2 min-h-[65vh]">
        <div className="bg-primary px-8 lg:px-14 py-20 flex flex-col justify-center">
          <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-5">تواصل معنا</p>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">نحن هنا<br/>لمساعدتك</h2>
          <a href={`tel:${PHONE}`} className="text-2xl font-black text-white hover:opacity-80 transition-opacity block mb-8" dir="ltr">01123466035</a>
          <div className="space-y-0">
            {[
              {n:"العالمين",l:"العاصمة الإدارية — R7 | من 3.5M"},
              {n:"جاردن سيتي العاصمة",l:"العاصمة الإدارية | من 2.8M"},
              {n:"المقصد",l:"العاصمة الإدارية — R3 | من 4.2M"},
            ].map((p,i)=>(
              <div key={i} className="flex justify-between py-4 border-b border-white/10">
                <div>
                  <div className="font-black text-sm text-white">{p.n}</div>
                  <div className="text-xs text-white/40 mt-0.5">{p.l}</div>
                </div>
                <div className="w-1.5 h-1.5 bg-white/30 self-center" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white px-8 lg:px-14 py-20 flex flex-col justify-center">
          <h3 className="text-2xl font-black mb-2">احجز استشارة</h3>
          <p className="text-muted-foreground text-sm mb-8">سيتواصل معك مستشارنا خلال ٢٤ ساعة</p>
          <LeadForm subject="ليد تواصل — City Edge" />
        </div>
      </section>

      <footer className="bg-foreground border-t border-white/10 py-6 pb-20 lg:pb-6 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-3">
        <span className="font-black tracking-widest text-white">City Edge Developments</span>
        <span className="text-xs text-white/25">© ٢٠٢٦ City Edge Developments | Grandeur Spaces – وكيل معتمد</span>
      </footer>

      {/* Floats */}
      <div className="fixed bottom-6 left-6 z-50 hidden lg:flex flex-col gap-3">
        <a href={`tel:${PHONE}`} className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
        </a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع City Edge")}`} target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>

      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 shadow-lg">
        <a href={`tel:${PHONE}`} className="flex items-center justify-center py-4 bg-primary text-white font-black text-xs tracking-widest">📞 اتصل الآن</a>
        <a href={`${WA}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشاريع City Edge")}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center py-4 bg-green-500 text-white font-black text-xs tracking-widest">💬 واتساب</a>
      </div>
    </>
  )
}
