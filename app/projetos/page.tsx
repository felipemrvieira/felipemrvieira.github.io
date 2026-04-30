import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projetos",
};

export default function ProjetosPage() {
  return (
    <Section
      eyebrow="Projetos"
      title="Projetos e conceitos que ajudam a tornar a discussão técnica mais concreta."
      description="Nem toda produção útil termina em produto pronto. Algumas viram benchmark, heurística, palestra, artigo ou ferramenta de raciocínio para times e arquiteturas."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

