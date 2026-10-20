import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";


export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About BrandMason — Great brands are carefully built" },
      { name: "description", content: "Meet the team, mission and craft behind BrandMason's branding and architectural work." },
      { property: "og:title", content: "About BrandMason" },
      { property: "og:description", content: "Meet the team, mission and craft behind BrandMason." },
    ],
  }),
});

const directors = [
  { name: "Temitayo Ogunkoya", role: "Managing Director", sub: "", image: "/temitope.jpg" },
  { name: "Sammy Ogunjimi", role: "Board of Directors", sub: "Group Managing Director, Codix Group", image: "/sammy.jpg" },
  { name: "Mopelola Abudu", role: "Board of Directors", sub: "Managing Partner, AfriGloCal Venture Capital", image: "/mopelola.jpg" },
  { name: "Funmilayo Ajomale", role: "Board of Directors", sub: "Corporate Commercial Lawyer & Legal Strategist", image: "/funmilayo.jpg" },
];

function About() {
  const [tab, setTab] = useState<"brand" | "mason">("mason");
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 pb-16 grid-bg">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-10 items-start py-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1]">
                Great brands are not created by chance; they are carefully built.
              </h1>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                A mason is a skilled craftsman who transforms raw materials into structures that are strong, purposeful,
                and built to last.
              </p>
              <div className="mt-8 grid grid-cols-2 border border-border">
                <button
                  onClick={() => setTab("brand")}
                  className={`p-5 text-left transition-colors cursor-pointer min-h-[140px] flex flex-col justify-center ${tab === "brand" ? "bg-ink text-ink-foreground" : "bg-card text-foreground"}`}
                >
                  <p className="text-primary text-5xl mb-2">Brand</p>
                  <p className="text-lg opacity-80 leading-relaxed">Identity, perception, visibility, storytelling.</p>
                </button>
                <button
                  onClick={() => setTab("mason")}
                  className={`p-5 text-left transition-colors cursor-pointer min-h-[140px] flex flex-col justify-center ${tab === "mason" ? "bg-ink text-ink-foreground" : "bg-card text-foreground"}`}
                >
                  <p className="text-primary text-5xl mb-2">Mason</p>
                  <p className="text-lg opacity-80 leading-relaxed">Craftsmanship, precision, structure, flawless execution.</p>
                </button>
              </div>
            </div>
            {/* Empty div placeholder for About Hero image */}
            <img src="/brand-amplification-1.jpg" alt="About BrandMason" className="w-full aspect-[4/3] bg-cream-deep/60 border border-border" />
          </div>
        </div>
      </section>

      {/* Why we build */}
      <section className="bg-cream-deep px-6 md:px-12 py-20">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">Why we build.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border p-8 bg-card flex flex-col justify-center min-h-[240px]">
              <p className="text-3xl text-primary mb-4 font-semibold uppercase tracking-wider">VISION</p>
              <p className="text-2xl mb-3 leading-snug text-foreground">To eliminate the challenge of invisible brands, inefficient spaces, and inconsistent identities.</p>
              <p className="text-muted-foreground leading-relaxed">
                By creating environments that differentiate, communicate clearly, function seamlessly, and inspire absolute confidence.
              </p>
            </div>
            <div className="p-8 bg-ink text-ink-foreground flex flex-col justify-center min-h-[240px]">
              <p className="text-3xl text-primary mb-4 font-semibold uppercase tracking-wider">MISSION</p>
              <p className="text-2xl mb-3 leading-snug text-primary-foreground">To deliver high-quality branding, intelligent signage, renovation and building solutions.</p>
              <p className="text-ink-foreground/70 leading-relaxed">
                That enhance brand visibility, transform business spaces, and create lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="bg-ink text-ink-foreground px-6 md:px-12 py-30">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            The <span className="text-primary">Brand</span>Mason Advantage
          </h2>
          <p className="text-ink-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Most agencies either design a brand or construct a space. We seamlessly integrate both — blending marketing
            intelligence with architectural precision to deliver consistent, high-impact environments on time, with zero
            compromise on quality.
          </p>
          <div className="grid md:grid-cols-2 border border-ink-foreground/20">
            <div className="p-8 border-r border-ink-foreground/20 flex flex-col min-h-[280px]">
              <p className="text-3xl text-primary mb-4 font-semibold uppercase tracking-wider">THE HOOK</p>
              <p className="text-2xl mb-3 leading-snug">Most agencies either design a brand or construct a space. We seamlessly integrate both.</p>
              <p className="text-ink-foreground/70 leading-relaxed">
                BrandMason uniquely bridges the gap between creative vision and physical reality. By blending marketing intelligence with architectural precision, we deliver consistent, high-impact environments on time, with zero compromise on quality that enhance brand visibility, transform business spaces, and create lasting impressions.
              </p>
            </div>
            <div className="p-8 flex flex-col min-h-[280px]">
              <p className="text-3xl text-primary font-semibold uppercase tracking-wider">CORE VALUES</p>
              {/* <p className="text-ink-foreground/70 mb-6 leading-relaxed">That enhance brand visibility, transform business spaces, and create lasting impressions.</p> */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Creativity", "Innovation", "Integrity", "Professionalism", "Customer Satisfaction", "Resilience", "Teamwork"].map((v) => (
                  <span key={v} className="px-4 py-2 border border-ink-foreground/20 text-2xl bg-ink-foreground/5 font-medium">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="px-6 md:px-12 pb-20 mt-10">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">
            Board of <span className="text-primary">Directors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((d) => (
              <div key={d.name} className="border border-border bg-card overflow-hidden flex py-5 px-7 flex-col">

                <img src={d.image} alt={d.name} className="w-full h-72 object-cover mb-4" />
                <div className=" flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-2xl">{d.name}</h4>
                    <p className="text-primary text-[15px] font-medium mt-1">{d.role}</p>
                    {d.sub && <p className="text-base text-muted-foreground mt-2 leading-relaxed">{d.sub}</p>}
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-semibold">
                    <span>READ BIO</span>
                    <span>+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-ink text-ink-foreground px-6 md:px-12 py-30">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">Trust, engineered in.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-ink-foreground/20 p-8 flex flex-col justify-center min-h-[220px]">
              <p className="text-3xl text-primary mb-3 font-semibold uppercase tracking-wider">SAFETY</p>
              <h3 className="text-2xl font-semibold mb-3 text-primary-foreground">Built with Care.</h3>
              <p className="text-ink-foreground/70 leading-relaxed">
                Precision is our blueprint for safety. We work at the intersection of heavy fabrication and live installations. We equip master craftsmen with rigorous training, manage active sites to mitigate operational risk, and secure high-impact signage to protect public spaces.
              </p>
            </div>
            <div className="border border-ink-foreground/20 p-8 flex flex-col justify-center min-h-[220px]">
              <p className="text-3xl text-primary mb-3 font-semibold uppercase tracking-wider">SDG</p>
              <h3 className="text-2xl font-semibold mb-3 text-primary-foreground">SDG Compliance</h3>
              <p className="text-ink-foreground/70 leading-relaxed">
                True growth is built on a foundation of responsibility. We actively balance people, planet, and profit by aligning our corporate growth with the UN Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
