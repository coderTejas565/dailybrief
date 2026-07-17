import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "DailyBrief — Your WhatsApp Memory Assistant",
  description:
    "DailyBrief captures your thoughts, tasks, and reminders inside WhatsApp and brings them back when they matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${space.variable}
          ${inter.variable}
          ${jetbrains.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
