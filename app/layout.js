import "./globals.css";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["400", "500", "600", "700"], display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const __jsonld = {"@context":"https://schema.org","@type":"RealEstateAgent","name":"Beranda","description":"Marketplace properti","url":"https://properti-beranda.vercel.app","areaServed":"ID"};

export const metadata = {
  metadataBase: new URL("https://properti-beranda.vercel.app"),
  title: "Beranda — Cari Rumah dengan Hati",
  description: "Marketplace properti yang hangat & ramah: temukan rumah, apartemen, dan hunian impianmu di seluruh Indonesia.",
  applicationName: "Beranda",
  keywords: ["marketplace properti", "cari rumah", "jual beli rumah", "apartemen", "properti indonesia"],
  authors: [{ name: "Beranda" }],
  creator: "Beranda",
  publisher: "Beranda",
  alternates: { canonical: "https://properti-beranda.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://properti-beranda.vercel.app",
    siteName: "Beranda",
    title: "Beranda — Cari Rumah dengan Hati",
    description: "Marketplace properti yang hangat & ramah: temukan rumah, apartemen, dan hunian impianmu di seluruh Indonesia.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Beranda — Cari Rumah dengan Hati" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beranda — Cari Rumah dengan Hati",
    description: "Marketplace properti yang hangat & ramah: temukan rumah, apartemen, dan hunian impianmu di seluruh Indonesia.",
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
    <html lang="id">
      <body className={`${bricolage.variable} ${inter.variable} antialiased`}>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
