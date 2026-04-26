import { projects } from "@/lib/config";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gold/10 border border-gold/20 px-5 py-1.5 rounded-full text-[12px] text-gold mb-3 tracking-wider">
          مشاريعنا المميزة
        </div>
        <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold">
          اختر <span className="text-gold">وجهتك</span> المثالية
        </h2>
        <p className="text-gray-custom max-w-[600px] mx-auto mt-3 text-[15px]">
          ثلاثة مشاريع استثنائية في أفضل المواقع الاستراتيجية بمصر
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-navy-light border border-gold/10 rounded-3xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group"
          >
            {/* Image */}
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.08]"
              />
              <div className="absolute top-4 right-4 bg-red-custom text-white px-3.5 py-1 rounded-full text-[12px] font-bold">
                عرض خاص
              </div>
              <div className="absolute bottom-4 right-4 bg-navy/85 backdrop-blur-sm border border-gold/30 px-3.5 py-1.5 rounded-xl text-[12px] text-gold flex items-center gap-1.5">
                📍 {project.location}
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <h3 className="text-[22px] font-extrabold mb-1">
                {project.name} — {project.nameEn}
              </h3>
              <div className="text-[13px] text-gold mb-3">
                City Edge Developments
              </div>
              <p className="text-[14px] text-gray-custom leading-[1.8] mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-gold/[0.06] border border-gold/10 rounded-xl px-3 py-2.5 text-center"
                  >
                    <div className="text-[15px] font-bold text-gold">
                      {spec.value}
                    </div>
                    <div className="text-[11px] text-gray-custom mt-0.5">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-[12px] text-gray-custom">يبدأ من</span>
                <span className="text-[22px] font-black text-gold">
                  {project.price}
                </span>
                {project.priceLabel && (
                  <span className="text-[13px] text-gold">
                    {project.priceLabel}
                  </span>
                )}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="block text-center bg-gradient-to-bl from-gold to-gold-dark text-navy py-3 rounded-xl font-bold text-[14px] hover:shadow-[0_6px_20px_rgba(197,164,90,0.3)] transition-all"
              >
                استفسر الآن ←
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
