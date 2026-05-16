import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import KeepAlive from "../components/KeepAlive";

export const metadata: Metadata = {
  title: "SkyNexes",
  description: "SkyNexes - Your Vision, Our Code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16">
        <KeepAlive />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}