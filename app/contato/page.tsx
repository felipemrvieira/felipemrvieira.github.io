import Link from "next/link";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contato",
};

const contactLinks = [
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    copy: "Histórico profissional e principal ponto público de contato.",
  },
  {
    label: "GitHub",
    href: site.links.github,
    copy: "Projetos, experimentos e produção técnica aberta.",
  },
  {
    label: "DEV.to",
    href: site.links.devto,
    copy: "Posts técnicos e artigos publicados.",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    copy: site.email,
  },
];

export default function ContatoPage() {
  return (
    <Section
      eyebrow="Contato"
      title="Se a conversa envolve software, arquitetura, plataforma ou IA aplicada ao desenvolvimento, pode chamar."
      description="Os canais abaixo são públicos e diretos. Para propostas, consultoria ou troca técnica, email e LinkedIn tendem a ser os melhores pontos de entrada."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {contactLinks.map((item) => (
          <Link key={item.label} href={item.href}>
            <Card className="h-full space-y-4 hover:border-accent/40">
              <h3 className="text-xl font-semibold tracking-tight text-white">{item.label}</h3>
              <p className="text-sm leading-7 text-muted">{item.copy}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

