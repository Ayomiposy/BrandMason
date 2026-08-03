import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CnFiG7KK.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CuXOAeqP.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "BrandMason — Creating Brands, Shaping Spaces" },
			{
				name: "description",
				content: "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments."
			},
			{
				name: "author",
				content: "BrandMason"
			},
			{
				property: "og:title",
				content: "BrandMason — Creating Brands, Shaping Spaces"
			},
			{
				property: "og:description",
				content: "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@brandmason"
			},
			{
				name: "twitter:title",
				content: "BrandMason — Creating Brands, Shaping Spaces"
			},
			{
				name: "twitter:description",
				content: "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ClL1emZzP3eVP2MG7dXrw20iVZ12/social-images/social-1785308793314-brand_mason_logo.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ClL1emZzP3eVP2MG7dXrw20iVZ12/social-images/social-1785308793314-brand_mason_logo.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.svg"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./projects-DL7CRDl1.mjs");
var Route$3 = createFileRoute("/projects")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [
		{ title: "Projects — From Blueprint to Built Reality | BrandMason" },
		{
			name: "description",
			content: "Explore BrandMason's project capabilities: spatial transformation, signage, structural execution, experiential design, and brand amplification."
		},
		{
			property: "og:title",
			content: "Projects — BrandMason"
		},
		{
			property: "og:description",
			content: "Bridging creative brand identity and physical, structural execution."
		}
	] })
});
var $$splitComponentImporter$2 = () => import("./contact-BqrpElE_.mjs");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [
		{ title: "Contact BrandMason — Let's Build Something Enduring" },
		{
			name: "description",
			content: "Ready to transform your space or create an impactful brand presence? Connect with BrandMason's architectural and branding team."
		},
		{
			property: "og:title",
			content: "Contact BrandMason"
		},
		{
			property: "og:description",
			content: "Connect with our architectural and branding team today."
		}
	] })
});
var $$splitComponentImporter$1 = () => import("./about-DDimHJAk.mjs");
var Route$1 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [
		{ title: "About BrandMason — Great brands are carefully built" },
		{
			name: "description",
			content: "Meet the team, mission and craft behind BrandMason's branding and architectural work."
		},
		{
			property: "og:title",
			content: "About BrandMason"
		},
		{
			property: "og:description",
			content: "Meet the team, mission and craft behind BrandMason."
		}
	] })
});
var $$splitComponentImporter = () => import("./routes-C4SmtlnA.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [
		{ title: "BrandMason — Creating Brands, Shaping Spaces" },
		{
			name: "description",
			content: "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments."
		},
		{
			property: "og:title",
			content: "BrandMason — Creating Brands, Shaping Spaces"
		},
		{
			property: "og:description",
			content: "BrandMason is a branding and architectural solutions company helping businesses bring their brands to life through impactful spaces and environments."
		}
	] })
});
var ProjectsRoute = Route$3.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AboutRoute,
	ContactRoute,
	ProjectsRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
