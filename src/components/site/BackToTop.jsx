import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useSiteScroll";

export default function BackToTop() {
  const visible = useScrolled(600);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-navy shadow-[0_12px_30px_-14px_rgba(15,23,42,0.5)] transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}