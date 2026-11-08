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
      <div className="flex">
        <SidebarNavigation/>
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-wide">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
