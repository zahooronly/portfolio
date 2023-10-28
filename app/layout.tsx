import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
