import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { getProject } from "@/utils/content";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Project` },
          { name: "description", content: loaderData.project.summary },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="w-full px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-4 inline-block text-primary-glow">← Back to projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <PageTransition>
      <article className="w-full px-6 py-16">
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-3">{project.category}</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{project.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm hover:bg-secondary">
              <Github className="h-4 w-4" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:opacity-90">
              <ExternalLink className="h-4 w-4" /> Live demo
            </a>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s: string) => (
            <span key={s} className="font-mono text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">{s}</span>
          ))}
        </div>

        <div className="mt-12 prose-invert max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground
          prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
          prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:my-4
          prose-li:text-foreground/85 prose-li:my-1
          prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
          prose-strong:text-foreground
          prose-a:text-primary-glow prose-a:no-underline hover:prose-a:underline
          prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-primary-glow prose-code:font-mono
          prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4">
          <Markdown body={project.body} />
        </div>
      </article>
    </PageTransition>
  );
}

function Markdown({ body }: { body: string }) {
  return (
    <div className="space-y-4">
      <ReactMarkdown
        components={{
          h2: ({ children }) => <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">{children}</h2>,
          h3: ({ children }) => <h3 className="text-lg font-semibold tracking-tight mt-8 mb-3">{children}</h3>,
          p: ({ children }) => <p className="text-foreground/85 leading-relaxed my-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 space-y-1.5 text-foreground/85 my-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 space-y-1.5 text-foreground/85 my-4">{children}</ol>,
          a: ({ href, children }) => <a href={href} className="text-primary-glow hover:underline" target="_blank" rel="noreferrer">{children}</a>,
          code: ({ children }) => <code className="bg-secondary px-1.5 py-0.5 rounded text-sm text-primary-glow font-mono">{children}</code>,
          pre: ({ children }) => <pre className="bg-surface border border-border rounded-lg p-4 overflow-x-auto my-4 text-sm font-mono">{children}</pre>,
          img: ({ src, alt }) => <img src={src} alt={alt} className="rounded-lg border border-border my-6" />,
          blockquote: ({ children }) => <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground my-4">{children}</blockquote>,
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}
