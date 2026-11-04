import { ArrowUpRight, Download, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { HERO_VISUAL } from "@/lib/site-images";
import { EMAIL, RESUME_URL } from "@/lib/site-data";

const facts = [
  { icon: GraduationCap, label: "BS Computer Engineering" },
  { icon: ShieldCheck, label: "Nestlé PH IT Internship" },
  { icon: MapPin, label: "Bulacan, Philippines" },
];

export default function Hero() {
  return (
    <section id="home" className="section-anchor relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="section-shell relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
        <Reveal>
          <p className="eyebrow">General / Administrative Virtual Assistant</p>
          <h1 className="mt-5 text-balance text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.03em] text-navy sm:text-[2.7rem] lg:text-[3.1rem]">
            Reliable Administrative Support. Powered by Technology.
          </h1>
          <p className="body-justify mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            Hi, I'm Aiam — a Computer Engineering graduate transitioning into General Virtual Assistance. I help
            businesses stay organized through reliable administrative support, technical skills, and attention to
            detail.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#portfolio" className="btn-primary w-full sm:w-auto">
              Explore My Portfolio
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <p className="mt-6 text-[13px] text-muted-foreground">
            Open to remote opportunities ·{" "}
            <a href={`mailto:${EMAIL}`} className="font-medium text-navy underline decoration-border underline-offset-4 hover:decoration-brand">
              {EMAIL}
            </a>
          </p>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[26px] border border-border bg-white p-3 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)]">
            <div className="overflow-hidden rounded-[18px] bg-[#F1F5F9]">
              <Image
                src={HERO_VISUAL}
                alt="Abstract geometric composition representing structure, flow and organized systems"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                fittingType="fill"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2.5"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-[12px] font-medium leading-tight text-navy">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}