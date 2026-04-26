import { aboutDeveloper } from "@/lib/config";

export default function AboutDeveloper() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-navy to-navy-light"
    >
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-block bg-gold/10 border border-gold/20 px-5 py-1.5 rounded-full text-[12px] text-gold mb-3 tracking-wider">
            عن المطور
          </div>
          <h2 className="text-[clamp(26px,4vw,36px)] font-extrabold mb-3">
            سيتي إيدج —{" "}
            <span className="text-gold">نبني مستقبل مصر</span>
          </h2>
          <p className="text-gray-custom text-[15px] leading-[1.9] mb-4">
            {aboutDeveloper.description1}
          </p>
          <p className="text-gray-custom text-[15px] leading-[1.9]">
            {aboutDeveloper.description2}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-7">
            {aboutDeveloper.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gold/[0.06] border border-gold/10 rounded-2xl p-5 text-center"
              >
                <div className="text-[32px] font-black text-gold font-[Playfair_Display]">
                  {stat.value}
                </div>
                <div className="text-[13px] text-gray-custom mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block relative">
          <div className="rounded-3xl overflow-hidden border-2 border-gold/15">
            <img
              src={aboutDeveloper.image}
              alt="سيتي إيدج"
              className="w-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
