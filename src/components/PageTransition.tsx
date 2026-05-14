import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {children}
      </div>
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-glow mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
