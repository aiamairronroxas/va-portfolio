import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection, useScrolled } from "@/hooks/useSiteScroll";
import { NAV_LINKS } from "@/lib/site-data";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = NAV_LINKS;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled ? "border-border bg-white/85 backdrop-blur-md" : "border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a
          href="#home"
          aria-label="Aiam Airron Roxas — back to top"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-navy shadow-[0_8px_20px_-10px_rgba(15,23,42,0.75)] ring-1 ring-inset ring-white/15">
            <span className="font-heading text-[12.5px] font-semibold tracking-[0.1em] text-white">AR</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
          </span>
          <span className="hidden flex-col xl:flex">
            <span className="text-[13px] font-semibold leading-none tracking-[-0.01em] text-navy">
              Aiam Airron Roxas
            </span>
            <span className="mt-1 text-[9.5px] font-semibold uppercase leading-none tracking-[0.16em] text-muted-foreground">
              Virtual Assistant
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative rounded-lg px-2.5 py-2 text-[13px] font-medium transition-colors",
                active === link.id ? "text-brand" : "text-muted-foreground hover:text-navy"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden lg:inline-flex">
            Hire Me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-white text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav aria-label="Mobile" className="section-shell flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-[48px] items-center rounded-lg px-3 text-[15px] font-medium transition-colors",
                  active === link.id ? "bg-brand-soft/60 text-brand" : "text-navy hover:bg-secondary"
                )}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}