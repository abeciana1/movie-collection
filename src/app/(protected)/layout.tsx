import HeaderBar from "@/components/movie/Navigation/HeaderBar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: "Reelhouse",
};

export default function ProtectedLayout({ children }: LayoutProps<"/">) {
  return (
    <ThemeProvider>
      <HeaderBar />
      {children}
    </ThemeProvider>
  );
}
