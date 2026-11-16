import "server-only";

import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth/getServerSession";

export const requireUser = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (!user?.id) {
    redirect("/");
  }

  return user;
};
