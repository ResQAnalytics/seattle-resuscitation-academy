import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resuscitation Academy Seattle",
  description: "October 12–13, 2026 · Seattle, WA — Advancing excellence in emergency care through evidence-based education.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
