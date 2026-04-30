"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/Container";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-page/75 backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-200 uppercase">
            {site.shortName}
          </span>
          <span className="text-xs text-muted transition-colors group-hover:text-accent">
            {site.role}
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Fechar navegação" : "Abrir navegação"}
          className="inline-flex rounded-full border border-line p-3 text-slate-200 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav
          id="site-navigation"
          className={cn(
            "absolute left-5 right-5 top-20 surface rounded-3xl p-4 md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            open ? "block" : "hidden md:block",
          )}
          aria-label="Principal"
        >
          <ul className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-3 py-2 text-sm text-muted hover:bg-white/[0.04] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

