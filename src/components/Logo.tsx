import { useEffect, useState } from "react";
import icon from "@/assets/logo-icon.png";
import text from "@/assets/logo-text.png";

type Variant = "icon" | "wordmark" | "scroll-morph";

export function Logo({ variant = "icon" }: { variant?: Variant }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "scroll-morph") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  if (variant === "icon") {
    return (
      <img src={icon} alt="BrandBounce" className="h-9 w-9 object-contain" width={36} height={36} />
    );
  }

  if (variant === "wordmark") {
    return (
      <img src={text} alt="BrandBounce" className="h-20 md:h-32 object-contain" height={128} />
    );
  }

  // scroll-morph: wordmark at top, icon after scrolling
  return (
    <div className="relative h-14 w-56 md:h-16 md:w-72">
      <img
        src={text}
        alt="BrandBounce"
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-32 md:h-34 object-contain transition-all duration-500 ease-out ${
          scrolled ? "opacity-0 -translate-x-2 scale-95" : "opacity-100 translate-x-0 scale-100"
        }`}
      />
      <img
        src={icon}
        alt="BrandBounce"
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-9 w-9 object-contain transition-all duration-500 ease-out ${
          scrolled ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-2 scale-90"
        }`}
      />
    </div>
  );
}
