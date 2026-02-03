import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Calendário Escolar 2026",
  description:
    "Calendário escolar completo da E.M.E.I.E.F. Roberto Turbay para o ano letivo de 2026. Confira todas as datas importantes, feriados, reuniões e eventos pedagógicos.",
  keywords: [
    "calendário escolar",
    "calendário 2026",
    "datas importantes",
    "ano letivo",
    "escola Roberto Turbay",
    "Ariquemes",
  ],
  alternates: {
    canonical: "/calendario",
  },
  openGraph: {
    title: "Calendário Escolar 2026 | E.M.E.I.E.F. Roberto Turbay",
    description:
      "Confira todas as datas importantes do ano letivo de 2026 na Escola Roberto Turbay.",
    url: "/calendario",
    type: "website",
  },
};

const months = [
  {
    name: "Janeiro",
    color: "bg-blue-50 border-blue-100 text-blue-600",
    events: [
      { day: "15", desc: "Reunião Pedagógica" },
      { day: "20", desc: "Início das Aulas" },
    ],
  },
  {
    name: "Fevereiro",
    color: "bg-pink-50 border-pink-100 text-pink-600",
    events: [
      { day: "12", desc: "Carnaval Escolar" },
      { day: "28", desc: "Conselho de Classe" },
    ],
  },
  {
    name: "Março",
    color: "bg-green-50 border-green-100 text-green-600",
    events: [
      { day: "08", desc: "Dia da Mulher" },
      { day: "15", desc: "Dia da Escola" },
    ],
  },
  {
    name: "Abril",
    color: "bg-yellow-50 border-yellow-100 text-yellow-600",
    events: [
      { day: "19", desc: "Páscoa" },
      { day: "21", desc: "Tiradentes" },
    ],
  },
  {
    name: "Maio",
    color: "bg-purple-50 border-purple-100 text-purple-600",
    events: [
      { day: "01", desc: "Dia do Trabalho" },
      { day: "12", desc: "Dia das Mães" },
    ],
  },
  {
    name: "Junho",
    color: "bg-orange-50 border-orange-100 text-orange-600",
    events: [
      { day: "12", desc: "Festa Junina" },
      { day: "24", desc: "São João" },
    ],
  },
  {
    name: "Julho",
    color: "bg-cyan-50 border-cyan-100 text-cyan-600",
    events: [
      { day: "01", desc: "Início das Férias" },
      { day: "31", desc: "Fim das Férias" },
    ],
  },
  {
    name: "Agosto",
    color: "bg-red-50 border-red-100 text-red-600",
    events: [
      { day: "11", desc: "Dia dos Pais" },
      { day: "22", desc: "Folclore" },
    ],
  },
  {
    name: "Setembro",
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    events: [
      { day: "07", desc: "Independência" },
      { day: "21", desc: "Dia da Árvore" },
    ],
  },
  {
    name: "Outubro",
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    events: [
      { day: "12", desc: "Dia das Crianças" },
      { day: "15", desc: "Dia do Professor" },
    ],
  },
  {
    name: "Novembro",
    color: "bg-amber-50 border-amber-100 text-amber-600",
    events: [
      { day: "15", desc: "Proclamação da República" },
      { day: "20", desc: "Consciência Negra" },
    ],
  },
  {
    name: "Dezembro",
    color: "bg-rose-50 border-rose-100 text-rose-600",
    events: [
      { day: "15", desc: "Encerramento Letivo" },
      { day: "20", desc: "Férias de Verão" },
    ],
  },
];

export default function CalendarioPage() {
  return (
    <article className="container py-12">
      <header className="flex items-center gap-4 mb-12">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-blue-50 text-blue-600"
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
            Calendário 2026
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Acompanhe todas as datas importantes do ano letivo.
          </p>
        </div>
      </header>

      <section aria-labelledby="calendar-months">
        <h2 id="calendar-months" className="sr-only">
          Meses do Calendário Escolar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {months.map((month) => (
            <Card
              key={month.name}
              className="soft-card border-none overflow-hidden"
            >
              <CardHeader className={`py-6 ${month.color} bg-opacity-50`}>
                <div className="flex items-center justify-between">
                  <CardTitle
                    className="text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {month.name}
                  </CardTitle>
                  <CalendarIcon className="h-6 w-6 opacity-50" aria-hidden="true" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4" aria-label={`Eventos de ${month.name}`}>
                  {month.events.map((event, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <time
                        className={`text-xl font-bold w-10 h-10 rounded-xl flex items-center justify-center ${month.color} bg-opacity-20`}
                        style={{ fontFamily: "var(--font-display)" }}
                        dateTime={`2026-${String(months.indexOf(month) + 1).padStart(2, "0")}-${event.day}`}
                      >
                        {event.day}
                      </time>
                      <span className="font-bold text-gray-600 group-hover:text-blue-600 transition-colors">
                        {event.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-16 flex justify-center">
        <Button className="soft-btn bg-blue-600 text-white hover:bg-blue-700 text-lg flex items-center gap-3 px-8">
          <Download className="h-6 w-6" aria-hidden="true" /> Baixar PDF Completo
        </Button>
      </div>

      {/* Structured Data for Calendar Events */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Calendário Escolar 2026 - E.M.E.I.E.F. Roberto Turbay",
            description: "Datas importantes do ano letivo de 2026",
            itemListElement: months.flatMap((month, monthIdx) =>
              month.events.map((event, eventIdx) => ({
                "@type": "ListItem",
                position: monthIdx * 2 + eventIdx + 1,
                item: {
                  "@type": "Event",
                  name: event.desc,
                  startDate: `2026-${String(monthIdx + 1).padStart(2, "0")}-${event.day}`,
                  location: {
                    "@type": "Place",
                    name: "E.M.E.I.E.F. Roberto Turbay",
                    address: "Rua México, 932 - Setor 10, Ariquemes - RO",
                  },
                },
              }))
            ),
          }),
        }}
      />
    </article>
  );
}
