import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top-Rated Dentist in Cairo Rehab | Crystal Smile Dental Clinic",
  
  // 2. The Description: Use keywords like "emergency," "family," or "implants."
  description: "Crystal Smile offers premium dental care in Cairo Rehab Gateway Mall. From Digital Smile Design and Dental Implants to painless children's dentistry. Book your appointment today for a healthy, confident smile."
  
  // 3. Open Graph: This makes your site look professional when shared on Facebook/WhatsApp
  openGraph: {
    title: "Crystal Smile Dental Clinic | Family Dentistry in Cairo Rehab Gateway Mall",
    description: "Accepting new patients! Modern dental care in the heart of Rehab.",
    type: "website",
    locale: "en_US",
    url: "https://www.CrystalSmileRehab.com",
    siteName: "Crystal Smile Dental Clinic",
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
