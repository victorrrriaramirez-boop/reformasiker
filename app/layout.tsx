import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruma Coffee — Café de especialidad",
  description: "Landing premium con scrollytelling para una marca de café de especialidad.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Bruma Coffee — Café de especialidad",
    description: "Una experiencia digital de café construida con Next.js y Framer Motion.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
