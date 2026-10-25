import type { Metadata } from "next";
import "@/src/app/globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
