"use client"
import Link from "next/link"

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4" dir="rtl">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 border border-primary flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h1 className="text-3xl font-black mb-3">شكراً لك!</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">تم استلام طلبك. سيتواصل معك مستشارنا العقاري خلال ٢٤ ساعة.</p>
        </div>
        <div className="border border-border p-5 text-right space-y-3">
          <a href="tel:+201123466035" className="flex justify-between py-2 border-b border-border hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground">اتصال مباشر</span>
            <span className="font-bold text-sm" dir="ltr">01123466035</span>
          </a>
          <a href="https://wa.me/201123466035" target="_blank" rel="noopener noreferrer" className="flex justify-between py-2 hover:text-primary transition-colors">
            <span className="text-xs text-muted-foreground">رد فوري</span>
            <span className="font-bold text-sm text-green-600">واتساب</span>
          </a>
        </div>
        <Link href="/" className="inline-block bg-primary text-white px-8 py-3 text-xs font-black tracking-widest hover:opacity-85 transition-opacity">
          العودة للرئيسية
        </Link>
      </div>
    </main>
  )
}
