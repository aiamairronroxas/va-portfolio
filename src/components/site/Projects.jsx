import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { PROJECTS } from "@/lib/site-data";
import { PROJECT_IMAGES } from "@/lib/site-images";

function ProjectCard({ project }) {
  return (
    <article className="card-base group flex h-full flex-col overflow-hidden">
      <div className="relative overflow-hidden bg-[#F1F5F9]">
        <Image
          src={PROJECT_IMAGES[project.number]}
          alt={`Illustrative abstract graphic representing ${project.title}`}
          className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[210px]"
          fittingType="fill"
        />
        <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-navy backdrop-blur">
          PROJECT {project.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[15.5px] font-semibold leading-snug tracking-tight text-navy">{project.title}</h3>
        <p className="body-justify mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="mt-4 text-[11.5px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
          {project.tools}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow mt-4 self-start"
          aria-label={`View project ${project.number}: ${project.title} (opens in a new tab)`}
        >
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="portfolio" className="section-anchor border-t border-border">
      <div className="section-shell py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-navy sm:text-[2.1rem]">
            Selected Projects
          </h2>
          <p className="body-justify mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Practical sample projects demonstrating my administrative, organizational, and technical capabilities.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.number} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          <Reveal delay={320}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-navy p-7 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Note</p>
              <p className="mt-3 text-[15px] font-semibold leading-snug">
                All projects above are sample and practice work.
              </p>
              <p className="body-justify mt-3 text-[13.5px] leading-relaxed text-white/70">
                They were created to demonstrate process, formatting, and organization — not client engagements or
                delivered business results.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}