import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-DUmdPVeK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BqrpElE_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		firstName: "",
		email: "",
		message: ""
	});
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 md:px-12 py-30 grid-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto w-full min-h-[220px] flex flex-col justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl",
				children: "Let's Build Something Enduring"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-2xl text-muted-foreground max-w-md leading-relaxed",
				children: "Ready to transform your space or create an impactful brand presence? Connect with our architectural and branding team today."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 md:px-12 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-8 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border border-border bg-card p-8 flex flex-col justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-semibold uppercase tracking-wider",
							children: "Request for Proposal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-semibold mt-1 mb-8",
							children: "Let's Build Together"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								setSent(true);
							},
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block",
										children: "First Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: form.firstName,
										onChange: (e) => setForm({
											...form,
											firstName: e.target.value
										}),
										placeholder: "Enter your first name",
										className: "w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary placeholder:text-muted-foreground/45"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block",
										children: "Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										}),
										placeholder: "Enter your email address",
										className: "w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary placeholder:text-muted-foreground/45"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider block",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 6,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									placeholder: "Tell us about your project...",
									className: "w-full mt-1.5 px-3 py-3.5 border border-border bg-background text-base focus:outline-none focus:border-primary resize-none placeholder:text-muted-foreground/45"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full bg-primary text-primary-foreground py-4 text-base font-semibold hover:bg-primary/95 transition-all duration-200 cursor-pointer",
									children: sent ? "Message Sent ✓" : "Send Message"
								})
							]
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card flex flex-col justify-between overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 border-b border-border flex-1 flex flex-col justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-primary text-sm font-semibold uppercase tracking-wider mb-2",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl font-semibold text-foreground",
								children: "Ikeja, Lagos"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 border-b border-border flex-1 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary text-sm font-semibold uppercase tracking-wider mb-2",
									children: "Phone & Direct Line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-semibold text-foreground",
									children: "09061734096"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-semibold text-foreground mt-1.5",
									children: "08171991238"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 bg-ink text-ink-foreground flex-1 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary text-sm font-semibold uppercase tracking-wider mb-2",
									children: "Email & Website"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-semibold text-ink-foreground",
									children: "www.brandmasonlimited"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl font-semibold text-ink-foreground mt-1.5",
									children: "info@brandmasonlimited.com"
								})
							]
						})
					]
				})]
			})
		})
	})] });
}
//#endregion
export { Contact as component };
