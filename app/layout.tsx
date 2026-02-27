import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mridhul Narayan | Software Developer",
  description: "Portfolio of Mridhul Narayan - Software Developer, Web Developer, and IoT Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased bg-[#EEF2F1] text-[#0F172A] selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
