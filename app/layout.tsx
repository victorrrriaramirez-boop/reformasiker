import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.reformasiker.es";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Reformas Iker | Reformas integrales", template: "%s | Reformas Iker" },
  description: "Reformas integrales de viviendas, cocinas y baños con planificación, oficio y acabados cuidados.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: "Reformas Iker", title: "Reformas Iker", description: "Espacios bien pensados, obras bien ejecutadas.", images: [{ url: "/images/proyecto-salon.webp", width: 1536, height: 1024, alt: "Reforma integral de salón y cocina" }] },
  icons: { icon: "/favicon.svg" },
};

const schema = { "@context": "https://schema.org", "@type": "GeneralContractor", name: "Reformas Iker", url: base, areaServed: "Madrid", description: "Empresa de reformas integrales de viviendas, cocinas y baños." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body><Header/><main>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>{process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID}/>}</body></html>;
}
