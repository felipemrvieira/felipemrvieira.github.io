import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <article className="mx-auto max-w-4xl">
          <header className="space-y-6">
            <span className="eyebrow">{formatDate(article.date)}</span>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {article.title}
              </h1>
              <p className="section-copy">{article.excerpt}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose-custom mt-10"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </article>
      </Container>
    </section>
  );
}

