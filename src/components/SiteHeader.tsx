import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map(n => (
            <Link key={n.to} to={n.to} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
          <Link to="/contact">Send footage</Link>
        </Button>
      </div>
    </header>
  );
}
