import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Business Internet, Calling & Wi-Fi | Calystro Australia",
    template: "%s | Calystro",
  },
  description:
    "Managed internet with Cisco Meraki security, cloud calling and Wi-Fi for Australian SMBs. No setup fees. 24/7 AU support. Get a quote today.",
  keywords: [
    "business internet Australia",
    "business NBN plans",
    "business phone system Australia",
    "cloud phone system",
    "Cisco Webex Australia",
    "managed business internet",
    "business NBN with security",
    "Cisco Meraki",
    "business Wi-Fi Australia",
    "Australian owned telco",
  ],
  metadataBase: new URL("https://calystro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://calystro.com",
    siteName: "Calystro",
    title: "Business Internet, Calling & Wi-Fi | Calystro Australia",
    description:
      "Managed internet with Cisco Meraki security, cloud calling and Wi-Fi for Australian SMBs. No setup fees. 24/7 AU support. Get a quote today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Internet, Calling & Wi-Fi | Calystro Australia",
    description:
      "Managed internet with Cisco Meraki security, cloud calling and Wi-Fi for Australian SMBs. No setup fees. 24/7 AU support. Get a quote today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://calystro.com/#business",
  name: "Calystro",
  url: "https://calystro.com",
  logo: "https://calystro.com/logo.png",
  description:
    "Australian-owned cloud technology business delivering managed internet, cloud calling and Wi-Fi for Australian SMBs.",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "AU",
  },
  telephone: "+61272293600",
  email: "sales@calystro.com",
  priceRange: "$$",
  knowsAbout: [
    "Business Internet",
    "Cloud Calling",
    "Cisco Webex",
    "Cisco Meraki",
    "Business Wi-Fi",
    "NBN eSLA",
    "Managed Network Security",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Calystro Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Internet",
          description:
            "Managed business NBN with Cisco Meraki security gateway included. From $190/month.",
          url: "https://calystro.com/products/business-internet",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Calling",
          description:
            "Cloud business calling powered by Cisco Webex. From $15/user/month.",
          url: "https://calystro.com/products/business-calling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Wi-Fi",
          description:
            "Enterprise Cisco Meraki Wi-Fi designed, installed and managed for Australian businesses.",
          url: "https://calystro.com/products/business-wifi",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
