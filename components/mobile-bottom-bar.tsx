import { siteConfig } from "@/lib/config";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 right-0 left-0 z-[998] bg-navy/95 backdrop-blur-xl border-t border-gold/20 p-3 gap-2.5 hidden max-md:flex">
      <a
        href={getPhoneUrl()}
        className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-bold bg-green-custom text-white"
      >
        📞 اتصل
      </a>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-bold bg-[#25D366] text-white"
      >
        💬 واتساب
      </a>
      <a
        href="#contact"
        className="flex-1 text-center py-2.5 rounded-xl text-[13px] font-bold bg-gradient-to-bl from-gold to-gold-dark text-navy"
      >
        📝 سجّل
      </a>
    </div>
  );
}
