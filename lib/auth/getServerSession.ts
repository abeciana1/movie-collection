import { createApiClient } from "@/lib/helpers/api-client";
import { headers as nextHeaders } from "next/headers";

type BetterAuthSession = {
  session: { id: string; userId: string; expiresAt: string } | null;
  user: { id: string; email?: string; name?: string; image?: string } | null;
} | null;

const authClient = createApiClient(process.env.NEXT_PUBLIC_BETTER_AUTH_BASE_URL!);

export const getServerSession = async (): Promise<BetterAuthSession | null> => {
  const cookieHeaderToUse = (await nextHeaders()).get("cookie") ?? "";

  try {
    return await authClient.get<BetterAuthSession>("/api/auth/get-session", {
      headers: { cookie: cookieHeaderToUse },
      cache: "no-store",
    });
  } catch {
    return null;
  }
};