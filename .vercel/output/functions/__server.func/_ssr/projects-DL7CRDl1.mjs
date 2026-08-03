import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-DUmdPVeK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DL7CRDl1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	{
		key: "spatial",
		label: "Spatial Transformation",
		heading: "Spatial Transformation",
		body: "Space management, corporate interior and exterior branding, and building facades. We transform physical spaces to tell your brand story seamlessly."
	},
	{
		key: "signage",
		label: "Signage Solutions",
		heading: "Signage Solutions",
		body: "Architectural signage fabrication, precision installation, and ongoing maintenance across every environment."
	},
	{
		key: "structural",
		label: "Structural Execution",
		heading: "Structural Execution",
		body: "Commercial renovations, specialized construction, and mobile & static kiosk fabrication delivered end-to-end."
	},
	{
		key: "experiential",
		label: "Experiential Design",
		heading: "Experiential Design",
		body: "Concept design, custom event fabrication, and on-site installation for memorable brand moments."
	},
	{
		key: "amplification",
		label: "Brand Amplification",
		heading: "Brand Amplification",
		body: "Out of Home (OOH) advertising, promotional products, and bespoke corporate gifts that scale your presence."
	}
];
function Projects() {
	const [active, setActive] = (0, import_react.useState)("spatial");
	const current = tabs.find((t) => t.key === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 md:px-12 py-30 grid-bg bg-cream-deep/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full min-h-[300px] flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl",
						children: [
							"From Blueprint to",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Built Reality"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-2xl text-foreground/80 max-w-lg",
						children: "Bridging the gap between creative brand identity and physical, structural execution."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-2 mt-8 border border-ink px-8 py-4 text-lg font-semibold hover:bg-ink hover:text-ink-foreground transition-all duration-200 cursor-pointer bg-transparent",
						children: ["Download Corporate Profile PDF ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					}) })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "px-6 md:px-12 border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-8",
					children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(t.key),
						className: `py-6 text-xl transition-colors relative cursor-pointer font-medium ${active === t.key ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"}`,
						children: [t.label, active === t.key && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })]
					}, t.key))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 md:px-12 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-3 gap-10 items-start min-h-[220px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl md:text-5xl font-semibold leading-tight",
						children: current.heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground leading-relaxed max-w-sm",
						children: current.body
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-2 grid grid-cols-3 gap-4",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-square bg-cream-deep/60 border border-border" }, i))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-ink-foreground px-6 md:px-12 py-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full min-h-[220px] flex flex-col justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-5xl leading-[1.1] max-w-3xl",
					children: [
						"Have a signage, renovation or construction project?",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Let's conduct a detailed review."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-4 text-base font-semibold hover:bg-primary/90 transition-all duration-200",
					children: ["Book a Site Survey & Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				}) })]
			})
		})
	] });
}
//#endregion
export { Projects as component };
