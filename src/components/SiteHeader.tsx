import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="BrandBounce home"><Logo variant="scroll-morph" /></Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {nav.map(n => (
            <Link key={n.to} to={n.to} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden lg:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
          <Link to="/contact">Send footage</Link>
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1 text-base">
              {nav.map(n => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-foreground bg-secondary" }}
                  className="rounded-md px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Button asChild size="lg" className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link to="/contact" onClick={() => setOpen(false)}>Send footage</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
