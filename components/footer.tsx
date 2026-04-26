import { siteConfig, projects } from "@/lib/config";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-navy-light border-t border-gold/10 pt-12 pb-6">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 border-2 border-gold rounded-xl flex items-center justify-center font-[Playfair_Display] font-bold text-lg text-gold">
              CE
            </div>
            <div className="text-[15px] font-bold text-white leading-tight">
              سيتي إيدج
              <span className="block text-[11px] font-normal text-gold tracking-wider">
                CITY EDGE DEVELOPMENTS
              </span>
            </div>
          </div>
          <p className="text-gray-custom text-sm mt-3 leading-[1.8]">
            شركة سيتي إيدج للتطوير العقاري — شراكة بين هيئة المجتمعات العمرانية
            الجديدة وبنك التعمير والإسكان. نبني مستقبل مصر من خلال مشاريع
            عقارية متكاملة ومستدامة.
          </p>
        </div>

        {/* Projects */}
        <div>
          <h4 className="text-[15px] font-bold text-gold mb-4">المشاريع</h4>
          {projects.map((p) => (
            <a
              key={p.id}
              href="#projects"
              className="block text-gray-custom text-sm mb-2 hover:text-gold transition-colors"
            >
              {p.name} — {p.location}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[15px] font-bold text-gold mb-4">تواصل معنا</h4>
          <a
            href={getPhoneUrl()}
            className="block text-gray-custom text-sm mb-2 hover:text-gold transition-colors"
          >
            📞 {siteConfig.phone}
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-custom text-sm mb-2 hover:text-gold transition-colors"
          >
            💬 واتساب
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-gray-custom text-sm mb-2 hover:text-gold transition-colors"
          >
            ✉️ البريد الإلكتروني
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center mt-8 pt-5 border-t border-gold/[0.08] text-gray-custom text-[13px]">
        جميع الحقوق محفوظة © 2026 —{" "}
        <a
          href={siteConfig.agentWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          {siteConfig.agentName}
        </a>{" "}
        وكيل معتمد لشركة سيتي إيدج
      </div>
    </footer>
  );
}
