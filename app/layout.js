import "./globals.css";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Beranda — Cari Rumah dengan Hati",
  description: "Marketplace properti yang hangat & ramah: temukan rumah, apartemen, dan hunian impianmu di seluruh Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
