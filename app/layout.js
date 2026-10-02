import "./globals.css";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const __jsonld = {"@context":"https://schema.org","@type":"RealEstateAgent","name":"Beranda","description":"Rumah, kost, dan kebun untuk keluarga, mahasiswa, dan pensiunan — setiap listing terhubung ke panduan kawasan: suasana, waktu tempuh, kisaran harga, dan kekurangannya.","url":"https://properti-beranda.vercel.app","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://properti-beranda.vercel.app"),
  title: { default: "Beranda — Pilih kawasannya dulu", template: "%s — Beranda" },
  description: "Rumah, kost, dan kebun untuk keluarga, mahasiswa, dan pensiunan — setiap listing terhubung ke panduan kawasan: suasana, waktu tempuh, kisaran harga, dan kekurangannya.",
  applicationName: "Beranda",
  keywords: ["panduan kawasan", "rumah keluarga", "kost mahasiswa", "rumah pensiun", "Sanur", "Lembang", "Kotabaru", "Cinere"],
  authors: [{ name: "Beranda" }],
  creator: "Beranda",
  publisher: "Beranda",
  alternates: { canonical: "https://properti-beranda.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://properti-beranda.vercel.app",
    siteName: "Beranda",
    title: "Beranda — Pilih kawasannya dulu",
    description: "Rumah, kost, dan kebun untuk keluarga, mahasiswa, dan pensiunan — setiap listing terhubung ke panduan kawasan: suasana, waktu tempuh, kisaran harga, dan kekurangannya.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Beranda — Pilih kawasannya dulu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beranda — Pilih kawasannya dulu",
    description: "Rumah, kost, dan kebun untuk keluarga, mahasiswa, dan pensiunan — setiap listing terhubung ke panduan kawasan: suasana, waktu tempuh, kisaran harga, dan kekurangannya.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
