import { ArticleCard } from "@/components/ArticleCard";
import { Section } from "@/components/Section";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "Artigos",
};

export default function ArtigosPage() {
  const articles = getAllArticles();

  return (
    <Section
      eyebrow="Artigos"
      title="Escrita técnica para registrar contexto antes que a memória da equipe terceirize tudo para adivinhação."
      description="Os artigos combinam prática, opinião técnica e tentativas de nomear problemas que aparecem em arquitetura, plataforma, IA aplicada ao desenvolvimento e custo de complexidade."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Section>
  );
}

