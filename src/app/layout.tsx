import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { ThemeToggle } from "@/components/common/ThemeToggle";

// Get the site URL from environment variable or use a default
// For Netlify, set NEXT_PUBLIC_SITE_URL in environment variables
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cpt-data-manager.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CPT Data Manager",
    template: "%s | CPT Data Manager",
  },
  description: "Visualize and edit data for class members. Manage class member information with an intuitive interface for data visualization and editing.",
  keywords: ["CPT", "data manager", "class members", "data visualization", "data editing", "member management"],
  authors: [{ name: "CPT Group" }],
  creator: "CPT Group",
  publisher: "CPT Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CPT Data Manager",
    title: "CPT Data Manager",
    description: "Visualize and edit data for class members. Manage class member information with an intuitive interface.",
    // OG image is automatically detected from app/opengraph-image.png
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CPT Data Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPT Data Manager",
    description: "Visualize and edit data for class members. Manage class member information with an intuitive interface.",
    // Twitter image is automatically detected from app/twitter-image.png
    // Falls back to opengraph-image.png if not found
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons are automatically detected from app/icon.png and app/apple-icon.png
  // favicon.ico is also automatically detected from app/favicon.ico
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
