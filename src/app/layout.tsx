import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistem Pakar Pemilihan Jurusan & Karier",
  description:
    "Sistem pakar berbasis Rule-Based dan Certainty Factor untuk membantu pemilihan jurusan dan karier mahasiswa",
  keywords: [
    "sistem pakar",
    "jurusan",
    "karier",
    "certainty factor",
    "rule-based",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="gradient-bg" />
        {children}
      </body>
    </html>
  );
}
