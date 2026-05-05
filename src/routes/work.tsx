import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import workCreator from "@/assets/work-creator.jpg";
import workBrand from "@/assets/work-brand.jpg";
import workCourse from "@/assets/work-course.jpg";
import workProduct from "@/assets/work-product.jpg";
import workVlog from "@/assets/work-vlog.jpg";
import workWebinar from "@/assets/work-webinar.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — BrandBounce Video Editing Portfolio" },
      { name: "description", content: "Selected video edits across creator content, branded videos, courses, and product/promo." },
    ],
  }),
  component: Work,
});

const items = [
  { img: workCreator, cat: "Creator", title: "Fitness Reels series", client: "Lifestyle creator" },
  { img: workBrand, cat: "Brand", title: "Audio brand launch", client: "DTC e-commerce" },
  { img: workCourse, cat: "Course", title: "Online course module", client: "Education platform" },
  { img: workProduct, cat: "Product", title: "SaaS explainer", client: "B2B startup" },
  { img: workVlog, cat: "Creator", title: "Travel vlog cut", client: "YouTuber" },
  { img: workWebinar, cat: "Course", title: "Webinar highlight reel", client: "Conference" },
];

const cats = ["All", "Creator", "Brand", "Course", "Product"] as const;

function Work() {
  const [active, setActive] = useState<typeof cats[number]>("All");
  const filtered = active === "All" ? items : items.filter(i => i.cat === active);

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-primary uppercase tracking-widest mb-3">Portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold">Work that <span className="text-gradient-brand">moves people</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground">A selection of recent edits across creators, brands, courses, and product launches.</p>
      </div>

      <div className="mt-12 flex flex-wrap gap-2">
        {cats.map(c => (
          <button key={c} onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${active === c ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((it, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl border border-border/40 aspect-[4/5]">
            <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="h-5 w-5 text-primary fill-primary" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs text-primary uppercase tracking-widest">{it.cat}</span>
              <h3 className="mt-1 text-xl font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.client}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Want to be next?</h2>
        <Link to="/contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90">
          Start a project
        </Link>
      </div>
    </div>
  );
}
