# Felipe Maciel Ramos Vieira

Site pessoal e profissional em `Next.js`, com export estático para `GitHub Pages`.

## Stack

- `Next.js` com App Router
- `TypeScript`
- `Tailwind CSS`
- conteúdo em `Markdown`
- deploy via `GitHub Actions`

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build estático

```bash
npm run build
```

O build gera a pasta `out/`, pronta para publicação estática.

## Estrutura

- `app/`: páginas e layout
- `components/`: componentes reutilizáveis
- `content/articles/`: artigos em Markdown
- `lib/`: metadados do site e helpers
- `.github/workflows/deploy.yml`: pipeline de deploy para GitHub Pages

## Observações

- O conteúdo de experiência foi mantido em formato seguro e genérico onde não havia confirmação pública confiável no ambiente.
- A estrutura está pronta para receber cargos, empresas, datas, talks e novos artigos sem alterar a arquitetura do site.
