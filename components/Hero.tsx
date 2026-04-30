import Link from "next/link";
import { ArrowRight, Github, Linkedin, NotebookPen } from "lucide-react";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="space-y-8">
          <span className="eyebrow">Software, arquitetura e plataforma</span>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              {site.name}
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-200 md:text-2xl">
              Software Engineer e Platform Engineer focado em arquitetura pragmática, sistemas evolutivos
              e produtividade técnica com IA.
            </p>
            <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">{site.intro}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projetos/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-accent"
            >
              Ver projetos <ArrowRight size={16} />
            </Link>
            <Link
              href="/artigos/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Ler artigos
            </Link>
            <Link
              href="/contato/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-transparent px-6 py-3 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-white"
            >
              Falar comigo
            </Link>
          </div>
        </div>

        <div className="surface rounded-[2rem] p-6 md:p-8">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Mensagem central</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-white">
              Ajudo a construir, evoluir e simplificar sistemas de software com uma visão prática entre
              produto, arquitetura, plataforma e time.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted">
              <Link href={site.links.github} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 hover:text-white">
                <Github size={16} /> GitHub
              </Link>
              <Link href={site.links.linkedin} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 hover:text-white">
                <Linkedin size={16} /> LinkedIn
              </Link>
              <Link href={site.links.devto} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 hover:text-white">
                <NotebookPen size={16} /> DEV.to
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

