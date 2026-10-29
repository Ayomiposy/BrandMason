import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Socials } from "@/components/socials";
import { useState } from "react";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "BrandMason — Crafting Brands, Shaping Spaces" },
      {
        name: "description",
        content:
          "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments.",
      },
      { property: "og:title", content: "BrandMason — Crafting Brands, Shaping Spaces" },
      {
        property: "og:description",
        content:
          "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments.",
      },
    ],
  }),
});

const disciplines = [
  {
    n: "01",
    title: "Spatial Transformation",
    items: ["Space management", "Corporate exterior and interior branding", "Building facades"],
  },
  {
    n: "02",
    title: "Signage Solutions",
    items: [
      "Architectural signage fabrication",
      "Precision installation",
      "Signage refurbishment & maintenance",
    ],
  },
  {
    n: "03",
    title: "Structural Execution",
    items: [
      "Commercial renovations",
      "Specialized construction",
      "Mobile & static kiosk fabrication",
    ],
    dark: true,
  },
  {
    n: "04",
    title: "Experiential Design and Installation",
    items: ["Concept design", "Customized event fabrications", "Installations"],
  },
  {
    n: "05",
    title: "Brand Amplification",
    items: ["Out of Home (OOH) advertising", "Promotional products", "Bespoke corporate gifts"],
  },
];

const directors = [
  {
    name: "Temitayo Ogunkoya",
    role: "Managing Director",
    sub: "",
    image: "/temitope.jpg",
    bio: "Temitayo Ogunkoya is a graduate of the University of Lagos with a Bachelor of Science degree in Economics. She also holds a Masters degree in Human Resource Management from Middlesex University, London and a Master's in Business Administration (MBA).  She has worked in the banking sector and more recently in the Brand & Marketing Communications industry for over 10 years.",
  },
  {
    name: "Sammy Ogunjimi",
    role: "Board of Directors",
    sub: "Group Managing Director, Codix Group",
    image: "/sammy.jpg",
    bio: "Group Managing Director of Codix Group; a visionary leader and business luminary who leverages his strategic acumen to drive organizational growth, innovation, and profitability across a diverse continental portfolio while propelling the company to the forefront of the pharmaceutical industry.",
  },
  {
    name: "Mopelola Abudu",
    role: "Board of Directors",
    sub: "Managing Partner, AfriGloCal Venture Capital",
    image: "/mopelola.jpg",
    bio: "Managing Partner of AfriGloCal Venture Capital; seasoned business strategist with over 25 years of experience who leverages her extensive background in investment, digital transformation, and gender-lens funding to scale African startups and indigenous businesses for global impact.",
  },
  {
    name: "Funmilayo Ajomale",
    role: "Board of Directors",
    sub: "Corporate Commercial Lawyer & Legal Strategist",
    image: "/funmilayo.jpg",
    bio: "Astute corporate commercial lawyer and legal strategist with over 20 years of experience who skillfully blends business management with legal expertise to design risk management methodologies, lead highperforming teams, and drive strategic organizational growth.",
  },
];

