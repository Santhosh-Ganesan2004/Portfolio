import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { getAllProjects } from "@/utils/content";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Software systems, AI applications, edge computing experiments and research projects." },
    ],
  }),
});

const categories = ["All", "Research & Intelligent Systems", "Software Systems", "AI Applications", "Edge & Embedded Systems"];

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const projects = useMemo(() => getAllProjects(), []);

  const filtered = projects.filter((p) => {
    const matchesCat =
      active === "All" ||
      p.category
        .split("•")
        .map((part) => part.trim())
        .includes(active);
    const q = query.toLowerCase();
    const matchesQuery = !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.stack.some((s) => s.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  return (
    <PageTransition>
      <div className="w-full px-6 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Built, shipped, and learned from."
          description="A selection of engineering work spanning distributed systems, applied AI, and edge computing experiments."
        />

        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, stack, keywords..."
              className="w-full bg-surface border border-border rounded-md pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-2 text-xs rounded-md transition ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <div className="group glass-card p-6 h-full hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary-glow">{p.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-glow transition" />
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="block"
                >
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                  {p.metric && (
                    <p className="mt-3 font-mono text-xs text-foreground/80">→ {p.metric}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </Link>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm hover:bg-secondary"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm hover:bg-secondary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">No projects match your filters.</div>
        )}
      </div>
    </PageTransition>
  );
}
