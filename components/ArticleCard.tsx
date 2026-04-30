import Link from "next/link";

import { Card } from "@/components/Card";
import type { ArticleMeta } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

type ArticleCardProps = {
  article: ArticleMeta;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
};

export function ArticleCard({
  article,
  actionLabel = "Ler",
  actionHref = `/artigos/${article.slug}/`,
  onAction,
}: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{formatDate(article.date)}</p>
        <h3 className="text-xl font-semibold tracking-tight text-white">{article.title}</h3>
        <p className="text-sm leading-7 text-muted">{article.excerpt}</p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        {onAction ? (
          <button type="button" onClick={onAction} className="text-sm text-accent hover:text-white">
            {actionLabel}
          </button>
        ) : (
          <Link href={actionHref} className="text-sm text-accent hover:text-white">
            {actionLabel}
          </Link>
        )}
      </div>
    </Card>
  );
}
