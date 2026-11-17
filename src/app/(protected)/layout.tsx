import HeaderBar from "@/components/movie/Navigation/HeaderBar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SidebarNavigation } from "@/components/movie/SidebarNavigation";
import { MobileNavigation } from "@/components/movie/MobileNavigation";

export const metadata: Metadata = {
  title: "Reelhouse",
};

export default function ProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <ThemeProvider>
      <HeaderBar />
      <div className="flex gap-6">
        <SidebarNavigation/>
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-wide px-4 md:px-5 lg:pl-0 lg:pr-5">
            {children}
          </div>
        </main>
      </div>
      <MobileNavigation />
    </ThemeProvider>
  );
}
