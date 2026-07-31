import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppLayout } from "@/layouts/AppLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ntokozo Ngcobo | Full-Stack Software Developer",
  description:
    "Portfolio of Ntokozo Ngcobo — Full-Stack Software Developer specializing in React, Node.js, Flutter, and cloud platforms (AWS, Firebase, Azure).",
  openGraph: {
    title: "Ntokozo Ngcobo | Full-Stack Software Developer",
    description:
      "Full-Stack Software Developer with 3+ years of experience across fintech, healthcare, logistics, and government sectors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
