import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Sources Hong Kong Shows — Buyer registration",
  description:
    "Why visit Global Sources Hong Kong Shows, what sets them apart, and how to register. Open to all businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-white text-[#222] antialiased">
        {children}
      </body>
    </html>
  );
}
