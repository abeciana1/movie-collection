import { prisma } from "@/lib/prisma";

export const getCollection = (userId: string) => {
  return prisma.mediaItem.findMany({
    where: {
      userId
    }
  })
}