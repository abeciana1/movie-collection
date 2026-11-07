import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { getServerSession } from "@/lib/auth/getServerSession";


export const Profile = async () => {
  const session = await getServerSession();
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
      <AvatarFallback>{session?.user?.name?.[0] || "U"}</AvatarFallback>
    </Avatar>
  );
}
