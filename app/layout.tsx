import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wechselsicher.at"),
  title: {
    default: "Wechselsicher – Stromanbieter vergleichen & wechseln",
    template: "%s | Wechselsicher",
  },
  description:
    "Vergleichen Sie Stromanbieter in Österreich und wechseln Sie sicher zu einem günstigeren Tarif. Schnell, transparent und kostenlos mit Wechselsicher.",
  keywords: [
    "Stromanbieter vergleichen",
    "Strom wechseln Österreich",
    "günstiger Strom",
    "Energieanbieter Vergleich",
    "Wechselsicher",
  ],
  openGraph: {
    title: "Wechselsicher – Stromanbieter vergleichen & wechseln",
    description:
      "Vergleichen Sie Stromanbieter und wechseln Sie einfach zu einem günstigeren Tarif. Sicher & kostenlos.",
    url: "https://wechselsicher.at",
    siteName: "Wechselsicher",
    locale: "de_AT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ReduxProvider>
      </body>
    </html>
  );
}
