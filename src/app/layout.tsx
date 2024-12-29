import type { Metadata } from "next";
import TopNavbar from "./_components/topnavbar"; 
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
  title: "character.ai | Personalized AI for every moment of your day",
  description: " ",
  
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
        <TopNavbar />

        <main className="pt-20 scrollbar-hide" >
          {children}
        </main>
      </body>
    </html>
  );
}

