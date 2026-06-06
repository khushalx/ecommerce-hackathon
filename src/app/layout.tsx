import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { CategoryBar } from "@/components/CategoryBar";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { StoreProvider } from "@/context/store-context";
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
  title: {
    default: "Nivara - Simple Shopping, Better Prices",
    template: "%s | Nivara",
  },
  description:
    "A clean, practical marketplace demo for electronics, fashion, home, beauty, and everyday essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen font-sans antialiased">
        <StoreProvider>
          <Navbar />
          <Suspense
            fallback={
              <div
                className="h-[65px] border-b border-slate-200 bg-white"
                aria-hidden="true"
              />
            }
          >
            <CategoryBar />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
