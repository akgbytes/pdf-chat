import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter } from "@/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

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
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en">
          <body
            className={cn(
              "min-h-[calc(100vh-1px)] flex flex-col grainy antialiased",
              inter.className
            )}
          >
            <main className="relative flex-1 flex flex-col">{children}</main>
            <Toaster />
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
