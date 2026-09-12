import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";

const isHttps = process.env.BETTER_AUTH_BASE_URL?.startsWith("https://");

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "sqlite" }),
  appName: "Reelhouse",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  logger: {
    level: "debug",
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account consent",
    },
  },
  plugins: [nextCookies()],
  advanced: { useSecureCookies: !!isHttps, cookiePrefix: "rewatchr" },
});
