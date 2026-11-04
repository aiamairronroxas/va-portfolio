import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import Skills from "@/components/site/Skills";
import Projects from "@/components/site/Projects";
import Credentials from "@/components/site/Credentials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import BackToTop from "@/components/site/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aiam Airron Roxas — General / Administrative Virtual Assistant" },
      {
        name: "description",
        content:
          "Portfolio of Aiam Airron Roxas, a Computer Engineering graduate transitioning into General Virtual Assistance — reliable administrative support powered by technical skill.",
      },
      { property: "og:title", content: "Aiam Airron Roxas — General / Administrative Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Reliable administrative support powered by technology. Services, skills, sample projects, and certifications.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}