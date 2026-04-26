"use client";

import { useState, useEffect } from "react";
import { offerFeatures } from "@/lib/config";

export default function OfferTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    let end = localStorage.getItem("ced_offer_end");
    const now = Date.now();

    if (!end || parseInt(end) < now) {
      const days = 3;
      const extraHours = Math.floor(Math.random() * 12);
      const newEnd = now + days * 24 * 60 * 60 * 1000 + extraHours * 60 * 60 * 1000;
      localStorage.setItem("ced_offer_end", newEnd.toString());
      end = newEnd.toString();
    }

    const endTime = parseInt(end);

    const update = () => {
      const diff = Math.max(0, endTime - Date.now());
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const countdownItems = [
    { value: pad(time.days), label: "يوم" },
    { value: pad(time.hours), label: "ساعة" },
    { value: pad(time.mins), label: "دقيقة" },
    { value: pad(time.secs), label: "ثانية" },
  ];

  return (
    <section
      id="offer"
      className="py-16 bg-gradient-to-bl from-gold/[0.08] to-gold/[0.02] border-y border-gold/10"
    >
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <h2 className="text-[28px] font-extrabold mb-2">
          ⏰ العرض ينتهي خلال <span className="text-gold">وقت محدود</span>
        </h2>
        <p className="text-gray-custom text-[15px] mb-7">
          استغل الفرصة قبل انتهاء العرض — مقدم 5% فقط وتقسيط يصل لـ 12 سنة
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-7 flex-wrap">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="bg-navy-light border border-gold/20 rounded-2xl px-5 py-4 min-w-[70px] sm:min-w-[80px]"
            >
              <span className="text-[28px] sm:text-[36px] font-black text-gold font-[Playfair_Display] block leading-none">
                {item.value}
              </span>
              <span className="text-[11px] text-gray-custom mt-1 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex justify-center gap-6 sm:gap-8 flex-wrap mb-6">
          {offerFeatures.map((feat) => (
            <div
              key={feat}
              className="flex items-center gap-2 text-sm text-cream"
            >
              <span className="text-green-custom text-lg">✓</span>
              {feat}
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block bg-gradient-to-bl from-gold to-gold-dark text-navy px-10 py-3.5 rounded-full font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(197,164,90,0.3)] transition-all"
        >
          احجز وحدتك قبل انتهاء العرض
        </a>
      </div>
    </section>
  );
}
