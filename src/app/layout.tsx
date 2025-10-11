import type { Metadata } from "next";
import { Geist, Geist_Mono, Merienda } from "next/font/google";
import {} from "next/font/local";
// import {} from ""
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { baseMetadata } from "@/lib/seo/metadata";
import Head from "next/head";
// import { NavBar } from "@/components/User/HomePage/Navbar/NavBar";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["900", "700", "500", "500"],
  variable: "--font-Merienda"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="omiT6uUl05ny_jFBKpg7TblSZkVpOJDXPD9X-WhdkWY"
        />
      </Head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} ${merienda.variable} antialiased`}
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #ffffff",
              // padding: "16px",
              borderColor: "rgb(216 180 254 / 0.5)",
              backgroundColor: "rgb(255 255 255 / 0.2)",
              backdropFilter: "blur(4px)",
              color: "rgb(233 213 255 / var(--tw-text-opacity, 1))"
            }
          }}
        />

        {children}
      </body>
    </html>
  );
}
