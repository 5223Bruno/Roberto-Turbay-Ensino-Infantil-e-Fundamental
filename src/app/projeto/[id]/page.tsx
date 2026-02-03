"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Users, Target, MapPin, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dados fictícios dos projetos
const projetos = {
  "1": {
    id: "1",
    titulo: "O Sol Feliz",
    autor: "Ana, 1º Ano",
    tipo: "Desenho",
    descricao: "Um projeto criativo que explora as cores quentes e a alegria através da arte infantil.",
    como: "As crianças utilizaram lápis de cor, giz de cera e tinta acrílica para criar suas obras de arte. O projeto começou com uma roda de conversa sobre as emoções e como expressá-las através do desenho.",
    onde: "Sala de aula 1º Ano A, com apoio da sala de artes",
    porque: "Desenvolvido para estimular a criatividade, expressão emocional e coordenação motora fina das crianças.",
    finalidades: [
      "Estimular a criatividade e imaginação",
      "Desenvolver habilidades artísticas",
      "Expressar emoções através da arte",
      "Melhorar coordenação motora"
    ],
    participantes: 28,
    duracao: "4 semanas",
    color: "from-yellow-100 to-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200"
  },
  "2": {
    id: "2",
    titulo: "Viagem ao Espaço",
    autor: "Pedro, 3º Ano",
    tipo: "Pintura",
    descricao: "Uma aventura imaginária pelo universo, explorando planetas, estrelas e a vastidão do cosmos.",
    como: "Os alunos pesquisaram sobre o sistema solar, criaram maquetes de planetas e depois pintaram suas interpretações artísticas. Utilizaram técnicas de pintura com aquarela e óleo.",
    onde: "Laboratório de Artes e Espaço Maker da escola",
    porque: "Integrar conhecimentos de ciências com expressão artística, despertando curiosidade sobre o universo.",
    finalidades: [
      "Explorar conceitos de astronomia",
      "Desenvolver pensamento científico",
      "Expressar conhecimento através da arte",
      "Trabalhar em equipe"
    ],
    participantes: 32,
    duracao: "6 semanas",
    color: "from-blue-100 to-indigo-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200"
  },
  "3": {
    id: "3",
    titulo: "Minha Casa Azul",
    autor: "Júlia, 2º Ano",
    tipo: "Aquarela",
    descricao: "Um projeto sobre arquitetura e design, onde as crianças reimaginam suas casas com cores vibrantes.",
    como: "Começou com visitas ao bairro para observar diferentes tipos de casas. Depois, os alunos desenharam suas residências ideais e as pintaram com aquarela, explorando diferentes tons de azul.",
    onde: "Sala de aula 2º Ano B e entorno da escola",
    porque: "Desenvolver observação, criatividade e conexão com o ambiente onde vivem.",
    finalidades: [
      "Observar e analisar o ambiente",
      "Explorar técnicas de aquarela",
      "Expressar preferências pessoais",
      "Desenvolver senso estético"
    ],
    participantes: 26,
    duracao: "5 semanas",
    color: "from-cyan-100 to-blue-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200"
  },
  "4": {
    id: "4",
    titulo: "Vulcão em Erupção",
    autor: "Lucas, 4º Ano",
    tipo: "Ciências",
    descricao: "Um projeto interdisciplinar que combina ciências, engenharia e criatividade para entender vulcões.",
    como: "Os alunos construíram maquetes de vulcões com materiais reciclados, estudaram a geologia e realizaram experimentos com reações químicas seguras para simular erupções.",
    onde: "Laboratório de Ciências e sala de aula 4º Ano",
    porque: "Tornar o aprendizado de ciências mais prático e divertido, estimulando o pensamento crítico e científico.",
    finalidades: [
      "Entender processos geológicos",
      "Realizar experimentos científicos",
      "Trabalhar com materiais reciclados",
      "Desenvolver pensamento crítico"
    ],
    participantes: 30,
    duracao: "7 semanas",
    color: "from-red-100 to-orange-50",
    textColor: "text-red-700",
    borderColor: "border-red-200"
  }
};

