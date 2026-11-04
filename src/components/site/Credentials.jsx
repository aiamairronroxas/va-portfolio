import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { AWARDS, CERT_GROUPS } from "@/lib/site-data";

export default function Credentials() {
  return (
    <section id="certifications" className="section-anchor border-t border-border bg-white">
      <div className="section-shell py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Certifications & Education</p>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            Credentials and academic background
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {CERT_GROUPS.map((group, index) => (
            <Reveal key={group.issuer} delay={index * 60}>
              <article className="card-base h-full p-6">
                <div className="flex items-center gap-2.5">
                  <BadgeCheck className="h-4 w-4 text-brand" aria-hidden="true" />
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">{group.issuer}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {group.certificates.map((certificate) => (
                    <li
                      key={certificate}
                      className="border-l border-border pl-3 text-[13.5px] leading-snug text-muted-foreground"
                    >
                      {certificate}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal delay={80}>
            <article className="flex h-full flex-col justify-between rounded-2xl bg-navy p-7 text-white">
              <div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="h-4 w-4 text-white/70" aria-hidden="true" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">Education</p>
                </div>
                <h3 className="mt-4 text-[19px] font-semibold leading-snug">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="mt-1.5 text-[13.5px] text-white/70">Bulacan State University</p>
                <p className="mt-1 text-[12.5px] font-medium uppercase tracking-[0.12em] text-white/50">
                  Graduating June 2026
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="card-base flex h-full flex-col justify-center p-6">
              <div className="flex items-center gap-2.5">
                <Award className="h-4 w-4 text-brand" aria-hidden="true" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">Academic Awards</p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {AWARDS.map((award) => (
                  <li key={award} className="text-[13.5px] font-medium text-navy">
                    {award}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}