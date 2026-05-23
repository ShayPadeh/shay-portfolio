import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Portfolio — Shay Padeh",
  description: "Architecture portfolio of Shay Padeh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-neutral-900 antialiased" style={{ fontFamily: "'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif" }}>
        <Sidebar />
        <main className="md:ml-[240px] min-h-screen pt-[57px] md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
