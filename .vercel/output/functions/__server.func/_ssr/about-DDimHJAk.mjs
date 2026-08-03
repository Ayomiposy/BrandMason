import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SiteLayout } from "./SiteLayout-DUmdPVeK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DDimHJAk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var directors = [
	{
		name: "Temitayo Ogunkoya",
		role: "Managing Director",
		sub: ""
	},
	{
		name: "Sammy Ogunjimi",
		role: "Board of Directors",
		sub: "Group Managing Director, Codix Group"
	},
	{
		name: "Mopelola Abudu",
		role: "Board of Directors",
		sub: "Managing Partner, AfriGloCal Venture Capital"
	},
	{
		name: "Funmilayo Ajomale",
		role: "Board of Directors",
		sub: "Corporate Commercial Lawyer & Legal Strategist"
	}
];
function About() {
	const [tab, setTab] = (0, import_react.useState)("mason");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 md:px-12 pb-16 grid-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-10 items-start py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl md:text-5xl font-semibold leading-[1.1]",
							children: "Great brands are not created by chance; they are carefully built."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground max-w-md leading-relaxed",
							children: "A mason is a skilled craftsman who transforms raw materials into structures that are strong, purposeful, and built to last."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid grid-cols-2 border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab("brand"),
								className: `p-5 text-left transition-colors cursor-pointer min-h-[140px] flex flex-col justify-center ${tab === "brand" ? "bg-ink text-ink-foreground" : "bg-card text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary text-5xl mb-2",
									children: "Brand"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg opacity-80 leading-relaxed",
									children: "Identity, perception, visibility, storytelling."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab("mason"),
								className: `p-5 text-left transition-colors cursor-pointer min-h-[140px] flex flex-col justify-center ${tab === "mason" ? "bg-ink text-ink-foreground" : "bg-card text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary text-5xl mb-2",
									children: "Mason"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg opacity-80 leading-relaxed",
									children: "Craftsmanship, precision, structure, flawless execution."
								})]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full aspect-[4/3] bg-cream-deep/60 border border-border" })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream-deep px-6 md:px-12 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-semibold mb-10",
					children: "Why we build."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border p-8 bg-card flex flex-col justify-center min-h-[240px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl text-primary mb-4 font-semibold uppercase tracking-wider",
								children: "VISION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl mb-3 leading-snug text-foreground",
								children: "To eliminate the challenge of invisible brands, inefficient spaces, and inconsistent identities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: "By creating environments that differentiate, communicate clearly, function seamlessly, and inspire absolute confidence."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8 bg-ink text-ink-foreground flex flex-col justify-center min-h-[240px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl text-primary mb-4 font-semibold uppercase tracking-wider",
								children: "MISSION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xl mb-3 leading-snug text-primary-foreground",
								children: "To deliver high-quality branding, intelligent signage, and renovation and building solutions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-foreground/70 leading-relaxed",
								children: "That enhance brand visibility, transform business spaces, and create lasting impressions."
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-ink-foreground px-6 md:px-12 py-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-5xl font-semibold mb-4",
						children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Brand"
							}),
							"Mason Advantage"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-foreground/70 max-w-2xl mb-10 leading-relaxed",
						children: "Most agencies either design a brand or construct a space. We seamlessly integrate both — blending marketing intelligence with architectural precision to deliver consistent, high-impact environments on time, with zero compromise on quality."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 border border-ink-foreground/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 border-r border-ink-foreground/20 flex flex-col min-h-[280px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl text-primary mb-4 font-semibold uppercase tracking-wider",
									children: "THE HOOK"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl mb-3 leading-snug",
									children: "Most agencies either design a brand or construct a space. We seamlessly integrate both."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink-foreground/70 leading-relaxed",
									children: "BrandMason uniquely bridges the gap between creative vision and physical reality. By blending marketing intelligence with architectural precision, we deliver consistent, high-impact environments on time, with zero compromise on quality."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 flex flex-col min-h-[280px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-3xl text-primary mb-4 font-semibold uppercase tracking-wider",
									children: "CORE VALUES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ink-foreground/70 mb-6 leading-relaxed",
									children: "That enhance brand visibility, transform business spaces, and create lasting impressions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2 mt-auto",
									children: [
										"Creativity",
										"Innovation",
										"Integrity",
										"Professionalism",
										"Customer Satisfaction",
										"Resilience",
										"Teamwork"
									].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-4 py-2 border border-ink-foreground/20 text-2xl bg-ink-foreground/5 font-medium",
										children: v
									}, v))
								})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-6 md:px-12 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-5xl font-semibold mb-10",
					children: ["Board of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Directors"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
					children: directors.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border bg-card overflow-hidden flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full aspect-[4/5] bg-cream-deep/60 border-b border-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-semibold text-2xl",
									children: d.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary text-[15px] font-medium mt-1",
									children: d.role
								}),
								d.sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base text-muted-foreground mt-2 leading-relaxed",
									children: d.sub
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "READ BIO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+" })]
							})]
						})]
					}, d.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-ink-foreground px-6 md:px-12 py-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-7xl mx-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-5xl font-semibold mb-10",
					children: "Trust, engineered in."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-ink-foreground/20 p-8 flex flex-col justify-center min-h-[220px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl text-primary mb-3 font-semibold uppercase tracking-wider",
								children: "SAFETY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold mb-3 text-primary-foreground",
								children: "Built with Care."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-foreground/70 leading-relaxed",
								children: "Precision is our blueprint for safety. We work at the intersection of heavy fabrication and live installations. We equip master craftsmen with rigorous training, manage active sites to mitigate operational risk, and secure high-impact signage to protect public spaces."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-ink-foreground/20 p-8 flex flex-col justify-center min-h-[220px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-3xl text-primary mb-3 font-semibold uppercase tracking-wider",
								children: "SDG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold mb-3 text-primary-foreground",
								children: "SDG Compliance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ink-foreground/70 leading-relaxed",
								children: "True growth is built on a foundation of responsibility. We actively balance people, planet, and profit by aligning our corporate growth with the UN Sustainable Development Goals."
							})
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
