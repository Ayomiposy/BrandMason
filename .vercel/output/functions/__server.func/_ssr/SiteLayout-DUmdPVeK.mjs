import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-DUmdPVeK.js
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-C9kkPPn3.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteLayout({ children }) {
	const { pathname } = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "w-full border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto w-full px-6 md:px-12 py-5 flex items-center justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "BrandMason",
								width: 80,
								height: 80,
								className: "h-20 w-20 object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden md:flex items-center gap-10",
							children: nav.map((n) => {
								const active = pathname === n.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: n.to,
									className: `text-lg font-medium transition-colors ${active ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`,
									children: n.label
								}, n.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "bg-ink text-ink-foreground px-5 py-3 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200",
							children: "Explore Our Solutions"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-ink text-ink-foreground/70 mt-auto border-t border-ink-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto w-full px-6 md:px-12 py-6 flex items-center justify-between text-xs tracking-wide",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© BrandMason Limited. All Rights Reserved." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LAGOS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WEST AFRICA" })
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { SiteLayout as t };
