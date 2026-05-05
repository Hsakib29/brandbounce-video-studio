import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import workCreator from "@/assets/work-creator.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workCourse from "@/assets/work-course.jpg";
import workProduct from "@/assets/work-product.jpg";
import { ArrowRight, Play, Scissors, Sparkles, Type, Share2, Package, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrandBounce — Professional Video Editing Studio" },
      { name: "description", content: "Precise edits. Powerful storytelling. A video editing agency for creators, brands, and educators." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Scissors, title: "Standard Editing", desc: "Cuts, pacing, color, music, captions for vlogs and tutorials." },
  { icon: Sparkles, title: "Premium Narrative", desc: "Story-driven edits with grading and refined sound design." },
  { icon: Type, title: "Motion Graphics", desc: "Animated titles, lower-thirds, and on-brand callouts." },
  { icon: Share2, title: "Social Edits", desc: "Reels, Shorts, TikToks repurposed from long-form." },
  { icon: Package, title: "Product & Promo", desc: "Tight, brand-aligned product, demo, and launch videos." },
  { icon: GraduationCap, title: "Course & Webinar", desc: "Cleaned-up sessions with chapters and branded intros." },
];

const stats = [
  { k: "500+", v: "Videos delivered" },
  { k: "48h", v: "Avg first cut" },
  { k: "120+", v: "Happy clients" },
  { k: "98%", v: "Repeat rate" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1088} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 glass-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Now booking Q3 retainers
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Precise edits.<br />
            <span className="text-gradient-brand">Powerful</span> storytelling.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A dedicated video editing studio crafting polished, on-brand videos for creators, agencies, and educators — fast.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Send us your footage <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-transparent">
              <Link to="/work"><Play className="mr-2 h-4 w-4" /> Watch our reel</Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.v} className="glass-card rounded-xl p-5">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient-brand">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/40 py-6 overflow-hidden bg-surface/50">
        <div className="flex gap-16 animate-marquee whitespace-nowrap text-2xl font-display text-muted-foreground/60">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16">
              {["Creators", "Brands", "Agencies", "Coaches", "Startups", "Educators", "Founders", "Studios"].map(w => (
                <span key={w} className="flex items-center gap-16">
                  {w} <span className="text-primary">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-3">What we do</p>
            <h2 className="text-4xl md:text-6xl font-bold max-w-2xl">Editing services, end&#8209;to&#8209;end.</h2>
          </div>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(s => (
            <div key={s.title} className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-colors group">
              <s.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-3">Featured work</p>
            <h2 className="text-4xl md:text-6xl font-bold">Recent edits.</h2>
          </div>
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            View portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-12 gap-4">
          <WorkCard className="md:col-span-5 md:row-span-2 aspect-[3/4]" img={workCreator} tag="Creator content" title="Fitness Reels series" />
          <WorkCard className="md:col-span-7 aspect-[16/9]" img={workBrand} tag="Brand promo" title="Audio brand launch" />
          <WorkCard className="md:col-span-4 aspect-square" img={workProduct} tag="Product" title="SaaS explainer" />
          <WorkCard className="md:col-span-3 aspect-square" img={workCourse} tag="Course" title="Educator module" />
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-primary uppercase tracking-widest mb-3">How it works</p>
              <h2 className="text-4xl md:text-5xl font-bold">From raw footage to ready-to-post in 4 steps.</h2>
              <p className="mt-4 text-muted-foreground">Discovery, asset collection, editing & review, delivery. Predictable, transparent, and built around your brand.</p>
              <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/process">See the process</Link>
              </Button>
            </div>
            <ol className="space-y-4">
              {["Discovery call & brief", "Asset collection & brand guide", "Editing & revision rounds", "Final delivery, every format"].map((step, i) => (
                <li key={step} className="flex items-start gap-4 p-4 rounded-xl bg-surface/60 border border-border/40">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand text-primary-foreground font-display font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-2 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto">
            Got footage? <span className="text-gradient-brand">Let's edit it.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with a tailored plan.
          </p>
          <Button asChild size="lg" className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function WorkCard({ img, tag, title, className = "" }: { img: string; tag: string; title: string; className?: string }) {
  return (
    <Link to="/work" className={`group relative overflow-hidden rounded-2xl border border-border/40 ${className}`}>
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-xs text-primary uppercase tracking-widest">{tag}</span>
        <h3 className="mt-1 text-lg md:text-xl font-semibold">{title}</h3>
      </div>
      <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Play className="h-4 w-4 text-primary fill-primary" />
      </div>
    </Link>
  );
}
