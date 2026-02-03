import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça a equipe de profissionais da E.M.E.I.E.F. Roberto Turbay. Diretores, coordenadores e professores dedicados à educação de qualidade em Ariquemes, RO.",
  keywords: [
    "equipe escolar",
    "professores",
    "diretores",
    "coordenadores",
    "escola Roberto Turbay",
    "Ariquemes",
  ],
  alternates: {
    canonical: "/funcionarios",
  },
  openGraph: {
    title: "Nossa Equipe | E.M.E.I.E.F. Roberto Turbay",
    description:
      "Conheça os profissionais dedicados à educação das nossas crianças.",
    url: "/funcionarios",
    type: "website",
  },
};

const staff = [
  {
    name: "Franciele Lerois",
    role: "Diretora",
    image: "/images/icon-teacher-soft.png",
    color: "bg-pink-50 text-pink-600",
    description: "Responsável pela gestão geral da escola",
  },
  {
    name: "Celi Selma",
    role: "Vice-Diretora",
    image: "/images/icon-teacher-soft.png",
    color: "bg-purple-50 text-purple-600",
    description: "Auxilia na administração escolar",
  },
  {
    name: "Maria Silva",
    role: "Coord. Pedagógica",
    image: "/images/icon-teacher-soft.png",
    color: "bg-yellow-50 text-yellow-600",
    description: "Coordena as atividades pedagógicas",
  },
  {
    name: "João Santos",
    role: "Secretário Escolar",
    image: "/images/icon-teacher-soft.png",
    color: "bg-blue-50 text-blue-600",
    description: "Responsável pela secretaria",
  },
  {
    name: "Ana Oliveira",
    role: "Prof. Matemática",
    image: "/images/icon-teacher-soft.png",
    color: "bg-green-50 text-green-600",
    description: "Ensina matemática com amor",
  },
  {
    name: "Carlos Souza",
    role: "Prof. História",
    image: "/images/icon-teacher-soft.png",
    color: "bg-orange-50 text-orange-600",
    description: "Especialista em história",
  },
];

export default function FuncionariosPage() {
  return (
    <article className="container py-12">
      <header className="flex items-center gap-4 mb-12">
        <Link href="/">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-pink-50 text-pink-600"
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
            Nossa Equipe
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Conheça quem cuida com carinho do aprendizado do seu filho.
          </p>
        </div>
      </header>

      <section aria-labelledby="equipe-title">
        <h2 id="equipe-title" className="sr-only">
          Membros da Equipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((person, idx) => (
            <Card
              key={idx}
              className="soft-card border-none overflow-hidden group hover:-translate-y-2"
            >
              <div
                className={`h-48 ${person.color} bg-opacity-30 flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
                  aria-hidden="true"
                />
                <Image
                  src={person.image}
                  alt=""
                  width={128}
                  height={128}
                  className="h-32 w-32 object-contain relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  <Heart className="h-5 w-5 text-red-400 fill-current" />
                </div>
              </div>
              <CardContent className="p-6 text-center relative">
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm text-xs font-bold uppercase tracking-wider text-gray-400 border border-gray-100"
                  aria-hidden="true"
                >
                  Educação
                </div>
                <h3
                  className="text-xl md:text-2xl text-gray-800 mt-4 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {person.name}
                </h3>
                <p
                  className={`font-bold text-sm uppercase tracking-widest mb-2 px-3 py-1 rounded-lg inline-block ${person.color} bg-opacity-20`}
                >
                  {person.role}
                </p>
                <p className="text-gray-500 text-sm mb-6">{person.description}</p>
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-2 border-gray-100 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  aria-label={`Enviar mensagem para ${person.name}`}
                >
                  <Mail className="h-4 w-4 mr-2" aria-hidden="true" /> Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Structured Data for Organization Staff */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "E.M.E.I.E.F. Roberto Turbay",
            employee: staff.map((person) => ({
              "@type": "Person",
              name: person.name,
              jobTitle: person.role,
              worksFor: {
                "@type": "EducationalOrganization",
                name: "E.M.E.I.E.F. Roberto Turbay",
              },
            })),
          }),
        }}
      />
    </article>
  );
}
