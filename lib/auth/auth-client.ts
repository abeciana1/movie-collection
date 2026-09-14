import { createAuthClient } from "better-auth/react";
import { isHttps } from "@/lib/auth/auth"
import { nextCookies } from "better-auth/next-js";


export const authClient = createAuthClient({
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
  advanced: { useSecureCookies: !!isHttps, cookiePrefix: "reelhouse" }
});
