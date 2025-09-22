import React from "react";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["latin"],
  weight: ["300","400", "700", "800"],
});

export const metadata: Metadata = {
  title: "LION STUDIO",
  description: "Productora Musical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almarai.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
