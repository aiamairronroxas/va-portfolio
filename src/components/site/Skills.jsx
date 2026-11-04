import Reveal from "@/components/site/Reveal";
import { EXPLORING_TOOLS, SKILL_GROUPS } from "@/lib/site-data";

const levelStyle = {
  Advanced: "bg-brand-soft/70 text-[#1D4ED8]",
  Intermediate: "bg-[#F1F5F9] text-[#475569]",
  Basic: "bg-[#F8FAFC] text-[#64748B]",
};

function levelClass(level) {
  return levelStyle[level] ?? "bg-[#F8FAFC] text-[#64748B]";
}

export default function Skills() {
  return (
    <section id="skills" className="section-anchor border-t border-border bg-white">
      <div className="section-shell py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Skills & Tools</p>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            Software and skills I work with
          </h2>
          <p className="body-justify mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Everyday tools for administrative, data, and technical work.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="card-base h-full p-6">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 divide-y divide-border">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3 py-2.5">
                      <span className="text-[13.5px] font-medium text-navy">{skill.name}</span>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] ${levelClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-6">
          <div className="rounded-2xl border border-dashed border-border bg-background p-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Additional Tools
                </p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  Tools I am currently exploring and familiarizing myself with.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {EXPLORING_TOOLS.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-border bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-navy"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}