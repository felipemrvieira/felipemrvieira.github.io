export type Project = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "SyntaxTax Benchmark",
    description:
      "Um experimento para medir quanto diferentes stacks custam em tokens para uma IA entender, modificar e manter. A proposta investiga como linguagem, framework, ORM e convenções impactam o custo cognitivo e financeiro do desenvolvimento assistido por IA.",
    href: "https://felipemrvieira.github.io/SyntaxTax/dashboard/",
    tags: ["IA", "Arquitetura", "Benchmark", "Developer Productivity"],
  },
  {
    title: "Lei CABE",
    description:
      "Uma heurística sobre complexidade arquitetural: a arquitetura certa não é a mais moderna, é a que cabe na bagagem técnica, cognitiva e operacional do time.",
    tags: ["Arquitetura", "Tomada de decisão", "Times"],
  },
  {
    title: "Arquitetura que Sobrevive ao Tempo",
    description:
      "Conteúdo e palestra sobre decisões arquiteturais que continuam compreensíveis quando o hype passa, o time muda e o sistema precisa continuar evoluindo.",
    tags: ["Palestras", "Arquitetura Evolutiva", "Sistemas legados"],
  },
  {
    title: "Experimentos com IA e Engenharia",
    description:
      "Uso de agentes, ADRs, prompts estruturados e análise arquitetural assistida por IA para aumentar produtividade sem perder responsabilidade técnica.",
    tags: ["IA", "ADRs", "Produtividade", "Governança técnica"],
  },
];

