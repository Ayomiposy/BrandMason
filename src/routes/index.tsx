import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";



export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "BrandMason — Creating Brands, Shaping Spaces" },
      {
        name: "description",
        content:
          "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments.",
      },
      { property: "og:title", content: "BrandMason — Creating Brands, Shaping Spaces" },
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
    items: ["Architectural signage fabrication", "Precision installation", "Signage refurbishment & maintenance"],
  },
  {
    n: "03",
    title: "Structural Execution",
    items: ["Commercial renovations", "Specialized construction", "Mobile & static kiosk fabrication"],
    dark: true,
  },
  {
    n: "04",
    title: "Experiential Design",
    items: ["Concept design", "Custom event fabrication", "On-site installation"],
  },
  {
    n: "05",
    title: "Brand Amplification",
    items: ["Out of Home (OOH) advertising", "Promotional products", "Bespoke corporate gifts"],
  },
];

const directors = [
  { name: "Temitayo Ogunkoya", role: "Managing Director", sub: "", image: "/temitope.jpg" },
  { name: "Sammy Ogunjimi", role: "Board of Directors", sub: "Group Managing Director, Codix Group", image: "/sammy.jpg" },
  { name: "Mopelola Abudu", role: "Board of Directors", sub: "Managing Partner, AfriGloCal Venture Capital", image: "/mopelola.jpg" },
  { name: "Funmilayo Ajomale", role: "Board of Directors", sub: "Corporate Commercial Lawyer & Legal Strategist", image: "/funmilayo.jpg" },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      < section className="px-6 md:px-12 pb-16" >
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="relative border-2 border-primary/60 p-10 md:p-16 grid-bg min-h-[480px] flex flex-col justify-center">
            <span className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-primary" />
            <span className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-primary" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
              Creating Brands,<br />Shaping Spaces.
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-xl">Your space is your most powerful brand asset.</p>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              At BrandMason Limited, we turn ideas into experiences people can see, feel, and remember. We are a branding
              and architectural solutions company helping businesses bring their brands to life through impactful spaces
              and environments.
            </p>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-all duration-200"
              >
                Explore Our Solutions <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section >
      {/* Story */}
      < section className="px-6 md:px-12 py-16" >
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-3">The Story Behind the Name</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-10">
            Great brands, like great buildings, are not assembled — they are built. Built by a mason: someone who works
            with craftsmanship, intention, and precision, one deliberate course at a time.
          </p>
          <div className="grid md:grid-cols-2 gap-0 border border-border">
            <div className="p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <h3 className="text-primary text-5xl mb-3">Brand</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brand is identity. It is perception, visibility, storytelling, and how a business is experienced.
              </p>
            </div>
            <div className="p-8 bg-ink text-ink-foreground flex flex-col justify-center min-h-[220px]">
              <h3 className="text-primary text-5xl mb-3">Mason</h3>
              <p className="text-ink-foreground/70 leading-relaxed">
                Mason is craftsmanship. It is precision, structure, construction, and flawless execution.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Disciplines */}
      < section className="bg-cream-deep px-6 md:px-12 py-20" >
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl mb-3">Five Disciplines. One Build.</h2>
          <p className="text-muted-foreground mb-10">Every project is laid course by course — from the structure itself to the story it tells.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border border border-border">
            {disciplines.map((d) => (
              <div
                key={d.n}
                className="p-6 flex flex-col min-h-[280px] bg-card"
              >
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
      </section >

      {/* Advantage */}
      < section className="bg-ink text-ink-foreground px-6 md:px-12 py-30" >
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">Design and construction,<br />under one roof.</h2>
          <p className="text-ink-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Most agencies either design a brand or construct a space. We seamlessly integrate both — blending marketing
            intelligence with architectural precision to deliver consistent, high-impact environments on time, with zero
            compromise on quality.
          </p>
          <div>
            <p className="text-sm text-primary mb-4 font-semibold uppercase tracking-wider">Core Values</p>
            <div className="flex flex-wrap gap-2">
              {["Creativity", "Innovation", "Integrity", "Professionalism", "Customer Satisfaction", "Resilience", "Teamwork"].map((v) => (
                <span key={v} className="px-4 py-2 border border-ink-foreground/20 text-2xl bg-ink-foreground/5 font-medium">{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Trust */}
      < section className="px-6 md:px-12 py-20" >
        <div className="max-w-[90rem] mx-auto w-full">
          <h2 className="text-3xl md:text-5xl font-semibold mb-10">Future-ready and responsible,<br />by design.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <p className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">SAFETY</p>
              <h3 className="text-3xl font-semibold mb-3">Built with Care.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Precision is our blueprint for safety. We equip our master craftsmen and engineers, manage active sites to
                mitigate client risks, and engineer assets to protect public spaces.
              </p>
            </div>
            <div className="border border-border p-8 bg-card flex flex-col justify-center min-h-[220px]">
              <p className="text-sm text-primary mb-3 font-semibold uppercase tracking-wider">SDG</p>
              <h3 className="text-3xl font-semibold mb-3">SDG Compliance.</h3>
              <p className="text-muted-foreground leading-relaxed">
                We align operations with UN Sustainable Development Goals, balancing people, planet, and profit with purpose.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Directors */}
      < section className="px-6 md:px-12 pb-20" >
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
      </section >

      {/* Future Ready & Responsible Bottom Form Section */}
      < section className="bg-ink text-ink-foreground px-6 md:px-12 py-30 border-t border-ink-foreground/10" >
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
              <p className="text-base text-ink-foreground/60 mb-6">Tell us about your project or share details of your site survey request.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message Sent!");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">Full Name</label>
                  <input
                    required
                    placeholder="Enter your name"
                    className="w-full mt-1.5 px-3 py-3.5 border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground text-base focus:outline-none focus:border-primary placeholder:text-ink-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full mt-1.5 px-3 py-3.5 border border-ink-foreground/20 bg-ink-foreground/5 text-ink-foreground text-base focus:outline-none focus:border-primary placeholder:text-ink-foreground/30"
                  />
                </div>
                <div>
                  <label className="text-xs text-ink-foreground/50 uppercase tracking-wider block font-semibold">Message</label>
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
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Phone</p>
              <p className="text-lg font-medium text-ink-foreground/90">09061734096</p>
              <p className="text-lg font-medium text-ink-foreground/90 mt-1">08171991238</p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Email</p>
              <p className="text-lg font-medium text-ink-foreground/90 hover:text-primary transition-colors">
                <a href="mailto:info@brandmasonlimited.com">info@brandmasonlimited.com</a>
              </p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Web</p>
              <p className="text-lg font-medium text-ink-foreground/90 hover:text-primary transition-colors">
                <a href="https://www.brandmasonlimited.com" target="_blank" rel="noreferrer">www.brandmasonlimited.com</a>
              </p>
            </div>
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-semibold mb-2">Location</p>
              <p className="text-lg font-medium text-ink-foreground/90">Ikeja, Lagos, West Africa</p>
            </div>
          </div>
        </div>
      </section >
    </SiteLayout >
  );
}
