import HeaderBar from "@/components/movie/Navigation/HeaderBar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SidebarNavigation } from "@/components/movie/SidebarNavigation";

export const metadata: Metadata = {
  title: "Reelhouse",
};

export default function ProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <ThemeProvider>
      <HeaderBar />
      <SidebarNavigation/>
      {children}
    </ThemeProvider>
  );
}
