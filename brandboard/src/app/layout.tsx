import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const coutureSerif = Playfair_Display({
  variable: "--font-couture-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const coutureSans = Work_Sans({
  variable: "--font-couture-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ITAFCOUTURE Brandboard",
  description:
    "Luxury fashion-tech maison brandboard showcasing the ITAFCOUTURE identity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${coutureSerif.variable} ${coutureSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
