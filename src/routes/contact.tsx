import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Download, Send } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Get in touch for engineering roles, collaborations, or technical discussions." },
    ],
  }),
});

const RECIPIENT = "santhoshganesan2004@gmail.com";

function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${message}\n\n— ${name}`;
    const url = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject || "Hello")}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <PageTransition>
      <div className="w-full px-6 py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s Build Intelligent and Scalable Systems"
          description="Open to software engineering, AI systems, backend engineering, intelligent applications, and deployment-focused opportunities."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div className="space-y-3">
            <a href={`mailto:${RECIPIENT}`} className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 transition">
              <Mail className="h-5 w-5 text-primary-glow" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm">{RECIPIENT}</p>
              </div>
            </a>
            <a href="https://github.com/Santhosh-Ganesan2004" target="_blank" rel="noreferrer" className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 transition">
              <Github className="h-5 w-5 text-primary-glow" />
              <div>
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="text-sm">Santhosh-Ganesan2004</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/santhoshganesan2004" target="_blank" rel="noreferrer" className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 transition">
              <Linkedin className="h-5 w-5 text-primary-glow" />
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm">/in/santhoshganesan2004</p>
              </div>
            </a>
            <a href="/ResumeMay26.pdf" target="_blank" rel="noreferrer" className="glass-card p-4 flex items-center gap-3 hover:border-primary/30 transition">
              <Download className="h-5 w-5 text-primary-glow" />
              <div>
                <p className="text-xs text-muted-foreground">Resume</p>
                <p className="text-sm">Download PDF</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-surface border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Subject</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full bg-surface border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full bg-surface border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 shadow-[0_0_24px_-6px_var(--primary)]"
            >
              <Send className="h-4 w-4" /> Send via email
            </button>
            <p className="text-xs text-muted-foreground">Opens your default mail client with a pre-filled message.</p>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
