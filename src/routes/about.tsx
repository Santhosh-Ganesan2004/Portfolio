import { createFileRoute } from "@tanstack/react-router";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { GraduationCap, Briefcase, Lightbulb, Workflow } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Systems-oriented engineer focused on practical problem solving, software architecture, and intelligent systems." },
    ],
  }),
});

const timeline = [
  {
    year: "May 2025 – Jul 2025",
    title: "AI Intern",
    org: "Innominds Software Pvt. Ltd",
    desc: "Worked on computer vision pipelines, edge AI deployment optimization, and backend-integrated inference systems for intelligent safety monitoring applications. Built a YOLOv5-based detection pipeline for identifying safety helmets and safety vests, achieving 88% validation accuracy. Converted models to ONNX for edge deployment and integrated them with Flask-based APIs.",
  },
];

const principles = [
  { icon: Workflow, title: "Build Beyond the Prototype", desc: "I care about making systems usable — not just making them work once. I enjoy turning ideas into deployable applications with real interfaces, backend integration, and practical workflows." },
  { icon: Briefcase, title: "Learn Through Systems", desc: "I learn best by building. Whether it’s AI pipelines, edge deployment, or backend services, I like understanding how different parts connect and behave together in a real system." },
  { icon: Lightbulb, title: "Practical Engineering Over Hype", desc: "I’m more interested in solving real problems than chasing trends. Clean execution, scalable thinking, and continuous improvement matter more to me than flashy tech stacks or overengineered solutions." },
];

function AboutPage() {
  return (
    <PageTransition>
      <div className="w-full px-6 py-20">
          <SectionHeader
            eyebrow="About"
            title="I build practical AI systems, backend workflows, and deployed software."
            description="I’m a Computer Science student with hands-on experience building intelligent systems using machine learning, computer vision, NLP, and edge AI technologies."
          />

        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <div className="glass-card p-6 hover:border-primary/30 transition">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.25em] mb-3">Connect</p>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/Santhosh-Ganesan2004" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/santhoshganesan2004" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">LinkedIn</a>
            </div>
          </div>
          <div className="glass-card p-6 hover:border-primary/30 transition">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.25em] mb-3">Focus Areas</p>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold text-sm">Software Engineering</p>
              <p className="font-semibold text-sm">Artificial Intelligence</p>
              <p className="font-semibold text-sm">IoT & Edge Systems</p>
            </div>
          </div>
          <div className="glass-card p-6 hover:border-primary/30 transition">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.25em] mb-3">Location & Status</p>
            <p className="font-semibold">Bengaluru, India</p>
            <p className="text-sm text-muted-foreground">Open to opportunities</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[260px_1fr] items-start mb-16">
          {/* Personal photo — replace src below with /your-photo.jpg in the public folder */}
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 to-primary-glow/20 blur-xl opacity-60" />
            <div className="relative aspect-[4/5] w-[220px] md:w-[260px] overflow-hidden rounded-2xl border border-border bg-surface">
              <img
                src="/profile.jpeg"
                alt="Santhosh"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="glass-card p-8">
            <p className="text-foreground/90 leading-relaxed space-y-4">
              I’m a Computer Science student with hands-on experience building intelligent systems
              using machine learning, computer vision, NLP, and edge AI technologies.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              My work focuses on practical engineering — combining backend systems, AI pipelines,
              deployment workflows, and scalable software development to create real-world applications.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              I enjoy solving problems involving intelligent automation, deployment optimization,
              predictive analytics, and edge-integrated systems.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Beyond AI development, I’m deeply interested in software engineering fundamentals,
              systems thinking, backend architecture, and building applications that are production-oriented.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              I approach projects with a balance of engineering practicality and technical experimentation,
              focusing on usability, deployment feasibility, and system performance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold tracking-tight mb-6">Engineering Principles</h2>
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {principles.map((p) => (
            <div key={p.title} className="glass-card p-6">
              <p.icon className="h-5 w-5 text-primary-glow mb-3" />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold tracking-tight mb-6">Experience</h2>
        <div className="space-y-4 mb-16">
          {timeline.map((t) => (
            <div key={t.year} className="glass-card p-6 flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-48 shrink-0">
                <p className="font-mono text-xs text-primary-glow">{t.year}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.org}</p>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold tracking-tight mb-6">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 mb-16">
            <div className="glass-card p-6">
              <h3 className="font-semibold">B.Tech in Computer Science</h3>
              <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Vellore</p>
              <p className="mt-2 text-sm text-foreground/80">GPA: 8.03 / 10</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold">Senior Secondary Education</h3>
              <p className="text-sm text-muted-foreground">Sri Sri Ravishankar Vidya Mandir, Bengaluru</p>
              <p className="mt-2 text-sm text-foreground/80">Percentage: 89.2%</p>
            </div>
        </div>
      </div>
    </PageTransition>
  );
}
