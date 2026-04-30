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
];
