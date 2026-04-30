export const site = {
  name: "Felipe Maciel Ramos Vieira",
  shortName: "Felipe Maciel",
  role: "Software Engineer · Platform Engineer",
  headline:
    "Arquitetura pragmática, sistemas evolutivos e produtividade técnica com IA.",
  description:
    "Ajudo a construir, evoluir e simplificar sistemas de software com uma visão prática entre produto, arquitetura, plataforma e time.",
  intro:
    "Trabalho na interseção entre desenvolvimento, arquitetura e plataforma: construindo APIs, modernizando aplicações, automatizando ambientes e ajudando times a reduzir complexidade sem perder capacidade de evolução.",
  location: "Brasil",
  email: "felipemrvieira@gmail.com",
  url: "https://felipemrvieira.github.io",
  repo: "https://github.com/felipemrvieira/felipemrvieira.github.io",
  links: {
    github: "https://github.com/felipemrvieira",
    linkedin: "https://www.linkedin.com/in/felipemrvieira",
    devto: "https://dev.to/felipemrvieira",
    syntaxtax: "https://felipemrvieira.github.io/SyntaxTax/dashboard/",
  },
} as const;

export const navItems = [
  { href: "/sobre/", label: "Sobre" },
  { href: "/projetos/", label: "Projetos" },
  { href: "/artigos/", label: "Artigos" },
  { href: "/consultoria/", label: "Consultoria" },
  { href: "/contato/", label: "Contato" },
] as const;

export const focusAreas = [
  {
    title: "Engenharia de Software",
    description:
      "Desenvolvimento de aplicações web, APIs e integrações com foco em clareza, manutenibilidade e evolução contínua.",
  },
  {
    title: "Arquitetura pragmática",
    description:
      "Apoio decisões arquiteturais considerando contexto real: maturidade do time, fase do produto, restrições técnicas e custo de manutenção.",
  },
  {
    title: "Platform Engineering / DevEx",
    description:
      "Automação de ambientes, pipelines, integração contínua, padronização técnica e melhoria da experiência de desenvolvimento.",
  },
  {
    title: "IA aplicada ao desenvolvimento",
    description:
      "Uso IA como ferramenta de aceleração técnica, revisão, documentação, experimentação e análise de trade-offs sem terceirizar o julgamento de engenharia.",
  },
] as const;

export const serviceCards = [
  {
    title: "Revisão arquitetural",
    description:
      "Análise de sistemas, fluxos, integrações, gargalos técnicos, riscos de acoplamento e caminhos de simplificação.",
  },
  {
    title: "Modernização incremental",
    description:
      "Planejamento de evolução técnica sem reescrita desnecessária: extração gradual, modularização, APIs, testes e pipelines.",
  },
  {
    title: "DevEx e CI/CD",
    description:
      "Melhoria da experiência do time com automação, padronização, pipelines, ambientes locais e práticas de entrega.",
  },
  {
    title: "IA aplicada ao desenvolvimento",
    description:
      "Estruturação de uso de IA com prompts, ADRs, agentes, revisão assistida, documentação técnica e redução de custo de contexto.",
  },
  {
    title: "Desenvolvimento full stack",
    description:
      "Construção e evolução de aplicações com stack moderna, produtiva e compatível com o contexto técnico, operacional e de negócio do time.",
  },
];
