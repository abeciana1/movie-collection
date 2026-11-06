import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export const AccountMenu = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  console.log("Fetching session...", session);
  return (
    <></>
  )
}