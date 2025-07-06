import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const instr_sans = localFont({
  src: '../../public/fonts/InstrumentSans.ttf',
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DevLinks",
  description: "A link sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instr_sans.className} bg-grey-verylight min-h-[100vh]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
