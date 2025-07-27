import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
    <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
      <body className="min-h-[calc(100vh-1px)] flex flex-col font-sans grainy antialiased">
        <main className="relative flex-1 flex flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