// Gerar URLs de imagens fictícias
const gerarFotosProjetoPorId = (id: string) => {
  const fotos = [];
  for (let i = 1; i <= 15; i++) {
    fotos.push({
      id: i,
      url: `https://images.unsplash.com/photo-${1500000000 + parseInt(id) * 1000 + i}?w=800&h=600&fit=crop&q=80`,
      alt: `Foto ${i} do projeto`
    });
  }
  return fotos;
};

export default function ProjetoDetalhes() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const projeto = projetos[id as keyof typeof projetos];
  const [fotoAtual, setFotoAtual] = useState(0);

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link href="/">
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const fotos = gerarFotosProjetoPorId(id);
  const proximaFoto = () => setFotoAtual((prev) => (prev + 1) % fotos.length);
  const fotoAnterior = () => setFotoAtual((prev) => (prev - 1 + fotos.length) % fotos.length);

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container py-4 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-blue-600">{projeto.titulo}</h1>
        </div>
      </div>

      <main className="container py-12">
        {/* Seção de informações principais */}
        <div className={`bg-gradient-to-br ${projeto.color} rounded-3xl p-8 md:p-12 mb-12 border-2 ${projeto.borderColor}`}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className={`text-4xl font-bold ${projeto.textColor} mb-4`} style={{ fontFamily: "var(--font-display)" }}>
                {projeto.titulo}
              </h2>
              <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                {projeto.descricao}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full ${projeto.color} border ${projeto.borderColor} font-semibold text-sm`}>
                  {projeto.tipo}
                </span>
                <span className={`px-4 py-2 rounded-full ${projeto.color} border ${projeto.borderColor} font-semibold text-sm`}>
                  {projeto.duracao}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="text-sm text-slate-600">Participantes</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">{projeto.participantes}</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span className="text-sm text-slate-600">Localização</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">Escola</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Seção de detalhes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Como foi criado */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Como foi criado?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{projeto.como}</p>
            </CardContent>
          </Card>

          {/* Onde foi desenvolvido */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-500" />
                Onde foi desenvolvido?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{projeto.onde}</p>
            </CardContent>
          </Card>

          {/* Por que foi criado */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-blue-500" />
                Por que foi criado?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">{projeto.porque}</p>
            </CardContent>
          </Card>

          {/* Finalidades */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-green-500" />
                Finalidades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {projeto.finalidades.map((finalidade, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    {finalidade}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Carrossel de fotos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Galeria de Fotos
          </h2>
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-slate-100">
            {/* Foto principal */}
            <div className="relative w-full h-96 md:h-[500px] bg-slate-100 overflow-hidden">
              <Image
                src={fotos[fotoAtual].url}
                alt={fotos[fotoAtual].alt}
                fill
                className="object-cover transition-transform duration-500"
                priority
              />
              
              {/* Overlay com informações */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                <div className="w-full p-6 text-white">
                  <p className="text-sm font-semibold opacity-90">
                    Foto {fotoAtual + 1} de {fotos.length}
                  </p>
                </div>
              </div>

              {/* Botões de navegação */}
              <button
                onClick={fotoAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
              </button>
              <button
                onClick={proximaFoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            {/* Miniaturas */}
            <div className="bg-slate-50 p-4 overflow-x-auto">
              <div className="flex gap-3">
                {fotos.map((foto, idx) => (
                  <button
                    key={foto.id}
                    onClick={() => setFotoAtual(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === fotoAtual
                        ? "border-blue-600 ring-2 ring-blue-300"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                  >
                    <Image
                      src={foto.url}
                      alt={foto.alt}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botão voltar no final */}
        <div className="flex justify-center">
          <Link href="/">
            <Button className="soft-btn bg-blue-600 text-white hover:bg-blue-700 text-lg h-14 px-8">
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </main>
    </article>
  );
}
