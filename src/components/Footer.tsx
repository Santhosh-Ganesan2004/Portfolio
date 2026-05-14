import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="w-full px-6 py-6 grid grid-cols-[auto_1fr_auto] items-center gap-4 text-sm text-muted-foreground">
        <p className="whitespace-nowrap">© {new Date().getFullYear()} — Built with intent. Deployed at the edge.</p>
        <div className="justify-self-center flex items-center gap-3">
          <a href="https://github.com/Santhosh-Ganesan2004" target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/santhoshganesan2004" target="_blank" rel="noreferrer" className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:santhoshganesan2004@gmail.com" className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div />
      </div>
    </footer>
  );
}
