import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amanveer Singh Sando — Photography & Cinematography",
  description:
    "Portfolio of Amanveer Singh Sando. Photography and cinematography spanning concerts, sports, automobiles, fashion, and film.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebasNeue.variable} h-full`}
    >
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
