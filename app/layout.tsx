import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zahoor.",
  description: "Zahoor Ahmad's Portfolio Website - Computer Scientist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className="p-6">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
