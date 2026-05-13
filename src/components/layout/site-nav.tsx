import Link from "next/link";
import { Menu, TerminalSquare } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/creative-work", label: "Creative" },
  { href: "/writing", label: "Writing" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/friends", label: "Friends" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2 font-semibold tracking-normal" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border bg-secondary shadow-[0_0_24px_rgba(98,214,199,0.16)]">
            <TerminalSquare className="h-4 w-4 text-accent" aria-hidden="true" />
          </span>
          <span>almicsen</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <details className="group relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border bg-secondary text-foreground transition hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Open navigation</span>
            </summary>
            <div className="absolute right-0 top-12 z-50 grid w-56 gap-1 rounded-lg border bg-card p-2 shadow-2xl">
              {navItems.map((item) => (
                <Link
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link className={buttonVariants({ size: "sm", variant: "outline" })} href="/admin">
            Admin
          </Link>
        </div>
      </nav>
    </header>
  );
}
