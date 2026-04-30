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
        description="Uma visão mais humana e mais precisa sobre a trajetória, os interesses e o tipo de conversa técnica que faz sentido por aqui."
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
              Nos últimos anos, meu foco tem se aproximado cada vez mais da arquitetura pragmática: decisões
              técnicas que fazem sentido para o produto, para o time e para o momento da empresa. Gosto de
              discutir tecnologia sem fetiche por hype, olhando para trade-offs, custo cognitivo, maturidade
              operacional e capacidade real de manutenção.
            </p>
            <p>
              Também venho explorando o impacto da IA no desenvolvimento de software, especialmente como
              modelos de linguagem mudam o custo de contexto, documentação, revisão de código, arquitetura e
              produtividade técnica.
            </p>
            <p>
              Minha área de interesse hoje está entre desenvolvimento, arquitetura, plataforma, sistemas que
              sobrevivem ao tempo e formas mais responsáveis de usar IA como apoio à engenharia.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="Se a pauta envolve arquitetura, plataforma ou evolução de sistemas, já existe assunto em comum."
        description="Projetos novos exigem construção. Sistemas vivos exigem leitura de contexto. Os dois cenários me interessam."
        href={`mailto:${site.email}`}
        label="Abrir conversa"
      />
    </>
  );
}

