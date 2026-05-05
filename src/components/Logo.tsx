import icon from "@/assets/logo-icon.png";
import text from "@/assets/logo-text.png";

export function Logo({ variant = "full" }: { variant?: "full" | "icon" }) {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} alt="BrandBounce" className="h-8 w-8 object-contain" width={32} height={32} />
      {variant === "full" && (
        <img src={text} alt="BrandBounce" className="h-5 object-contain hidden sm:block" height={20} />
      )}
    </div>
  );
}
