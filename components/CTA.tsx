import Link from "next/link";

import { Container } from "@/components/Container";

type CTAProps = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export function CTA({ title, description, href, label }: CTAProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="surface rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="space-y-4">
              <span className="eyebrow">Próximo passo</span>
              <h2 className="section-title">{title}</h2>
              <p className="section-copy">{description}</p>
            </div>
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-accent"
            >
              {label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

