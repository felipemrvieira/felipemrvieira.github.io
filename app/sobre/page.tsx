import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata = {
  title: "Sobre",
};

export default function SobrePage() {
  return (
    <>
      <Section
        eyebrow="Sobre"
        title="Tecnologia sem fetiche por hype. Arquitetura com compromisso com contexto."
        description="O recorte mais útil da minha trajetória está menos em cargos e mais no tipo de problema que escolhi resolver."
      >
        <div className="surface rounded-[2rem] p-8 md:p-10">
          <div className="prose-custom">
            <p>
              Sou Felipe Maciel Ramos Vieira, engenheiro de software com mais de uma década de experiência
              construindo, mantendo e evoluindo sistemas web. Minha trajetória passa por desenvolvimento full
              stack, APIs, plataformas SaaS, integrações, automação de ambientes e práticas de DevOps e
              Platform Engineering.
            </p>
            <p>
              Hoje, meu foco está em arquitetura pragmática, produtividade técnica, sistemas que sobrevivem ao
              tempo e uso responsável de IA como apoio à engenharia. Interessa menos a stack da moda e mais a
              capacidade do time de entender, operar e evoluir o sistema depois.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Se a pauta envolve arquitetura, plataforma ou evolução de sistemas, já existe assunto em comum."
        description="Projetos novos exigem construção. Sistemas vivos exigem leitura de contexto."
        href={`mailto:${site.email}`}
        label="Abrir conversa"
      />
    </>
  );
}
