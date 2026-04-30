"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { ArticleCard } from "@/components/ArticleCard";
import type { ArticleMeta } from "@/lib/articles";

type HomeArticlesProps = {
  articles: ArticleMeta[];
};

export function HomeArticles({ articles }: HomeArticlesProps) {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            actionLabel="Em breve"
            onAction={() => setSelectedTitle(article.title)}
          />
        ))}
      </div>

      {selectedTitle ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="articles-coming-soon-title"
          onClick={() => setSelectedTitle(null)}
        >
          <div
            className="surface w-full max-w-md rounded-[2rem] p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <span className="eyebrow">Artigos</span>
                <h3 id="articles-coming-soon-title" className="text-2xl font-semibold tracking-tight text-white">
                  Em breve
                </h3>
              </div>
              <button
                type="button"
                aria-label="Fechar modal"
                onClick={() => setSelectedTitle(null)}
                className="rounded-full border border-line p-2 text-muted hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              O artigo <span className="text-slate-200">{selectedTitle}</span> vai ganhar uma versão revisada e
              publicada aqui em breve.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
