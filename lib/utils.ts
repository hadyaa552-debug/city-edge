import { siteConfig } from "./config";

export function getWhatsAppUrl(message?: string) {
  const msg = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}

export function getPhoneUrl() {
  return `tel:${siteConfig.phone}`;
}

export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
