import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David & Anamarija | Wedding Invitation",
  description:
    "A digital wedding invitation for David and Anamarija in Skopje.",
  applicationName: "David & Anamarija",
  keywords: ["David", "Anamarija", "wedding", "Skopje", "invitation"],
  openGraph: {
    title: "David & Anamarija",
    description: "19 September 2026 at Garden Ballroom, Skopje.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "color-scheme": "light",
    "supported-color-schemes": "light",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f1e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
