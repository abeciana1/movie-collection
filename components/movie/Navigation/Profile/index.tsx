import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export const Profile = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
      <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
    </Avatar>
  );
}