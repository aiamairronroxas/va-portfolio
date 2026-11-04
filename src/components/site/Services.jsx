import { Briefcase, CalendarClock, ClipboardList, FileText, Table2 } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";

const icons = [ClipboardList, CalendarClock, Table2, FileText, Briefcase];

export default function Services() {
  return (
    <section id="services" className="section-anchor border-t border-border">
      <div className="section-shell py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            How I can support your business
          </h2>
          <p className="body-justify mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Services I am prepared to offer as I begin my virtual assistance practice.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.title} delay={index * 60}>
                <article className="card-base h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft/70 text-brand">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[15.5px] font-semibold tracking-tight text-navy">{service.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-muted-foreground">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand/70" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={300}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-navy p-6 text-white">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Availability</p>
                <h3 className="mt-3 text-[16px] font-semibold leading-snug">
                  Ready to support a team remotely.
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">
                  Open to part-time, full-time, and project-based administrative support engagements.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 hover:text-white"
              >
                Get in touch →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}