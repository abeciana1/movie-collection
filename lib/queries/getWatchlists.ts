import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/requireUser";
import { cacheLife, cacheTag } from "next/cache";

export const getWatchlists = async () => {
  "use cache: private";
  cacheLife("minutes");

  const user = await requireUser();
  cacheTag(`watchlists:${user.id}`);

  return prisma.watchlist.findMany({
    where: {
      userId: user.id,
    },
    select: {
      _count: true,
    }
  })
}