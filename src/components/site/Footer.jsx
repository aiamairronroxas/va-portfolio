import { Linkedin, Mail } from "lucide-react";
import { EMAIL, LINKEDIN } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[14px] font-semibold tracking-tight text-navy">Aiam Airron Roxas</p>
          <p className="mt-1 text-[12.5px] text-muted-foreground">General / Administrative Virtual Assistant</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-muted-foreground transition-colors hover:text-brand"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-muted-foreground transition-colors hover:text-brand"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <p className="text-[12.5px] text-muted-foreground">© {year} Aiam Airron Roxas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}