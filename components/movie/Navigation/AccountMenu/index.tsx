import { Profile } from "@/components/movie/Navigation/Profile";
import { Suspense } from "react"
import { ProfilePlaceholder } from "@/components/movie/Navigation/Profile/Profile.placeholder"

export const AccountMenu = () => {
  return (
    <Suspense fallback={<ProfilePlaceholder/>}>
      <Profile/>
    </Suspense>
  )
}