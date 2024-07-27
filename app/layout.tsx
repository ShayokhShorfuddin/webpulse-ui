import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "WebPulse - Uptime Monitoring Service",
  description:
    "Your website's 24/7 health guardian. Instant alerts and rapid diagnostics keep downtime at bay. Simple setup, powerful insights, and peace of mind for businesses of all sizes.",
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
          "min-h-screen bg-black-background font-sans antialiased",
          lexend.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
