import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bark Avenue Orphanage",
  description: "Demo Dog Search Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + " " + "flex min-h-screen justify-center"}
      >
        <div className="w-full max-w-4xl drop-shadow-md">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
