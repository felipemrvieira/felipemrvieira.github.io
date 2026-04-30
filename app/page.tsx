import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { ArticleCard } from "@/components/ArticleCard";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { SkillBadge } from "@/components/SkillBadge";
import { getFeaturedArticles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { focusAreas, principles, serviceCards, site, themes } from "@/lib/site";

export default function HomePage() {
  const articles = getFeaturedArticles();

  return (
    <>
      <Hero />

      <Section
        eyebrow="O que eu faço"
        title="Construo software com foco em clareza operacional, evolução contínua e custo real de manutenção."
        description="O trabalho muda conforme o contexto. O critério não. Arquitetura, plataforma e desenvolvimento precisam servir ao produto e ao time, não à estética da stack."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {focusAreas.map((area) => (
            <Card key={area.title} className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight text-white">{area.title}</h3>
              <p className="text-sm leading-7 text-muted">{area.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Temas"
        title="Assuntos que orientam meu trabalho"
        description="Nem tudo vira serviço, artigo ou palestra. Mas quase tudo acaba aparecendo como decisão arquitetural, padrão de time ou redução de complexidade."
      >
        <div className="flex flex-wrap gap-3">
          {themes.map((theme) => (
            <SkillBadge key={theme} label={theme} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Projetos em destaque"
        title="Projetos, conceitos e linhas de pesquisa aplicadas"
        description="Parte do trabalho aparece em código. Parte aparece como tese prática: formas melhores de pensar arquitetura, plataforma e produtividade técnica."
      >
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Artigos"
        title="Escrita técnica para organizar contexto, confrontar hype e registrar trade-offs."
        description="Os artigos misturam prática, arquitetura, IA aplicada ao desenvolvimento e temas que normalmente só aparecem tarde demais em retrospectivas."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/artigos/" className="inline-flex items-center gap-2 text-sm text-accent hover:text-white">
            Ver todos os artigos <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Consultoria"
        title="Como posso ajudar"
        description="Quando o problema exige critério técnico, simplificação consciente e capacidade de execução, estes são alguns pontos onde costumo gerar mais valor."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title} className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
              <p className="text-sm leading-7 text-muted">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Princípios"
        title="Critérios simples para discussões que costumam ficar desnecessariamente sofisticadas."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <Card key={principle} className="flex items-center justify-between gap-4 py-5">
              <p className="text-sm font-medium text-slate-200">{principle}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTA
        title="Se o seu contexto está ficando mais complexo do que o time consegue operar, vale conversar."
        description="Revisão arquitetural, modernização incremental, DevEx, pipelines e uso pragmático de IA para desenvolvimento."
        href={`mailto:${site.email}`}
        label="Vamos conversar sobre seu contexto"
      />

      <Section
        eyebrow="Contato"
        title="Links públicos"
        description="O jeito mais direto de continuar a conversa, acompanhar conteúdo técnico ou abrir uma pauta de trabalho."
        className="pt-0"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <LinkCard href={site.links.linkedin} label="LinkedIn" copy="Perfil profissional e histórico público" />
          <LinkCard href={site.links.github} label="GitHub" copy="Código, experimentos e projetos públicos" />
          <LinkCard href={site.links.devto} label="DEV.to" copy="Artigos técnicos e rascunhos públicos" />
          <LinkCard href={`mailto:${site.email}`} label="Email" copy={site.email} icon={<Mail size={16} />} />
        </div>
      </Section>
    </>
  );
}

function LinkCard({
  href,
  label,
  copy,
  icon,
}: {
  href: string;
  label: string;
  copy: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link href={href} className="surface rounded-3xl p-6 hover:border-accent/40">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-accent">
          {icon}
          <span>{label}</span>
        </div>
        <p className="text-sm leading-7 text-muted">{copy}</p>
      </div>
    </Link>
  );
}
