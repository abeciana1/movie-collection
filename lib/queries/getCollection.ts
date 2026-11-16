import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/requireUser";
import { cacheLife, cacheTag } from "next/cache";

export const getCollection = async () => {
  "use cache: private";
  cacheLife("minutes");

  const user = await requireUser();
  cacheTag(`collection:${user.id}`);

  return prisma.mediaItem.findMany({
    where: {
      userId: user.id,
    },
    select: {
      _count: true,
    },
  });
};
