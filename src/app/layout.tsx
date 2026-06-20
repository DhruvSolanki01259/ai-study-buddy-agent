import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Figtree
} from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Study Buddy",
  description:
    "Learn programming concepts using AI"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
        "font-sans"
      )}
    >
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}