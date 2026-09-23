import type { Metadata } from "next";
import { Bebas_Neue, Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dagger & Comb | Barbershop & Tattoo Studio in Wicker Park, Chicago",
  description:
    "Dagger & Comb is a barbershop and tattoo studio on Milwaukee Ave in Wicker Park, Chicago. Sharp cuts, straight razor shaves, beard work and custom tattoos since 2012.",
  keywords: [
    "barbershop",
    "tattoo studio",
    "Chicago barbershop",
    "Wicker Park",
    "straight razor shave",
    "custom tattoos",
    "beard trim",
    "skin fade",
  ],
  authors: [{ name: "Dagger & Comb" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dagger & Comb | Barbershop & Tattoo Studio",
    description:
      "Sharp cuts, straight razor shaves and honest ink in Wicker Park, Chicago. Book a chair or walk in.",
    siteName: "Dagger & Comb",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${bebas.variable} ${jost.variable} antialiased bg-bone text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