function Home() {
  const [activeDirector, setActiveDirector] = useState<string | null>(null);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="relative border-2 border-primary/60 p-10 md:p-16 grid-bg min-h-[480px] flex flex-col justify-center">
            <span className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary" />
            <span className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-primary" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
              Crafting Brands,
              <br />
              Shaping Spaces.
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">
              Your space is your most powerful brand asset.
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              At BrandMason Limited, we turn ideas into experiences people can see, feel, and
              remember. We are a branding and architectural solutions company helping businesses
              bring their brands to life through impactful spaces and environments.
            </p>
            <div>
              <Link
                to="/OurCapability"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Explore Our Solutions <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Story */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">The Story Behind the Name</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-10">
            Great brands, like great buildings, are not assembled — they are built. Built by a
            mason: someone who works with craftsmanship, intention, and precision, one deliberate
            course at a time.
          </p>
          <div className="grid md:grid-cols-2 gap-0 border border-border">
            <div className="p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <h3 className="text-primary text-5xl mb-3">Brand</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brand is identity. It is perception, visibility, storytelling, and how a business is
                experienced.
              </p>
            </div>
            <div className="p-8 bg-ink text-ink-foreground flex flex-col justify-center min-h-[220px]">
              <h3 className="text-primary text-5xl mb-3">Mason</h3>
              <p className="text-ink-foreground/70 leading-relaxed">
                Mason is craftsmanship. It is precision, structure, construction, and flawless
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="bg-cream-deep px-6 md:px-12 py-20">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl mb-3">Five Disciplines. One Build.</h2>
          <p className="text-muted-foreground mb-10">
            Every project is laid course by course — from the structure itself to the story it
            tells.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border border border-border">
            {disciplines.map((d) => (
              <div key={d.n} className="p-6 flex flex-col min-h-[280px] bg-card">
                <div className={`text-sm mb-3`}>{d.n}</div>
                <h3 className="font-semibold mb-4 leading-tight text-2xl">{d.title}</h3>
                <ul className={`text-lg space-y-1.5 mt-auto`}>
                  {d.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage */}
      <section className="bg-ink text-ink-foreground px-6 md:px-12 py-30">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Design and construction,
            <br />
            under one roof.
          </h2>
          <p className="text-ink-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Most agencies either design a brand or construct a space. We seamlessly integrate both —
            blending marketing intelligence with architectural precision to deliver consistent,
            high-impact environments on time, with zero compromise on quality.
          </p>
          <div>
            <p className="text-sm text-primary mb-4 font-semibold uppercase tracking-wider">
              Core Values
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Creativity",
                "Innovation",
                "Integrity",
                "Professionalism",
                "Customer Satisfaction",
                "Resilience",
                "Teamwork",
              ].map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 border border-ink-foreground/20 text-2xl bg-ink-foreground/5 font-medium"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">
            Future-ready and responsible,
            <br />
            by design.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <p className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">
                SAFETY
              </p>
              <h3 className="text-3xl font-semibold mb-3">Built with Care.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Precision is our blueprint for safety. We equip our master craftsmen and engineers,
                manage active sites to mitigate client risks, and engineer assets to protect public
                spaces.
              </p>
            </div>
            <div className="border border-border p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <p className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">
                SDG
              </p>
              <h3 className="text-3xl font-semibold mb-3">SDG Compliance.</h3>
              <p className="text-muted-foreground leading-relaxed">
                We align operations with UN Sustainable Development Goals, balancing people, planet,
                and profit with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs text-primary mb-2 font-semibold uppercase tracking-widest">
                Executive Leadership
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold">
                Board of <span className="text-primary">Directors</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-md">
              Strategic leadership driving architectural precision, brand excellence, and
              sustainable enterprise growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {directors.map((d, index) => {
              const isActive = activeDirector === d.name;
              return (
                <div
                  key={d.name}
                  className={`group relative border bg-card transition-all duration-300 ease-out flex flex-col ${
                    isActive
                      ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20"
                      : "border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  {/* Top accent indicator */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-primary transition-all duration-300 origin-left z-10 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                    }`}
                  />

                  {/* Architectural corner markers (BrandMason signature) */}
                  {isActive && (
                    <div className="pointer-events-none">
                      <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-primary z-20" />
                      <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-primary z-20" />
                      <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-primary z-20" />
                      <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-primary z-20" />
                    </div>
                  )}

                  {/* Image container with subtle zoom & badge */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-muted/30 border-b border-border/60">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Member index chip */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider bg-card/90 backdrop-blur-xs text-foreground/80 border border-border/80 rounded-xs shadow-2xs">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Active pill badge */}
                    {isActive && (
                      <div className="absolute top-3 right-3 animate-in fade-in zoom-in-95 duration-200">
                        <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-xs shadow-xs">
                          Active Bio
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Details & Bio */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
                        {d.role}
                      </p>
                      <h4 className="font-semibold text-2xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                        {d.name}
                      </h4>
                      <div className="min-h-[42px] mt-2">
                        {d.sub ? (
                          <p className="text-sm text-muted-foreground leading-snug line-clamp-2">
                            {d.sub}
                          </p>
                        ) : (
                          <p className="text-sm text-muted-foreground/60 italic leading-snug">
                            BrandMason Leadership
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Interactive Toggle Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDirector((current) => (current === d.name ? null : d.name))
                      }
                      aria-expanded={isActive}
                      className="mt-5 pt-3.5 border-t border-border/80 flex items-center justify-between text-xs font-semibold tracking-wider text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/btn"
                    >
                      <span className="uppercase font-semibold text-[11px] tracking-wider transition-colors duration-200 group-hover/btn:text-primary">
                        {isActive ? "Close Bio" : "Read Bio"}
                      </span>
                      <span
                        className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground rotate-45"
                            : "border-border bg-muted/40 text-muted-foreground group-hover/btn:border-primary group-hover/btn:text-primary group-hover/btn:bg-primary/10"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5 transition-transform duration-300" />
                      </span>
                    </button>

                    {/* Smooth Collapsible Bio */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`pt-4 pb-1 transition-all duration-300 transform ${
                            isActive ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                          }`}
                        >
                          <div className="relative border-l-2 border-primary pl-3.5 py-1.5 bg-primary/[0.03]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1.5">
                              Executive Biography
                            </span>
                            <p className="text-[13.5px] leading-relaxed text-foreground/85 font-normal">
                              {d.bio}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Ready & Responsible Bottom Form Section */}
      <section className="bg-ink text-ink-foreground px-6 md:px-12 pt-30 pb-20 border-t border-ink-foreground/10">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold leading-[1.1] max-w-md">
                Future Ready & Responsible.
              </h2>
              <p className="mt-4 text-primary font-medium text-2xl">
                Creating Trends. Shaping Spaces.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-card/5 border border-ink-foreground/10 p-8 rounded-sm">
              <h3 className="text-2xl font-semibold mb-2">Let's Build Together</h3>
              <p className="text-base text-ink-foreground/60 mb-6">
                Tell us about your project or share details of your site survey request.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message Sent!");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">
                    Full Name
                  </label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="w-full mt-1.5 px-3 py-3.5 border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground text-base focus:outline-none focus:border-primary placeholder:text-ink-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full mt-1.5 px-3 py-3.5 border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground text-base focus:outline-none focus:border-primary placeholder:text-ink-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Type here..."
                    className="w-full mt-1.5 px-3 py-3.5 border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground text-base focus:outline-none focus:border-primary resize-none placeholder:text-ink-foreground/30"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 text-base font-semibold hover:bg-primary/95 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* 4 Info Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-ink-foreground/10 text-sm">
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">
                Phone
              </p>
              <p className="text-lg font-medium text-ink-foreground/90">09061734096</p>
              <p className="text-lg font-medium text-ink-foreground/90 mt-1">08171991238</p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">
                Email
              </p>
              <p className="text-lg font-medium text-ink-foreground/90 hover:text-primary transition-colors">
                <a href="mailto:info@brandmasonlimited.com">info@brandmasonlimited.com</a>
              </p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">
                Web
              </p>
              <p className="text-lg font-medium text-ink-foreground/90 hover:text-primary transition-colors">
                <a href="https://www.brandmasonlimited.com" target="_blank" rel="noreferrer">
                  www.brandmasonlimited.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">
                Location
              </p>
              <p className="text-lg font-medium text-ink-foreground/90">
                Ikeja, Lagos, West Africa
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ink text-ink-foreground px-6 md:px-12 py-10 border-ink-foreground/10">
        <Socials />
      </section>
    </SiteLayout>
  );
}
