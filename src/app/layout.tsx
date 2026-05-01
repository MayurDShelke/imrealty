import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["300", "400", "500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aeterna Luxe | Premium Luxury Real Estate",
  description: "Experience the pinnacle of architectural excellence. Modern, minimalist, and exclusive luxury real estate curated for the discerning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} ${manrope.variable} font-sans antialiased bg-off-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
