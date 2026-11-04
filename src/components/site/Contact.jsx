import { Linkedin, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { EMAIL, LINKEDIN, LOCATION } from "@/lib/site-data";

const rows = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aiamairronroxas", href: LINKEDIN },
  { icon: MapPin, label: "Location", value: LOCATION, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-anchor border-t border-border">
      <div className="section-shell py-16 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:p-12">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight tracking-[-0.025em] text-navy sm:text-[2.3rem]">
                  Let's Work Together
                </h2>
                <p className="body-justify mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                  I'm looking forward to connecting with businesses and teams that need reliable administrative
                  support. Feel free to reach out!
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={`mailto:${EMAIL}`} className="btn-primary w-full sm:w-auto">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full sm:w-auto"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-background p-2">
                <dl className="divide-y divide-border">
                  {rows.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5 p-4">
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-brand">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <dt className="field-label">{label}</dt>
                        <dd className="mt-1 break-words text-[13.5px] font-medium text-navy">
                          {href ? (
                            <a
                              href={href}
                              target={href.startsWith("http") ? "_blank" : undefined}
                              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="underline decoration-border underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                            >
                              {value}
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}