import type { Metadata, Viewport } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://escolaRobertoTurbay.edu.br"),
  title: {
    default: "E.M.E.I.E.F. Roberto Turbay | Escola Municipal de Ariquemes - RO",
    template: "%s | E.M.E.I.E.F. Roberto Turbay",
  },
  description:
    "Escola Municipal de Ensino Infantil e Fundamental Roberto Turbay em Ariquemes, Rondônia. Educação de qualidade para crianças do 1º ao 6º ano. Matrículas abertas para 2026.",
  keywords: [
    "escola",
    "escola municipal",
    "ensino fundamental",
    "ensino infantil",
    "Ariquemes",
    "Rondônia",
    "Roberto Turbay",
    "matrícula escolar",
    "educação infantil",
    "escola pública",
  ],
  authors: [{ name: "E.M.E.I.E.F. Roberto Turbay" }],
  creator: "E.M.E.I.E.F. Roberto Turbay",
  publisher: "Prefeitura Municipal de Ariquemes",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://escolaRobertoTurbay.edu.br",
    siteName: "E.M.E.I.E.F. Roberto Turbay",
    title: "E.M.E.I.E.F. Roberto Turbay | Escola Municipal de Ariquemes - RO",
    description:
      "Escola Municipal de Ensino Infantil e Fundamental Roberto Turbay. Educação de qualidade para crianças do 1º ao 6º ano em Ariquemes, Rondônia.",
    images: [
      {
        url: "/images/hero-kids.png",
        width: 1200,
        height: 630,
        alt: "Crianças felizes na Escola Roberto Turbay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E.M.E.I.E.F. Roberto Turbay | Escola Municipal de Ariquemes",
    description:
      "Educação de qualidade para crianças do 1º ao 6º ano em Ariquemes, Rondônia.",
    images: ["/images/hero-kids.png"],
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
  alternates: {
    canonical: "https://escolaRobertoTurbay.edu.br",
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${quicksand.variable}`}>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "E.M.E.I.E.F. Roberto Turbay",
              alternateName: "Escola Roberto Turbay",
              url: "https://escolaRobertoTurbay.edu.br",
              logo: "https://escolaRobertoTurbay.edu.br/images/hero-kids.png",
              description:
                "Escola Municipal de Ensino Infantil e Fundamental em Ariquemes, Rondônia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua México, 932 - Setor 10",
                addressLocality: "Ariquemes",
                addressRegion: "RO",
                postalCode: "76876-078",
                addressCountry: "BR",
              },
              telephone: "+55-69-3535-3891",
              email: "turbayturbay@hotmail.com",
              sameAs: ["https://instagram.com/escolarobertoturbay"],
              areaServed: {
                "@type": "City",
                name: "Ariquemes",
              },
              educationalCredentialAwarded: "Ensino Fundamental",
              isAccessibleForFree: true,
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-yellow-400 selection:text-blue-900 antialiased">
        {/* Skip Link para acessibilidade */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>

        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/556935353891"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Entrar em contato pelo WhatsApp"
        >
          <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40" />
          <span className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform group-hover:scale-110 group-hover:-translate-y-2 flex items-center gap-3 pr-6">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="flex flex-col items-start">
              <span className="text-xs font-bold opacity-90">Fale Conosco</span>
              <span className="font-bold text-lg leading-none">WhatsApp</span>
            </span>
          </span>
        </a>
      </body>
    </html>
  );
}
