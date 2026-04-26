"use client";

import { siteConfig, projects } from "@/lib/config";

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(197,164,90,0.08),transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[700px] mx-auto px-6 relative z-10">
        <div className="bg-navy-light border-2 border-gold/20 rounded-[28px] p-10 sm:p-12 text-center">
          <h2 className="text-[30px] font-extrabold mb-2">
            سجّل اهتمامك <span className="text-gold">الآن</span>
          </h2>
          <p className="text-gray-custom mb-7 text-[15px]">
            اترك بياناتك وهنتواصل معاك في أقرب وقت بكل التفاصيل والأسعار
          </p>

          <form
            action={`https://formsubmit.co/${siteConfig.email}`}
            method="POST"
          >
            <input type="hidden" name="_subject" value={siteConfig.formSubject} />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value={`https://wa.me/${siteConfig.whatsapp}?text=شكراً لتسجيل اهتمامك! هنتواصل معاك قريباً`}
            />
            <input type="hidden" name="_cc" value={siteConfig.ccEmail} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div className="text-right">
                <label className="block text-[13px] text-gray-custom mb-1.5">
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="اكتب اسمك"
                  required
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-gray-custom/50"
                />
              </div>

              {/* Phone */}
              <div className="text-right">
                <label className="block text-[13px] text-gray-custom mb-1.5">
                  رقم الموبايل
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="01xxxxxxxxx"
                  required
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors placeholder:text-gray-custom/50"
                />
              </div>

              {/* Project Select */}
              <div className="text-right sm:col-span-2">
                <label className="block text-[13px] text-gray-custom mb-1.5">
                  المشروع المهتم بيه
                </label>
                <select
                  name="project"
                  required
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors cursor-pointer [&>option]:bg-navy [&>option]:text-white"
                >
                  <option value="">اختر المشروع</option>
                  {projects.map((p) => (
                    <option key={p.id} value={`${p.name} - ${p.location}`}>
                      {p.name} — {p.location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div className="text-right sm:col-span-2">
                <label className="block text-[13px] text-gray-custom mb-1.5">
                  ملاحظات إضافية
                </label>
                <textarea
                  name="message"
                  placeholder="أي تفاصيل إضافية تحب تشاركها معانا..."
                  rows={3}
                  className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-gold transition-colors resize-y placeholder:text-gray-custom/50"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-bl from-gold to-gold-dark text-navy py-3.5 rounded-2xl font-extrabold text-base hover:shadow-[0_10px_30px_rgba(197,164,90,0.3)] hover:-translate-y-0.5 transition-all mt-2 cursor-pointer"
            >
              أرسل البيانات واحجز مكانك
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
