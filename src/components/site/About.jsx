import Reveal from "@/components/site/Reveal";

const details = [
  { label: "Education", value: "BS Computer Engineering, Bulacan State University — June 2026" },
  { label: "Internship", value: "Information Technology Intern, Nestlé Philippines — June to December 2025" },
  { label: "Focus", value: "General / Administrative Virtual Assistance" },
  { label: "Location", value: "Santa Maria, Bulacan, Philippines" },
];

export default function About() {
  return (
    <section id="about" className="section-anchor border-t border-border bg-white">
      <div className="section-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">About Me</p>
          <h2 className="mt-4 text-balance text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            A technical foundation, applied to organized support work.
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-8">
          <div className="body-justify space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I'm a Bachelor of Science in Computer Engineering graduate from Bulacan State University, graduating in
              June 2026. Alongside my studies, I completed an Information Technology internship at Nestlé Philippines
              from June to December 2025.
            </p>
            <p>
              That internship gave me hands-on experience in computer and software troubleshooting, hardware setup,
              software installation and configuration, IT help desk and user support, documentation and data entry,
              asset and inventory management, network troubleshooting, and daily use of Microsoft Office and Google
              Workspace.
            </p>
            <p>
              I'm now transitioning into General / Administrative Virtual Assistance, bringing the same
              detail-oriented, systems-first approach to remote administrative work. I value clear documentation,
              consistent organization, and follow-through — and I'm committed to learning each client's processes
              properly.
            </p>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="bg-white p-5">
                <dt className="field-label">{item.label}</dt>
                <dd className="mt-1.5 text-[13.5px] font-medium leading-snug text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}