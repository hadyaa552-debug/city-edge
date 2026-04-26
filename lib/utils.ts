import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const encoded = message ? encodeURIComponent(message) : ""
  return `https://wa.me/${phone.replace(/\D/g, "")}${encoded ? `?text=${encoded}` : ""}`
}
