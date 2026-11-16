import "server-only";

import { redirect } from "next/navigation";
import { cacheLife } from "next/cache";
import { getServerSession } from "@/lib/auth/getServerSession";

export const requireUser = async () => {
  "use cache: private";
  cacheLife("minutes");

  const session = await getServerSession();
  const user = session?.user;

  if (!user?.id) {
    redirect("/");
  }

  return user;
};
