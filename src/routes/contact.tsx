import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { Socials } from "@/components/socials";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact BrandMason — Let's Build Something Enduring" },
      { name: "description", content: "Ready to transform your space or create an impactful brand presence? Connect with BrandMason's architectural and branding team." },
      { property: "og:title", content: "Contact BrandMason" },
      { property: "og:description", content: "Connect with our architectural and branding team today." },
    ],
  }),
});

function Contact() {
  const [form, setForm] = useState({ firstName: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 py-30 grid-bg">
        <div className="max-w-[90rem] mx-auto w-full min-h-[220px] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl">
            Let's Build Something Enduring
          </h1>
          <p className="mt-6 text-2xl text-muted-foreground max-w-md leading-relaxed">
            Ready to transform your space or create an impactful brand presence? Connect with our architectural and
            branding team today.
          </p>
        </div>
      </section>

      {/* Content grid */}
      <section className="px-6 md:px-12 pb-30">
        <div className="max-w-[90rem] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Form */}
            <div className="border border-border bg-card p-8 flex flex-col justify-between">
              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider">Request for Proposal</p>
                <h2 className="text-4xl font-semibold mt-1 mb-8">Let's Build Together</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">First Name</label>
                      <input
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        placeholder="Enter your first name"
                        className="w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary placeholder:text-muted-foreground/45"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">Email Address</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary placeholder:text-muted-foreground/45"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary resize-none placeholder:text-muted-foreground/45"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 text-base font-semibold hover:bg-primary/95 transition-all duration-200 cursor-pointer"
                  >
                    {sent ? "Message Sent ✓" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Info */}
            <div className="border border-border bg-card flex flex-col justify-between overflow-hidden">
              <div className="p-8 border-b border-border flex-1 flex flex-col justify-center">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Location</p>
                <p className="text-3xl font-semibold text-foreground">Ikeja, Lagos</p>
              </div>
              <div className="p-8 border-b border-border flex-1 flex flex-col justify-center">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Phone & Direct Line</p>
                <p className="text-3xl font-semibold text-foreground">09061734096</p>
                <p className="text-3xl font-semibold text-foreground mt-1.5">08171991238</p>
              </div>
              <div className="p-8 bg-ink text-ink-foreground flex-1 flex flex-col justify-center">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Email & Website</p>
                <p className="text-3xl font-semibold text-ink-foreground">www.brandmasonlimited</p>
                <p className="text-3xl font-semibold text-ink-foreground mt-1.5">info@brandmasonlimited.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      < section className="bg-ink text-ink-foreground px-6 md:px-12 py-10 border-ink-foreground/10" >
        <Socials />
      </section>
    </SiteLayout>
  );
}
