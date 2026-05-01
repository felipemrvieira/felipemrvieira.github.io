import Link from "next/link";

import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <Container className="flex flex-col gap-6 text-sm text-muted md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-medium text-slate-200">{site.name}</p>
          <p className="max-w-xl">
            Trabalho com desenvolvimento, arquitetura e plataforma para construir sistemas claros,
            sustentáveis e fáceis de evoluir.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href={site.links.github} className="hover:text-white">
            GitHub
          </Link>
          <Link href={site.links.linkedin} className="hover:text-white">
            LinkedIn
          </Link>
          <Link href={site.links.devto} className="hover:text-white">
            DEV.to
          </Link>
          <Link href={`mailto:${site.email}`} className="hover:text-white">
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
