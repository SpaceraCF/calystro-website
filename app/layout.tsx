import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Calystro – Cloud Technology for Australian Business",
    template: "%s | Calystro",
  },
  description:
    "Calystro helps Australian businesses deliver excellent customer outcomes through secure, reliable cloud-based technology. Business calling, internet, and Wi-Fi.",
  keywords: ["cloud technology", "business calling", "business internet", "Cisco Webex", "Australian business", "NBN", "Cisco Meraki"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
