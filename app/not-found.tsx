import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="surface rounded-[2rem] p-10 text-center">
          <span className="eyebrow">404</span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white">Página não encontrada</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted">
            Talvez o conteúdo tenha mudado de lugar durante a migração do site. A navegação principal é um
            caminho mais confiável do que adivinhar a URL.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-accent"
          >
            Voltar para a home
          </Link>
        </div>
      </Container>
    </section>
  );
}

