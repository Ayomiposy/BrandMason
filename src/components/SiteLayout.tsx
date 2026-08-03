import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="w-full border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[90rem] mx-auto w-full px-6 md:px-12 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img src="/logo.png" alt="BrandMason" width={80} height={80} className="h-20 w-20 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`text-lg font-medium transition-colors ${active ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/projects"
              className="bg-ink text-ink-foreground px-5 py-3 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Explore Our Solutions
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 bottom-0 top-[121px] bg-background/98 backdrop-blur-lg z-40 transition-all duration-300 overflow-y-auto">
            <nav className="flex flex-col px-6 py-8 gap-5 h-[calc(100vh-121px)] justify-center max-w-md mx-auto">
              {nav.map((n) => {
                const active = pathname === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium py-2 border-b border-border/10 transition-colors ${active ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                      }`}
                  >
                    {n.label}
                  </Link>
                );
              })}
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-ink text-ink-foreground text-center py-4 text-base font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Explore Our Solutions
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-ink text-ink-foreground/70 mt-auto border-t border-ink-foreground/10">
        <div className="max-w-[90rem] mx-auto w-full px-6 md:px-12 py-6 flex items-center justify-between text-xs tracking-wide">
          <p>© BrandMason Limited. All Rights Reserved.</p>
          <p className="flex items-center gap-3">
            <span>LAGOS</span>
            <span className="text-primary">•</span>
            <span>WEST AFRICA</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
