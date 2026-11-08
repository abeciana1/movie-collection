import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { getServerSession } from "@/lib/auth/getServerSession";
import { connection } from "next/server";


export const Profile = async () => {
  await connection();
  const session = await getServerSession();
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
      <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
    </Avatar>
  );
}
