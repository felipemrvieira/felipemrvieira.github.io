import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { serviceCards, site } from "@/lib/site";

export const metadata = {
  title: "Consultoria",
};

export default function ConsultoriaPage() {
  return (
    <>
      <Section
        eyebrow="Consultoria"
        title="Ajuda técnica para sistemas que precisam evoluir sem virar reféns de complexidade ornamental."
        description="Atuação pontual ou recorrente em arquitetura, modernização, plataforma e produtividade técnica."
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
        title="Vamos conversar sobre seu contexto"
        description="Se existe um sistema difícil de evoluir, uma decisão arquitetural empacada ou uma operação técnica gerando mais atrito do que deveria, esse é um bom ponto de partida."
        href={`mailto:${site.email}`}
        label="Falar por email"
      />
    </>
  );
}
