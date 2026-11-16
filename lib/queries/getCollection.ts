import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/requireUser";

export const getCollection = async () => {
  const user = await requireUser();

  return prisma.mediaItem.findMany({
    where: {
      userId: user.id,
    },
    select: {
      _count: true,
    },
  });
};
