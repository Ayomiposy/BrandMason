import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";


export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — From Blueprint to Built Reality | BrandMason" },
      { name: "description", content: "Explore BrandMason's project capabilities: spatial transformation, signage, structural execution, experiential design, and brand amplification." },
      { property: "og:title", content: "Projects — BrandMason" },
      { property: "og:description", content: "Bridging creative brand identity and physical, structural execution." },
    ],
  }),
});

type Tabs = {
  key: string;
  label: string;
  heading: string;
  body: string;
  images: { url: string; alt: string }[];
  videoUrl?: string;
}

const tabs: Tabs[] = [
  {
    key: "spatial",
    label: "Spatial Transformation",
    heading: "Spatial Transformation",
    body: "Space management, corporate interior and exterior branding, and building facades. We transform physical spaces to tell your brand story seamlessly.",
    images: [{ url: "/new-spatial-transformation-1.jpeg", alt: "Spatial Transformation" }, { url: "/new-spatial-transformation-2.jpeg", alt: "Spatial Transformation 2" }, { url: "/new-spatial-transformation-3.jpg", alt: "Spatial Transformation 3" }],
    // videoUrl: "/new-spatial-transformation-vid.mp4"
  },
  {
    key: "signage",
    label: "Signage Solutions",
    heading: "Signage Solutions",
    body: "Architectural signage fabrication, precision installation, and ongoing maintenance across every environment.",
    images: [{ url: "/new-signage-solution-1.jpeg", alt: "Signage Solution image 1" }, { url: "/new-signage-solution-2.jpeg", alt: "Signage Solution image 2" }, { url: "/new-signage-solution-3.jpg", alt: "Signage Solution image 3" }, { url: "/new-signage-solution-4.jpeg", alt: "Signage Solution image 4" }, { url: "/new-signage-solution-6.jpg", alt: "Signage Solution image 6" }]
  },
  {
    key: "structural",
    label: "Structural Execution",
    heading: "Structural Execution",
    body: "Commercial renovations, specialized construction, and mobile & static kiosk fabrication delivered end-to-end.",
    images: [{ url: "/structural-execution-1.jpg", alt: "Structural Execution image 1" }, { url: "/new-structural-execution-2.jpeg", alt: "Structural Execution image 2" }, { url: "/structural-execution-3.jpg", alt: "Structural Execution image 3" }]
  },
  {
    key: "experiential",
    label: "Experiential Design",
    heading: "Experiential Design",
    body: "Concept design, custom event fabrication, and on-site installation for memorable brand moments.",
    images: [{ url: "/experimental-design-1.jpg", alt: "Experiential Design image 1" }, { url: "/experimental-design-2.jpg", alt: "Experiential Design image 2" }, { url: "/experimental-design-3.jpg", alt: "Experiential Design image 3" }, { url: "/experimental-design-4.jpeg", alt: "Experiential Design image 4" }, { url: "/experimental-design-5.jpg", alt: "Experiential Design image 5" }],
  },
  {
    key: "amplification",
    label: "Brand Amplification",
    heading: "Brand Amplification",
    body: "Out of Home (OOH) advertising, promotional products, and bespoke corporate gifts that scale your presence.",
    images: [{ url: "/brand-amplification-1.jpg", alt: "Brand Amplification image 1" }, { url: "/brand-amplification-2.jpg", alt: "Brand Amplification image 2" }, { url: "/brand-amplification-3.jpg", alt: "Brand Amplification image 3" }],
    videoUrl: "/new-experimental-design-vid.mp4",
  },
] as const;

function Projects() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("spatial");
  const current = tabs.find((t) => t.key === active)!;
  console.log("current", current);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 py-30 grid-bg bg-cream-deep/60">
        <div className="max-w-[90rem] mx-auto w-full min-h-[300px] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
            From Blueprint to<br />Built Reality
          </h1>
          <p className="mt-6 text-2xl text-foreground/80 max-w-lg">
            Bridging the gap between creative brand identity and physical, structural execution.
          </p>
          <div>
            <button className="inline-flex items-center gap-2 mt-8 border border-ink px-8 py-4 text-lg font-semibold hover:bg-ink hover:text-ink-foreground transition-all duration-200 cursor-pointer bg-transparent">
              Download Corporate Profile PDF <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <nav className="px-6 md:px-12 border-b border-border bg-card">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="flex flex-wrap gap-8">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`py-6 text-xl transition-colors relative cursor-pointer font-medium ${active === t.key ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t.label}
                {active === t.key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Capability block */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="flex sm:flex-col md:flex-row justify-between gap-10 lg:gap-20 items-start min-h-[220px]">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">{current.heading}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-sm">{current.body}</p>
            </div>
            <div>
              <div className="flex flex-col gap-5g">
                <div className="md:col-span-2 grid grid-cols-3 gap-4">
                  {current.images.map((img, i) => (
                    <img src={img.url} alt={img.alt} key={i} className="aspect-square bg-cream-deep/60 border border-border" />
                  ))}
                </div>
                {current.videoUrl && <video src={current.videoUrl} className="w-full h-full mt-5" autoPlay loop muted playsInline />}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ink-foreground px-6 md:px-12 py-30">
        <div className="max-w-[90rem] mx-auto w-full min-h-[220px] flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl leading-[1.1] max-w-3xl">
            Have a signage, branding, renovation or construction project?<br />Let's conduct a detailed review.
          </h2>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              Book a Site Survey & Consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
