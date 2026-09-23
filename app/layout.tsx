import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova X Pro — Premium Product Demo",
  description:
    "Clean-room premium product landing page built with Next.js and Framer Motion, ready for GitHub and Vercel.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Nova X Pro — Premium Product Demo",
    description: "A premium scroll-driven product landing page template.",
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
