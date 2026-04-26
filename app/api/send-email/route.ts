import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_ESgy3bur_6SYTZi5LRfH7CS7ZBubjEQR8")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    const { data, error } = await resend.emails.send({
      from: "Hady - Tatweer Misr Galala <onboarding@resend.dev>",
      to: ["saadh6640@gmail.com"],
      subject: `Hady - Tatweer Misr Galala - استفسار جديد من ${name}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f5f5f5;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #FF4713 0%, #D83A0F 100%);
                color: white;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e5e5;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: bold;
                color: #FF4713;
                margin-bottom: 8px;
                font-size: 14px;
              }
              .value {
                color: #333;
                font-size: 16px;
                line-height: 1.5;
              }
              .footer {
                background-color: #f8f8f8;
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>استفسار عقاري جديد</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">من موقع تطوير مصر الإلكتروني</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">الاسم</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">رقم الهاتف</div>
                  <div class="value" dir="ltr" style="text-align: right;">${phone}</div>
                </div>
                ${
                  email
                    ? `
                <div class="field">
                  <div class="label">البريد الإلكتروني</div>
                  <div class="value" dir="ltr" style="text-align: right;">${email}</div>
                </div>
                `
                    : ""
                }
                ${
                  message
                    ? `
                <div class="field">
                  <div class="label">الرسالة</div>
                  <div class="value">${message}</div>
                </div>
                `
                    : ""
                }
              </div>
              <div class="footer">
                <p>هذه الرسالة تم إرسالها من نموذج الاتصال في موقع تطوير مصر للتطوير العقاري</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("[v0] Resend API error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
