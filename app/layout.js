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

export const metadata = {
  title: "Akij Group",
  description: "Founded in 1950, Akij Group is one of Bangladesh's leading industrial conglomerates. Starting from a small jute business, it has expanded into textiles, cement, ceramics, food, beverages, electronics, and more. With over 70,000 employees, Akij is known for its commitment to quality, innovation, and ethical values. Beyond business, the group actively supports education, healthcare, and community development—driving progress for both industry and society.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
