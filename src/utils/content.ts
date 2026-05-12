// Markdown content loader using Vite glob imports.
// Add a new project: drop a .md file into src/content/projects/
// Add a certification: drop a .md file into src/content/certifications/

type Frontmatter = Record<string, string | string[]>;

export interface ProjectMeta {
  slug: string;
  title: string;
  summary: string;
  category: string;
  stack: string[];
  github?: string;
  demo?: string;
  metric?: string;
  image?: string;
  date?: string;
}

export interface ProjectFull extends ProjectMeta {
  body: string;
}

export interface CertMeta {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  skills: string[];
  body: string;
}

const projectFiles = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const certFiles = import.meta.glob("../content/certifications/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val: string = line.slice(idx + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: match[2].trim() };
}

function slugFromPath(path: string) {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export function getAllProjects(): ProjectFull[] {
  return Object.entries(projectFiles)
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw);
      return {
        slug: slugFromPath(path),
        title: (data.title as string) ?? slugFromPath(path),
        summary: (data.summary as string) ?? "",
        category: (data.category as string) ?? "Software Systems",
        stack: (data.stack as string[]) ?? [],
        github: data.github as string | undefined,
        demo: data.demo as string | undefined,
        metric: data.metric as string | undefined,
        image: data.image as string | undefined,
        date: data.date as string | undefined,
        body,
      };
    })
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getProject(slug: string): ProjectFull | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllCertifications(): CertMeta[] {
  return Object.entries(certFiles)
    .map(([path, raw]) => {
      const { data, body } = parseFrontmatter(raw);
      return {
        slug: slugFromPath(path),
        title: (data.title as string) ?? slugFromPath(path),
        issuer: (data.issuer as string) ?? "",
        date: (data.date as string) ?? "",
        credential: data.credential as string | undefined,
        skills: (data.skills as string[]) ?? [],
        body,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
