import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { requireUser } from "@/lib/auth/requireUser";


export const Profile = async () => {
  const user = await requireUser();
  return (
    <Avatar>
      <AvatarImage src={user.image || ""} alt={user.name || ""} />
      <AvatarFallback>{user.name?.[0] || "U"}</AvatarFallback>
    </Avatar>
  );
}
