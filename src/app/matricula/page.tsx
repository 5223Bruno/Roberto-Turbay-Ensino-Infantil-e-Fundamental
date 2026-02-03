import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Matrícula Escolar 2026",
  description:
    "Informações completas sobre matrícula na E.M.E.I.E.F. Roberto Turbay. Documentos necessários, prazos de renovação e novas matrículas para o ano letivo de 2026 em Ariquemes, RO.",
  keywords: [
    "matrícula escolar",
    "matrícula 2026",
    "documentos matrícula",
    "escola pública",
    "Ariquemes",
    "ensino fundamental",
    "ensino infantil",
  ],
  alternates: {
    canonical: "/matricula",
  },
  openGraph: {
    title: "Matrícula Escolar 2026 | E.M.E.I.E.F. Roberto Turbay",
    description:
      "Garanta a vaga do seu filho na Escola Roberto Turbay. Confira documentos necessários e prazos.",
    url: "/matricula",
    type: "website",
  },
};

const documents = [
  "Certidão de Nascimento (cópia e original)",
  "Comprovante de residência atualizado",
  "Cartão de Vacinação em dia",
  "2 fotos 3x4 recentes e coloridas",
  "Histórico Escolar ou Transferência",
  "RG e CPF dos pais ou responsáveis",
  "Cartão do SUS",
  "Comprovante de tipagem sanguínea",
];

export default function MatriculaPage() {
  return (
    <article className="container py-12">
      <header className="flex items-center gap-4 mb-12">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-green-50 text-green-600"
            aria-label="Voltar para a página inicial"
          >
            <ArrowLeft className="h-8 w-8" aria-hidden="true" />
          </Button>
        </Link>
        <div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-gray-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Matrícula
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Tudo o que você precisa para garantir a vaga do seu filho.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section aria-labelledby="documentos-title">
          <Card className="soft-card border-none bg-white">
            <CardHeader className="border-b border-gray-100 pb-6">
              <CardTitle
                id="documentos-title"
                className="text-2xl text-blue-600 flex items-center gap-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <FileText className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                Documentação Necessária
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4" aria-label="Lista de documentos necessários">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <CheckCircle
                      className="h-6 w-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-lg text-gray-600 group-hover:text-gray-900 transition-colors">
                      {doc}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <div className="space-y-8">
          <section
            className="bg-yellow-50 rounded-[2rem] p-8 border-2 border-yellow-100 relative overflow-hidden"
            aria-labelledby="prazos-title"
          >
            <div
              className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20"
              aria-hidden="true"
            />
            <h2
              id="prazos-title"
              className="text-2xl md:text-3xl text-yellow-800 mb-6 relative z-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prazos Importantes
            </h2>
            <dl className="space-y-4 font-medium text-lg text-yellow-900 relative z-10">
              <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm">
                <dt className="block text-sm font-bold uppercase tracking-wider opacity-60 mb-1">
                  Renovação
                </dt>
                <dd>01 a 15 de Dezembro</dd>
              </div>
              <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm">
                <dt className="block text-sm font-bold uppercase tracking-wider opacity-60 mb-1">
                  Novas Matrículas
                </dt>
                <dd>05 a 20 de Janeiro</dd>
              </div>
              <div className="bg-white/60 p-4 rounded-2xl backdrop-blur-sm">
                <dt className="block text-sm font-bold uppercase tracking-wider opacity-60 mb-1">
                  Transferências
                </dt>
                <dd>Durante todo o ano letivo</dd>
              </div>
            </dl>
          </section>

          <section
            className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-200"
            aria-labelledby="duvidas-title"
          >
            <h2
              id="duvidas-title"
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Nossa secretaria está pronta para te ajudar em cada etapa do
              processo.
            </p>
            <a
              href="https://wa.me/556935353891?text=Olá! Gostaria de informações sobre matrícula."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-white text-blue-600 font-bold h-14 rounded-2xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Falar no WhatsApp
              </Button>
            </a>
          </section>
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quais documentos são necessários para matrícula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Os documentos necessários são: Certidão de Nascimento (cópia e original), Comprovante de residência atualizado, Cartão de Vacinação em dia, 2 fotos 3x4 recentes e coloridas, Histórico Escolar ou Transferência, RG e CPF dos pais ou responsáveis, Cartão do SUS e Comprovante de tipagem sanguínea.",
                },
              },
              {
                "@type": "Question",
                name: "Qual o prazo para renovação de matrícula?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O período de renovação de matrícula é de 01 a 15 de Dezembro.",
                },
              },
              {
                "@type": "Question",
                name: "Qual o prazo para novas matrículas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O período para novas matrículas é de 05 a 20 de Janeiro.",
                },
              },
              {
                "@type": "Question",
                name: "É possível fazer transferência durante o ano letivo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, transferências são aceitas durante todo o ano letivo, sujeitas à disponibilidade de vagas.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
