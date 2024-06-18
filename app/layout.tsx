import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Login from "./login/page";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bark Avenue Orphanage",
  description: "Demo Dog Search Application",
};

const isAuth = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const color = isAuth ? "bg-green-500 text-black" : "bg-red-500 text-white";

  return (
    <html lang="en">
      <body
        className={inter.className + " " + "flex min-h-screen justify-center"}
      >
        <div className="w-full max-w-4xl drop-shadow-md">
          <nav className="flex min-h-14 w-full items-center justify-between gap-2 border-b bg-white px-3">
            <Link href="/" className={"h-min rounded px-3 py-2 font-semibold"}>
              Home
            </Link>
            <Link
              href="/login"
              className={
                "h-min rounded border bg-gray-50 px-3 py-2 font-semibold " +
                color
              }
            >
              {isAuth ? "Login" : "Logout"}
            </Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
