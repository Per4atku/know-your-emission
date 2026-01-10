import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Know Your Emission",
  description:
    "Discover the environmental impact of your devices. Explore CO2 emissions, recycled materials, and sustainability measures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-[calc(100vh-4rem)] pt-16">{children}</div>
        <Separator />
        <footer className="text-muted-foreground py-6 text-center text-sm">
          made with ❤️ by sookrass and tyoyoyo
        </footer>
      </body>
    </html>
  );
}
