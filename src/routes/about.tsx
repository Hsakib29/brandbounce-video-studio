import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BrandBounce Video Editing Studio" },
      { name: "description", content: "A studio specialized in video editing — storytelling, brand consistency, and attention to detail." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Clarity", d: "No more raw footage — just polished, ready-to-post videos." },
  { t: "Trust", d: "Consistent style, brand-aligned edits, and clear communication." },
  { t: "Speed", d: "Quick turnaround without compromising on quality." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-primary uppercase tracking-widest mb-3">About</p>
        <h1 className="text-5xl md:text-7xl font-bold">A studio that lives inside the <span className="text-gradient-brand">timeline</span>.</h1>
        <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
          BrandBounce is a dedicated video editing studio. We don't shoot, we don't strategize for the sake of it — we edit.
          That focus is what lets us turn raw recordings into stories that hold attention and represent your brand with precision.
        </p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-6">
        {values.map(v => (
          <div key={v.t} className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gradient-brand">{v.t}</h3>
            <p className="mt-3 text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold">Why focus only on editing?</h2>
        </div>
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>Editing is where good footage becomes a great video. Pacing, sound, color, motion graphics — every frame is a decision.</p>
          <p>By specializing, we go deeper. Every project benefits from systems, templates, and craft built across hundreds of edits.</p>
          <p>The result: edits that feel intentional, look cinematic, and protect your brand voice from cut to cut.</p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90">
          Work with us
        </Link>
      </div>
    </div>
  );
}
