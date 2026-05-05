import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Precise edits. Powerful storytelling. A dedicated video editing studio for creators, brands, and educators.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Studio</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/work" className="hover:text-foreground">Work</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Send footage</Link></li>
              <li><a href="mailto:hello@brandbounce.com" className="hover:text-foreground">hello@brandbounce.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} BrandBounce. All rights reserved.</p>
          <p>Precise edits. Powerful storytelling.</p>
        </div>
      </div>
    </footer>
  );
}
