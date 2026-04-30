import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { experienceHighlights } from "@/lib/site";

export const metadata = {
  title: "Experiência",
};

const details = [
  ...experienceHighlights,
  {
    title: "Sistemas web, integrações e plataformas internas",
    description:
      "Experiência com APIs, integrações entre serviços, sustentação de aplicações de negócio e construção de plataformas internas voltadas à produtividade e governança técnica.",
  },
  {
    title: "Cloud, containers e automação",
    description:
      "Prática com Docker, AWS, Jenkins, Kubernetes, pipelines de CI/CD e automação de ambientes para reduzir fricção operacional e aumentar previsibilidade de entrega.",
  },
  {
    title: "Modernização de legado com pragmatismo",
    description:
      "Evolução de aplicações existentes com foco em modularização, redução de acoplamento, melhor desenho de fronteiras e menor custo de mudança.",
  },
];

export default function ExperienciaPage() {
  return (
    <Section
      eyebrow="Experiência"
      title="Histórico orientado por problemas resolvidos, não por ornamentação de currículo."
      description="Sem acesso confiável ao LinkedIn a partir do ambiente, esta página foi mantida em formato seguro e ajustável. A estrutura está pronta para receber cargos, empresas e datas reais depois."
    >
      <Timeline items={details} />
    </Section>
  );
}

