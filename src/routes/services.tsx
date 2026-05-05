import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Check, Scissors, Sparkles, Type, Share2, Package, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BrandBounce Video Editing" },
      { name: "description", content: "Standard edits, premium narrative, motion graphics, social repurposing, product/promo, and course editing." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Scissors, title: "Standard Video Editing",
    desc: "Shot selection, trimming, pacing, background music, basic color correction, and clean text overlays. Ideal for vlogs, tutorials, and basic social content.",
    bullets: ["Cuts & pacing", "Background music & SFX", "Basic color correction", "Captions & overlays"],
  },
  {
    icon: Sparkles, title: "Premium Narrative Editing",
    desc: "Story-driven structure, multi-camera sync, advanced color grading, refined sound design. For campaigns, brand films, and high-impact promos.",
    bullets: ["Story structure", "Multi-cam sync", "Advanced color grade", "Sound design & mix"],
  },
  {
    icon: Type, title: "Motion Graphics & Lower-Thirds",
    desc: "Animated titles, lower-thirds, CTAs, and simple motion graphics that keep branding consistent and visually engaging.",
    bullets: ["Animated titles", "Lower-thirds", "CTA animations", "Brand-aligned graphics"],
  },
  {
    icon: Share2, title: "Social-Optimized Edits",
    desc: "Repurpose long-form videos into Reels, Shorts, and TikToks. Aspect-ratio adjustments, captions, and platform-ready formatting.",
    bullets: ["9:16 / 1:1 / 16:9", "Auto-captions", "Hook-first cuts", "Multi-platform exports"],
  },
  {
    icon: Package, title: "Product & Promo Videos",
    desc: "Tight pacing, clear messages, and attention to brand tone for product demos, launch videos, and explainer content.",
    bullets: ["Product demos", "Launch videos", "Explainers", "Tight, brand-tone pacing"],
  },
  {
    icon: GraduationCap, title: "Course & Webinar Editing",
    desc: "Clean up recorded sessions with cuts, zoom-ins, and visual cues. Subtitles, chapter markers, and branded intro/outro sequences.",
    bullets: ["Dead-air cuts", "Zoom-ins & cues", "Subtitles & chapters", "Branded intros/outros"],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-primary uppercase tracking-widest mb-3">Services</p>
        <h1 className="text-5xl md:text-7xl font-bold">Editing built around your <span className="text-gradient-brand">brand</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground">No more raw footage — just polished, ready-to-post videos. Pick a service or combine them into a retainer.</p>
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <div key={s.title} className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-colors">
            <s.icon className="h-10 w-10 text-primary mb-6" />
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {s.bullets.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-24 glass-card rounded-3xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Need ongoing editing?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Retainer-style support for creators and agencies who post regularly. Consistent style, on-brand templates, predictable workflow.</p>
        <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/contact">Talk to us</Link>
        </Button>
      </div>
    </div>
  );
}
