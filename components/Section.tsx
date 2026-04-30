import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-16 md:py-24", className)}>
      <Container>
        <div className="mb-8 space-y-4 md:mb-12">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <div className="space-y-3">
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-copy">{description}</p> : null}
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
