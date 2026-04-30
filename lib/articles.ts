import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  draft?: boolean;
};

export type Article = ArticleMeta & {
  contentHtml: string;
};

function getArticleFilePath(slug: string) {
  return path.join(articlesDirectory, `${slug}.md`);
}

function parseArticleFile(fileName: string): ArticleMeta {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(getArticleFilePath(slug), "utf8");
  const { data } = matter(raw);

  return {
    slug,
    title: String(data.title),
    excerpt: String(data.excerpt),
    date: String(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft: Boolean(data.draft),
  };
}

export function getAllArticles() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parseArticleFile)
    .filter((article) => !article.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedArticles(limit = 3) {
  return getAllArticles().slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = getArticleFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title),
    excerpt: String(data.excerpt),
    date: String(data.date),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    contentHtml: processed.toString(),
  };
}

