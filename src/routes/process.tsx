import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageSquare, FolderUp, Wand2, Send } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "How it works — BrandBounce Process" },
      { name: "description", content: "Discovery, asset collection, editing & review, delivery — a transparent video editing workflow." },
    ],
  }),
  component: Process,
});

const steps = [
  { icon: MessageSquare, title: "Discovery", desc: "A short call or questionnaire to understand goals, audience, and style references." },
  { icon: FolderUp, title: "Asset Collection", desc: "You send raw footage, logos, music, and brand guidelines. We organize everything." },
  { icon: Wand2, title: "Editing & Review", desc: "First cut delivered, then refined through clear, time-stamped revision rounds." },
  { icon: Send, title: "Delivery", desc: "Final files in every format you need — YouTube, Instagram, TikTok, web, broadcast." },
];

function Process() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-primary uppercase tracking-widest mb-3">How it works</p>
        <h1 className="text-5xl md:text-7xl font-bold">A workflow built for <span className="text-gradient-brand">speed & clarity</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground">Predictable steps, transparent communication, and a polished final cut every time.</p>
      </div>

      <div className="mt-20 relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent hidden md:block" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={s.title} className="md:pl-24 relative">
              <div className="absolute left-0 top-0 hidden md:flex h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-brand items-center justify-center shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-5xl font-display font-bold text-gradient-brand">0{i + 1}</span>
                  <h2 className="text-2xl md:text-3xl font-semibold">{s.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 glass-card rounded-3xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to kick off?</h2>
        <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90">
          Send your footage
        </Link>
      </div>
    </div>
  );
}
