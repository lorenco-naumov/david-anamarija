import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { SmoothProvider } from "@/components/SmoothProvider";
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

export const metadata: Metadata = {
  title: "David & Anamarija | Wedding Invitation",
  description:
    "A digital wedding invitation for David and Anamarija at Villa Aurelia, Lake Como.",
  applicationName: "David & Anamarija",
  keywords: ["David", "Anamarija", "wedding", "Lake Como", "invitation"],
  openGraph: {
    title: "David & Anamarija",
    description: "21 September 2026 at Villa Aurelia, Lake Como.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothProvider>{children}</SmoothProvider>
      </body>
    </html>
  );
}
