import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ideas, principles } from "@/lib/site";

export const metadata = {
  title: "Ideias",
};

export default function IdeiasPage() {
  return (
    <>
      <Section
        eyebrow="Ideias"
        title="Palestras, conceitos e provocações técnicas que merecem elaboração."
        description="Nem todo tema precisa virar framework. Alguns precisam apenas de linguagem melhor para discutir contexto, custo de complexidade e responsabilidade técnica."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {ideas.map((idea) => (
            <Card key={idea.title} className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight text-white">{idea.title}</h3>
              <p className="text-sm leading-7 text-muted">{idea.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Princípios"
        title="Frases curtas para problemas que costumam ficar complexos demais no discurso."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle}>
              <p className="text-base font-medium text-slate-200">{principle}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

