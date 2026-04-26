import { stats } from "@/lib/config";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/90 to-navy" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C5A45A 0, #C5A45A 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="text-center lg:text-right">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 px-5 py-2 rounded-full mb-5 text-[13px] text-gold">
            <span className="w-2 h-2 bg-gold rounded-full animate-blink" />
            عروض لفترة محدودة
          </div>

          <h1 className="text-[clamp(32px,5vw,54px)] font-black leading-[1.3] mb-4">
            اسكن في قلب
            <br />
            <span className="text-gold">مصر الجديدة</span>
            <br />
            مع سيتي إيدج
          </h1>

          <p className="text-[17px] text-gray-custom mb-8 max-w-[500px] leading-[1.9] mx-auto lg:mx-0 lg:mr-0">
            مشاريع سكنية متكاملة في أميز المواقع — العلمين الجديدة والعاصمة
            الإدارية. تصميمات عالمية وأنظمة سداد مرنة تبدأ من 5% مقدم.
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-gradient-to-bl from-gold to-gold-dark text-navy px-9 py-3.5 rounded-full font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(197,164,90,0.3)] transition-all"
            >
              اكتشف المشاريع
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-gold text-gold px-9 py-3.5 rounded-full font-semibold text-[15px] hover:bg-gold/10 transition-all"
            >
              تواصل واتساب
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-5 mt-10 flex-wrap justify-center lg:justify-start">
            {stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] border border-gold/10 rounded-2xl px-6 py-5 text-center flex-1 min-w-[100px]"
              >
                <div className="text-[28px] font-black text-gold font-[Playfair_Display]">
                  {stat.value}
                </div>
                <div className="text-[12px] text-gray-custom mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="hidden lg:block relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border-2 border-gold/20">
            <img
              src="https://cityedgedevelopments.com/cityedgedevelopmentswordpress/wp-content/uploads/2025/07/Maz-Apt-2-scaled.jpg"
              alt="مزارين العلمين الجديدة"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-navy/90 backdrop-blur-xl border border-gold rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center text-xl">
              🏠
            </div>
            <div className="text-[13px] text-gray-custom">
              <strong className="block text-white text-base">+10,000</strong>
              عائلة اختارت سيتي إيدج
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
