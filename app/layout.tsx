import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import AppProvider from "@/providers/app-provider";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Variable.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Light.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} ${inter.variable} antialiased font-satoshi`}>
        <AppProvider>
          <main className="w-full">
            <Navbar />
            <div className="md:p-6 p-4">{children}</div>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
