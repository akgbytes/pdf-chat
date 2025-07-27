import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "PDFChat",
  description: "Chat with your PDFs",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-[calc(100vh-1px)] flex flex-col grainy antialiased",
          inter.className
        )}
      >
        <main className="relative flex-1 flex flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
