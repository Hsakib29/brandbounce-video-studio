import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Calendar, MessageSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — BrandBounce" },
      { name: "description", content: "Send us your footage. We respond within 24 hours with a tailored editing plan." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "How do you receive and organize footage?", a: "Drive, Dropbox, Frame.io, or WeTransfer — whatever's easiest for you. We organize everything in our own structured workspace." },
  { q: "How many revisions are included?", a: "Two rounds of revisions are standard on every project. Retainers include unlimited rounds within scope." },
  { q: "What's your typical turnaround time?", a: "First cut in 48–72 hours for short-form, 5–7 days for long-form. Rush options available." },
  { q: "Which formats do you deliver in?", a: "MP4 (H.264/H.265), MOV (ProRes), and platform-optimized exports for YouTube, Instagram, TikTok, and LinkedIn." },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-primary uppercase tracking-widest mb-3">Contact</p>
        <h1 className="text-5xl md:text-7xl font-bold">Send us your <span className="text-gradient-brand">footage</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground">Tell us about your project. We'll respond within 24 hours.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-8">
        <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch within 24 hours."); }}
          className="lg:col-span-2 glass-card rounded-2xl p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name"><Input required placeholder="Your name" className="bg-background/50" /></Field>
            <Field label="Email"><Input required type="email" placeholder="you@brand.com" className="bg-background/50" /></Field>
          </div>
          <Field label="Project type"><Input placeholder="e.g. YouTube series, brand promo, course" className="bg-background/50" /></Field>
          <Field label="Project details"><Textarea required rows={6} placeholder="Tell us about goals, audience, footage available, and timeline." className="bg-background/50" /></Field>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Send project brief</Button>
        </form>

        <div className="space-y-4">
          <ContactCard icon={Mail} title="Email" lines={["hello@brandbounce.com"]} />
          <ContactCard icon={Calendar} title="Book a call" lines={["20-min discovery call", "calendly.com/brandbounce"]} />
          <ContactCard icon={MessageSquare} title="Avg. response" lines={["Under 24 hours", "Mon–Fri"]} />
        </div>
      </div>

      <div className="mt-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Frequently asked.</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQ key={i} {...f} />)}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}

function ContactCard({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="glass-card rounded-2xl p-6">
      <Icon className="h-6 w-6 text-primary mb-3" />
      <h3 className="font-semibold mb-1">{title}</h3>
      {lines.map(l => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-medium text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 text-muted-foreground">{a}</div>}
    </div>
  );
}
