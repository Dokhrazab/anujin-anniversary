import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Миний хайртдаа... | Happy 2-Year Anniversary",
  description: "Anujin, хоёр жилийн ойдоо баяр хүргэе! Чи бол миний амьдралын хамгийн том баяр баясгалан юм. Two incredible years together, full of love and laughter.",
  authors: [{ name: "Bazargur" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6F0] text-[#2C221E] selection:bg-[#C2847A]/30 selection:text-[#7D4238] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
