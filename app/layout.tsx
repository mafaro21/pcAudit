import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins", // Set a CSS variable
  subsets: ["latin"],
  weight: ["400", "700"], // Choose weights (optional)
});

export const metadata: Metadata = {
  title: "PrivacyCure Audit",
  description: "PrivacyCure Auditing Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
