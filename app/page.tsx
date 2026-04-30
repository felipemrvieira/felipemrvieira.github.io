import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { ArticleCard } from "@/components/ArticleCard";
import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { getFeaturedArticles } from "@/lib/articles";
import { projects } from "@/lib/projects";
import { focusAreas, serviceCards, site } from "@/lib/site";

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
        eyebrow="Projetos em destaque"
        title="Um recorte do que estou investigando e construindo"
        description="Hoje, o principal destaque público é o SyntaxTax Benchmark: uma tentativa de medir o custo de contexto que diferentes stacks impõem ao desenvolvimento assistido por IA."
      >
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Artigos"
        title="Escrita técnica para registrar contexto e reduzir ruído."
        description="Arquitetura, IA aplicada ao desenvolvimento, trade-offs e o tipo de problema que costuma aparecer tarde demais no ciclo de software."
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
        description="Atuação direta em arquitetura, modernização, plataforma e produtividade técnica."
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

      <CTA
        title="Se o sistema está mais complexo do que o time consegue operar, vale conversar."
        description="Arquitetura, modernização incremental, plataforma e uso pragmático de IA para desenvolvimento."
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
