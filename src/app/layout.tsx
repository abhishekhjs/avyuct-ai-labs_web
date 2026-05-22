import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avyuct AI Labs — AI-Powered Vascular Health",
    template: "%s | Avyuct AI Labs",
  },
  description:
    "Avyuct AI Labs detects the strokes no one sees coming. Our autonomous medical intelligence identifies distal vessel occlusions that standard imaging misses — saving lives through AI precision.",
  keywords: [
    "AI stroke detection",
    "distal vessel occlusion",
    "DMVO detection",
    "medical AI",
    "vascular health",
    "neurovascular AI",
    "brain imaging AI",
    "Avyuct",
  ],
  authors: [{ name: "Avyuct AI Labs" }],
  openGraph: {
    title: "Avyuct AI Labs — AI-Powered Vascular Health",
    description:
      "Autonomous medical intelligence that detects distal vessel occlusions standard imaging misses.",
    type: "website",
    locale: "en_US",
    siteName: "Avyuct AI Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyuct AI Labs — AI-Powered Vascular Health",
    description:
      "Autonomous medical intelligence that detects distal vessel occlusions standard imaging misses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScrollProvider>
          <NavbarWrapper />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
