import "server-only";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth/config";
import type { Role } from "@/lib/cms/types";
import { canAccessAdmin } from "@/lib/permissions/roles";

export type AppSession = {
  user?: {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    role?: Role;
  };
};

function isDevAuthEnabled() {
  return process.env.NODE_ENV !== "production" || process.env.ALMICSEN_ENABLE_DEV_AUTH === "true";
}

function hasProductionAuthConfig() {
  return process.env.NODE_ENV !== "production" || Boolean(process.env.NEXTAUTH_SECRET);
}

function getDevRole(): Role {
  const role = process.env.ALMICSEN_DEV_AUTH_ROLE;
  const allowedRoles: Role[] = ["OWNER", "ADMIN", "EDITOR", "FRIEND", "MEMBER", "PUBLIC"];

  return allowedRoles.includes(role as Role) ? (role as Role) : "OWNER";
}

export function getDevelopmentSession(): AppSession | null {
  if (!isDevAuthEnabled()) {
    return null;
  }

  return {
    user: {
      id: "dev-owner",
      name: "almicsen",
      email: null,
      role: getDevRole(),
    },
  };
}

export async function getAppSession(): Promise<AppSession | null> {
  if (!hasProductionAuthConfig()) {
    return getDevelopmentSession();
  }

  const session = await getServerSession(authOptions);

  if (session?.user) {
    return {
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: session.user.role ?? "MEMBER",
      },
    };
  }

  return getDevelopmentSession();
}

export function isAdminSession(session: AppSession | null) {
  return canAccessAdmin(session?.user?.role ?? "PUBLIC");
}

export async function getAdminSession() {
  const session = await getAppSession();

  return isAdminSession(session) ? session : null;
}
