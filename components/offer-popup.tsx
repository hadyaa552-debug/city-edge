"use client";

import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/75 z-[9999] flex items-center justify-center backdrop-blur-lg transition-opacity duration-400 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div
        className={`bg-gradient-to-br from-navy-light to-navy border-2 border-gold rounded-[20px] p-8 sm:p-10 max-w-[500px] w-[90%] relative text-center transition-transform duration-500 ${
          show ? "scale-100 translate-y-0" : "scale-[0.85] translate-y-8"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 left-4 w-9 h-9 border border-gold rounded-full bg-transparent text-gold text-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer"
        >
          ✕
        </button>

        <div className="inline-block bg-red-custom text-white text-[13px] font-bold px-5 py-1.5 rounded-full mb-4 animate-pulse-badge">
          🔥 عرض حصري لفترة محدودة
        </div>

        <h2 className="text-[26px] font-extrabold text-gold mb-2">
          خصومات تصل إلى 15%
        </h2>
        <p className="text-gray-custom text-[15px] mb-5 leading-[1.8]">
          على جميع وحدات مشاريع سيتي إيدج
          <br />
          في العلمين الجديدة والعاصمة الإدارية
        </p>
        <div className="text-gold-light font-bold text-xl mb-2">
          مقدم يبدأ من 5% وتقسيط حتى 12 سنة
        </div>
        <p className="text-[13px] text-gray-custom mb-5">
          ⏰ العرض ينتهي قريباً — الوحدات المتاحة محدودة
        </p>

        <a
          href="#contact"
          onClick={() => setShow(false)}
          className="inline-block bg-gradient-to-bl from-gold to-gold-dark text-navy font-extrabold text-base px-10 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(197,164,90,0.35)] transition-all"
        >
          احجز وحدتك الآن
        </a>
      </div>
    </div>
  );
}
