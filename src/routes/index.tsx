import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Cloud, Network, Sparkles, Github, Server } from "lucide-react";
import { getAllProjects } from "@/utils/content";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Building scalable software systems and intelligent applications. Interests in AI, edge computing, and real-world deployment." },
    ],
  }),
});

const techStack = [
  "Python", "Java", "C/C++", "JavaScript", "HTML", "CSS",
  "PyTorch", "Scikit-Learn", "YOLOv5", "NLP", "SBERT", "GNNs",
  "FastAPI", "Flask", "Streamlit", "Docker", "ONNX", "Edge Impulse",
];

const highlights = [
  { icon: Sparkles, title: "AI Systems", desc: "End-to-end intelligent applications with ML pipelines and semantic inference." },
  { icon: Cpu, title: "Edge Computing", desc: "Optimized on-device AI deployment and efficient inference workflows." },
  { icon: Server, title: "Backend Engineering", desc: "Backend-integrated services and APIs for real-time model serving." },
  { icon: Cloud, title: "Deployment Optimization", desc: "Reliable, scalable deployment workflows for production software." },
];

function HomePage() {
  const featured = getAllProjects().slice(0, 3);
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative w-full px-6 pt-20 pb-28 md:pt-32 md:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-glow" />
            </span>
            <span className="text-xs font-mono text-muted-foreground">Available for engineering roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Building Intelligent Software Systems<br />
            for Real-World Applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Computer Science student building backend-integrated AI systems, intelligent applications,
            and edge deployment workflows with a strong focus on practical engineering and scalable
            software design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 shadow-[0_0_40px_-8px_var(--primary)] transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Explore Experience
            </Link>
            <a
              href="/ResumeMay26.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-secondary/40 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-secondary/40 px-5 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Tech ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-2"
          >
            {techStack.map((t) => (
              <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md border border-border/60 bg-surface/50 text-muted-foreground">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="w-full px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-2">What I work on</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Engineering across the stack</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card p-6 hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-primary-glow/10 border border-primary/20 mb-4">
                <h.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-base font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-2">Selected work</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured projects</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group glass-card p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary-glow">{p.category}</span>
                <Network className="h-4 w-4 text-muted-foreground group-hover:text-primary-glow transition-colors" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span key={s} className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{s}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
