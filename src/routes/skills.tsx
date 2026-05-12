import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import {
  Code2, Layers, Server, Brain, Cpu, Cloud, Wrench, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Technical skills across software engineering, AI, edge systems, and cloud deployment." },
    ],
  }),
});

type Group = {
  icon: typeof Code2;
  title: string;
  blurb: string;
  items: { name: string; level: string }[];
};

const groups: Group[] = [
  {
    icon: Code2, title: "Programming Languages", blurb: "Core languages I use for AI and system development.",
    items: [
      { name: "Python", level: "Primary" },
      { name: "Java", level: "Strong" },
      { name: "C/C++", level: "Systems" },
      { name: "JavaScript", level: "Frontend / backend" },
      { name: "HTML", level: "Markup" },
      { name: "CSS", level: "UI styling" },
    ],
  },
  {
    icon: Brain, title: "Machine Learning & AI", blurb: "Applied AI tools and modeling techniques for intelligent systems.",
    items: [
      { name: "PyTorch", level: "Training" },
      { name: "Scikit-Learn", level: "Modeling" },
      { name: "YOLOv5", level: "Vision" },
      { name: "NLP", level: "Language" },
      { name: "SBERT", level: "Semantic search" },
      { name: "Graph Neural Networks", level: "Research" },
    ],
  },
  {
    icon: Server, title: "Backend & Deployment", blurb: "Production-focused backend systems and deployment workflows.",
    items: [
      { name: "FastAPI", level: "APIs" },
      { name: "Flask", level: "Serving" },
      { name: "Streamlit", level: "Dashboards" },
      { name: "Docker", level: "Containers" },
      { name: "ONNX", level: "Inference" },
      { name: "Git", level: "Version control" },
    ],
  },
  {
    icon: Cpu, title: "Edge & Embedded", blurb: "On-device AI and embedded deployment for constrained systems.",
    items: [
      { name: "Edge Impulse", level: "TinyML" },
      { name: "Arduino", level: "Embedded" },
      { name: "ESP32", level: "Edge" },
      { name: "Raspberry Pi", level: "Prototyping" },
      { name: "ONNX", level: "Edge inference" },
      { name: "Docker", level: "Edge containers" },
    ],
  },
  {
    icon: Cloud, title: "Core Systems", blurb: "Fundamental CS concepts and architectural thinking.",
    items: [
      { name: "Data Structures", level: "Strong" },
      { name: "Algorithms", level: "Strong" },
      { name: "OOP", level: "Design" },
      { name: "Networks", level: "Systems" },
      { name: "Embedded Systems", level: "Hardware" },
      { name: "Linux", level: "Daily" },
    ],
  },
];

function SkillsPage() {
  return (
    <PageTransition>
      <div className="w-full px-6 py-20">
        <SectionHeader
          eyebrow="Skills"
          title="A working stack, organized."
          description="Hover any group to expand it — every entry is a tool I've used in production or a non-trivial project."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <SkillCard key={g.title} group={g} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

function SkillCard({ group, index }: { group: Group; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onTap={() => setOpen((v) => !v)}
      className={`relative glass-card p-6 cursor-pointer overflow-hidden transition-all duration-300 ${
        open ? "border-primary/40 -translate-y-0.5 shadow-[0_20px_40px_-20px_var(--primary)]" : "hover:border-primary/30"
      }`}
    >
      {/* Glow accent on hover */}
      <div
        className={`absolute -inset-px rounded-[inherit] pointer-events-none transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(400px circle at 30% 0%, oklch(0.58 0.22 295 / 0.15), transparent 60%)",
        }}
      />

      <div className="relative flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 border border-primary/20">
            <Icon className="h-5 w-5 text-primary-glow" />
          </div>
          <h3 className="font-semibold">{group.title}</h3>
        </div>
        <ChevronRight
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-90 text-primary-glow" : ""}`}
        />
      </div>

      <p className="relative text-sm text-muted-foreground mb-4 leading-relaxed">{group.blurb}</p>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-1.5 overflow-hidden"
          >
            {group.items.map((it, idx) => (
              <motion.li
                key={it.name}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.025 }}
                className="flex items-center justify-between rounded-md border border-border/50 bg-secondary/40 px-3 py-1.5"
              >
                <span className="font-mono text-xs text-foreground/90">{it.name}</span>
                <span className="font-mono text-[10px] text-muted-foreground">{it.level}</span>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative flex flex-wrap gap-1.5"
          >
            {group.items.map((it) => (
              <span
                key={it.name}
                className="font-mono text-xs px-2 py-1 rounded-md bg-secondary/60 border border-border/40 text-foreground/85"
              >
                {it.name}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
