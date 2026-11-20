import HeaderBar from "@/components/movie/Navigation/HeaderBar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SidebarNavigation } from "@/components/movie/SidebarNavigation";
import { MobileNavigation } from "@/components/movie/MobileNavigation";
import type { ProtectedLayoutProps } from "@/types/general";

export const metadata: Metadata = {
  title: "Reelhouse",
};

export default function ProtectedLayout({ children, fullWidth }: ProtectedLayoutProps) {
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
      <div className="mx-auto w-full max-w-wide px-4 md:px-5 lg:pr-5">
        {fullWidth}
      </div>
      <MobileNavigation />
    </ThemeProvider>
  );
}
