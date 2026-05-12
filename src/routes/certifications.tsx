import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/PageTransition";
import { getAllCertifications } from "@/utils/content";

export const Route = createFileRoute("/certifications")({
  component: CertificationsPage,
  head: () => ({
    meta: [
      { title: "Santhosh Ganesan - Portfolio" },
      { name: "description", content: "Professional certifications and verified credentials." },
    ],
  }),
});

function CertificationsPage() {
  const certs = getAllCertifications();
  return (
    <PageTransition>
      <div className="w-full px-6 py-20">
        <SectionHeader
          eyebrow="Certifications"
          title="Verified credentials."
          description="Industry certifications validating practical skills and depth across cloud, AI, and software engineering."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {certs.map((c) => (
            <div key={c.slug} className="glass-card p-6 hover:border-primary/30 transition">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 border border-primary/20">
                  <Award className="h-5 w-5 text-primary-glow" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{c.date}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
              {c.body && <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{c.body}</p>}
              {c.skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span key={s} className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{s}</span>
                  ))}
                </div>
              )}
              {c.credential && (
                <a
                  href={c.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary-glow hover:underline"
                >
                  View credential <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
