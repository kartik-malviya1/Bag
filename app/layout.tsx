//@ts-nocheck
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Corporate Uniforms By B.A.G Group",
  description: "B2B corporate apparel and uniform design business with a textile legacy since 1978. Custom workwear for hospitality, healthcare, and corporate environments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
