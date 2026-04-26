"use client"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({ name: "", phone: "", unit: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name, phone: formData.phone,
          unit: formData.unit || "Not specified",
          _subject: "New Lead – Grova EastHills",
          _captcha: "false", _template: "table",
          _cc: "leads@grandeur-spaces.com",
        }),
      })
      if (res.ok) { router.push("/thank-you") }
      else throw new Error()
    } catch { setLoading(false) }
  }

  return (
    <Card className="shadow-2xl border-0" style={{background:"#F5F0E8"}}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-black text-foreground" style={{fontFamily:"serif", fontWeight:400}}>Request Information</CardTitle>
        <p className="text-xs text-muted-foreground tracking-wide">Our team will reach you within 24 hours</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input placeholder="Full Name" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required className="h-11 border-0 border-b border-border bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-primary" />
          <Input type="tel" placeholder="Phone Number" value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required className="h-11 border-0 border-b border-border bg-transparent rounded-none focus-visible:ring-0 focus-visible:border-primary" dir="ltr" />
          <Select value={formData.unit} onValueChange={(v) => setFormData({ ...formData, unit: v })}>
            <SelectTrigger className="h-11 border-0 border-b border-border bg-transparent rounded-none focus:ring-0">
              <SelectValue placeholder="Unit Type Preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="large-villa">Large Villa — 465 sqm</SelectItem>
              <SelectItem value="medium-villa">Medium Villa — 395–397 sqm</SelectItem>
              <SelectItem value="small-villa">Small Villa — 331.5 sqm</SelectItem>
              <SelectItem value="twin-house">Twin House — 276–286 sqm</SelectItem>
              <SelectItem value="town-house">Town House — 262.5 sqm</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" disabled={loading}
            className="w-full h-12 font-black text-xs tracking-widest uppercase" style={{background:"#4A5C3A"}}>
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
