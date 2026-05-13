import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";

import type { Role } from "@/lib/cms/types";

const providers: NextAuthOptions["providers"] = [];

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  );
}

if (process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET) {
  providers.push(
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      const ownerEmail = process.env.ALMICSEN_OWNER_EMAIL;
      const email = token.email ?? user?.email;

      if (user?.id) {
        token.id = user.id;
      }

      token.role =
        ownerEmail && email && email.toLowerCase() === ownerEmail.toLowerCase()
          ? "OWNER"
          : ((user?.role ?? token.role ?? "MEMBER") as Role);

      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = (token.role ?? "MEMBER") as Role;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
