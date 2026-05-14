import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_24px_-4px_var(--primary-glow)]">
              <div className="absolute inset-[3px] rounded-[5px] bg-background" />
              <span className="relative font-bold text-sm text-gradient">SG</span>
            </div>
            <span className="font-semibold tracking-tight text-foreground">
              Santhosh Ganesan
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                  activeProps={{ className: "px-3 py-2 text-sm rounded-md text-foreground bg-secondary/50" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="ml-2"><ThemeToggle /></div>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                className="p-2 rounded-md hover:bg-secondary"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                activeProps={{ className: "px-3 py-2.5 rounded-md text-sm text-foreground bg-secondary/50" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
