import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_ESgy3bur_6SYTZi5LRfH7CS7ZBubjEQR8")

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    const { data, error } = await resend.emails.send({
      from: "Hady - Tatweer Misr Galala <onboarding@resend.dev>",
      to: "saadh6640@gmail.com",
      replyTo: email || undefined,
      subject: `Hady - Tatweer Misr Galala - استفسار جديد من ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #FF4713;">استفسار جديد من الموقع</h2>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            ${email ? `<p><strong>البريد الإلكتروني:</strong> ${email}</p>` : ""}
            ${message ? `<p><strong>الرسالة:</strong></p><p>${message}</p>` : ""}
          </div>
          
          <p style="color: #666; font-size: 12px;">
            تم الإرسال من موقع تطوير مصر للتطوير العقاري
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
