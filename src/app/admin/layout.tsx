import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Flag,
  Home,
  LayoutDashboard,
  Music2,
  Package,
  PenLine,
  Settings,
  Shield,
  ShoppingBag,
  Users,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { getAppSession, isAdminSession } from "@/lib/auth/session";

const adminNav = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: Package },
  { href: "/admin/writing", label: "Writing", icon: PenLine },
  { href: "/admin/shop", label: "Shop", icon: ShoppingBag },
  { href: "/admin/score-sync", label: "ScoreSync", icon: Music2 },
  { href: "/admin/users", label: "Users/Roles", icon: Users },
  { href: "/admin/feature-flags", label: "Feature Flags", icon: Flag },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

const utilityNav = [{ href: "/", label: "Public site", icon: Home }];

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAppSession();

  if (!isAdminSession(session)) {
    return (
      <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-4">
        <Shield className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
        <h1 className="text-3xl font-semibold">Admin access required</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This route is protected by role checks. Configure Auth.js providers and an owner email
          before using the admin area outside local development.
        </p>
        <Link
          className={buttonVariants({ className: "mt-6 w-fit", variant: "accent" })}
          href="/api/auth/signin"
        >
          Sign in
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="border-b bg-card/70 p-4 backdrop-blur-xl lg:min-h-screen lg:border-b-0 lg:border-r">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border bg-secondary text-accent shadow-[0_0_24px_rgba(98,214,199,0.16)]">
            A
          </span>
          almicsen admin
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">
          Signed in as {session?.user?.name ?? session?.user?.email ?? "development owner"} ·{" "}
          {session?.user?.role ?? "PUBLIC"}
        </p>
        <Separator className="my-4" />
        <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
          {adminNav.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Separator className="my-4" />
        <nav className="grid gap-1">
          {utilityNav.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-3 text-xs leading-5 text-muted-foreground">
          Writes are intentionally disabled in this phase. This shell is ready for CRUD wiring after
          database/auth activation.
        </div>
      </aside>
      {children}
    </div>
  );
}
