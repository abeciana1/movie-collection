import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

export const ProfilePlaceholder = () => {
  return (
    <Avatar>
      <Skeleton className="h-8 w-8 rounded-full" />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}