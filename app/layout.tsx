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

// GTM container ID — replace GTM-XXXXXXX with the real ID from tagmanager.google.com
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

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
        {/* Google Tag Manager — loads when GTM_ID env var is set */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="antialiased bg-white text-gray-900">
        {/* GTM noscript fallback */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
