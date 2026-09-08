import { betterAuth } from "better-auth";
import { prisma } from "@/lib/prisma";
import { prismaAdapter } from "better-auth/adapters/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "sqlite" }),
  appName: "Movie Collection",
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_BASE_URL,
});
