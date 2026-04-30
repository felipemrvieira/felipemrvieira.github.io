import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/Card";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col justify-between gap-6">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="text-sm leading-7 text-muted">{project.description}</p>
        </div>
      </div>
      {project.href ? (
        <Link href={project.href} className="inline-flex items-center gap-2 text-sm text-accent hover:text-white">
          Abrir referência <ArrowUpRight size={16} />
        </Link>
      ) : (
        <span className="text-sm text-slate-500">Em desenvolvimento editorial</span>
      )}
    </Card>
  );
}

