"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock, Star, Heart, Sun, BookOpen, Monitor, Utensils, Instagram, X, ChevronLeft, ChevronRight, Users, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapSection } from "@/components/MapSection";
import { ProjectModal } from "@/components/ProjectModal";
import { LocationGallery } from "@/components/LocationGallery";
import { projectsData } from "@/data/projects";



const notices = [
  {
    id: 1,
    title: "Matrículas 2026",
    date: "ATUALIZADO DIA 04 Jan",
    category: "Secretaria",
    color: "bg-blue-100 text-blue-800",
    content: "O período de matrículas para o ano letivo de 2026 inda esta de pé e irão até o dia 23.",
  },
  {
    id: 2,
    title: "Volta às aulas",
    date: " ATUALIZADO DIA 04 Jan",
    category: "Geral",
    color: "bg-yellow-100 text-yellow-800",
    content: "Informamos que as aulas retornarão no dia 05 'quinta-feira'e desejamos um excelente retorno a todos os nossos alunos 📚✨ .",
  },
  {
    id: 3,
    title: "Apresentações",
    date: "ATUALIZADO DIA 04 Jan",
    category: "Eventos",
    color: "bg-green-100 text-green-800",
    content: "....",
  },
];

const events = [
  {
    id: 1,
    day: "05",
    month: "JAN",
    title: "Volta às Aulas",
    time: "07:15",
    location: "Pátio",
    icon: Sun,
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    id: 2,
    day: "Data",
    month: "MES",
    title: "FERIADOS",
    time: "14:00",
    location: "ERRO",
    icon: Star,
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    id: 3,
    day: "Data",
    month: "MES",
    title: "FERIADOS",
    time: "08:00",
    location: "ERRO",
    icon: Heart,
    color: "bg-pink-50 border-pink-200 text-pink-700",
  },
];

const galleryItems = projectsData.map(p => ({ img: p.img, title: p.title, author: p.author, type: p.type, id: p.id }));

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  const photos = selectedProject ? Array.from({ length: 15 }, (_, i) => `https://images.unsplash.com/photo-1500001001?w=800&h=600&fit=crop&q=80&t=${i}`) : [];
  
  const nextPhoto = () => {
    if (photos.length > 0) {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };
  
  const prevPhoto = () => {
    if (photos.length > 0) {
      setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };
  
  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };
  
  return (
    <article className="flex flex-col gap-0 overflow-x-hidden">
      {/* Hero Section */}
      <section 
        className="section-blue min-h-[700px] flex items-center relative"
        aria-labelledby="hero-title"
      >
        <div className="container relative z-10 grid md:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-blue-900 font-bold text-sm uppercase tracking-wider shadow-lg animate-bounce">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" /> Matrículas Abertas 2026
            </div>
            <h1 
              id="hero-title"
              className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-md"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aprender é uma{" "}
              <span className="text-yellow-400 relative inline-block">
                Aventura
                <svg className="absolute w-full h-4 bottom-2 left-0 text-white -z-10 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              Uma escola acolhedora e divertida, onde cada criança do 1º ao 6º ano descobre o mundo brincando.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-4">
              <Link href="/matricula">
                <Button className="soft-btn bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg h-16 px-10 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 w-full sm:w-auto">
                  Quero Matricular
                </Button>
              </Link>
              <Link href="#tour">
                <Button variant="outline" className="soft-btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg h-16 px-10 w-full sm:w-auto">
                  Conheça a Escola
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <div className="w-full max-w-md mx-auto">
                <Image
                  src="/images/logo-turbay-original.png"
                  alt="Logo da Escola Roberto Turbay - Duas crianças celebrando"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-yellow-400 rounded-full opacity-80 blur-2xl animate-pulse" aria-hidden="true" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-400 rounded-full opacity-50 blur-2xl" aria-hidden="true" />
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[url('/images/wave-divider.png')] bg-cover bg-bottom opacity-100 brightness-0 invert" aria-hidden="true" />
      </section>

      {/* Quick Access Icons */}
      <section className="py-16 bg-yellow-400 relative z-20 -mt-2" aria-labelledby="quick-access-title">
        <h2 id="quick-access-title" className="sr-only">Acesso Rápido</h2>
        <div className="container">
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-8" aria-label="Acesso rápido às seções">
            <a href="/pdfs/calendario-escolar.pdf" target="_blank" rel="noopener noreferrer" className="soft-card p-8 flex flex-col items-center text-center gap-6 cursor-pointer group hover:bg-blue-50">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <Image src="/images/icon-calendar-soft.png" alt="" width={56} height={56} className="object-contain" aria-hidden="true" />
              </div>
              <span className="font-bold text-blue-900 text-xl" style={{ fontFamily: "var(--font-display)" }}>Calendário escolar</span>
            </a>
            <Link href="/matricula" className="soft-card p-8 flex flex-col items-center text-center gap-6 cursor-pointer group hover:bg-blue-50">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <Image src="/images/icon-backpack-soft.png" alt="" width={56} height={56} className="object-contain" aria-hidden="true" />
              </div>
              <span className="font-bold text-blue-900 text-xl" style={{ fontFamily: "var(--font-display)" }}>Documentos para Matrícula</span>
            </Link>
            <Link href="/funcionarios" className="soft-card p-8 flex flex-col items-center text-center gap-6 cursor-pointer group hover:bg-blue-50">
              <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <Image src="/images/icon-teacher-soft.png" alt="" width={56} height={56} className="object-contain" aria-hidden="true" />
              </div>
              <span className="font-bold text-blue-900 text-xl" style={{ fontFamily: "var(--font-display)" }}>Nossos profissionais</span>
            </Link>
            <a href="#galeria" className="soft-card p-8 flex flex-col items-center text-center gap-6 cursor-pointer group hover:bg-blue-50">
              <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                <Star className="w-12 h-12 text-yellow-600 fill-current" aria-hidden="true" />
              </div>
              <span className="font-bold text-blue-900 text-xl" style={{ fontFamily: "var(--font-display)" }}>Nossos Projetos</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Comunicados Section */}
      <section id="comunicados" className="py-24 bg-blue-600 relative overflow-hidden" aria-labelledby="comunicados-title">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} aria-hidden="true" />
        <div className="container relative z-10">
          <header className="text-center mb-16">
            <span className="inline-block py-2 px-6 rounded-full bg-blue-500 text-white font-bold uppercase tracking-wider mb-4 shadow-sm">
              Fique por Dentro
            </span>
            <h2 id="comunicados-title" className="text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Últimos <span className="text-yellow-400">Comunicados</span> 📢
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notices.map((notice, index) => (
              <Card 
                key={notice.id} 
                className={`group hover:scale-105 transition-all duration-300 border-none shadow-xl overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? "bg-yellow-400" : "bg-blue-500"
                }`}
              >
                <CardHeader className="pb-4 border-b border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${
                      notice.category === "Secretaria" ? "bg-red-500 text-white" : "bg-white/20 text-white"
                    }`}>
                      {notice.category}
                    </span>
                    <time className="flex items-center text-white/80 text-sm font-bold" dateTime="2024-12-28">
                      <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                      {notice.date}
                    </time>
                  </div>
                  <CardTitle className="text-2xl text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                    {notice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-white/90 text-lg mb-6 leading-relaxed font-medium">
                    {notice.content}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-bold text-white hover:text-white/80 flex items-center gap-2 group-hover:gap-3 transition-all hover:bg-transparent">
                     <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-24 bg-yellow-400 relative overflow-hidden" aria-labelledby="galeria-title">
        <div className="container relative z-10">
          <header className="text-center mb-16">
            <span className="inline-block py-2 px-6 rounded-full bg-white text-yellow-600 font-bold uppercase tracking-wider mb-4 shadow-md">
              Arte & Criatividade
            </span>
            <h2 id="galeria-title" className="text-4xl md:text-5xl lg:text-6xl text-blue-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Pequenos Grandes <span className="text-white drop-shadow-md">Talentos</span> 🎨
            </h2>
            <p className="text-xl text-blue-900/80 max-w-2xl mx-auto">
              Aqui a imaginação não tem limites! Confira nossos projetos incríveis criados pelos nossos alunos e professores.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryItems.map((item, index) => (
              <article key={index} className="group relative bg-white p-4 pb-16 rounded-3xl shadow-xl transform hover:-translate-y-2 hover:rotate-1 transition-all duration-300 cursor-pointer" onClick={() => { setSelectedProject(projectsData[index]); setCurrentPhotoIndex(0); }}>
                  <div className="aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-100 border-4 border-blue-100">
                    <Image
                      src={item.img}
                      alt={`Trabalho artístico: ${item.title} por ${item.author}`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl text-blue-900 font-bold" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm font-bold text-blue-500">{item.author}</span>
                      <span className="text-xs font-bold uppercase bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg">{item.type}</span>
                    </div>
                  </div>
                  {/* Pin effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-md border-2 border-white z-20" aria-hidden="true" />
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="soft-btn bg-blue-600 text-white hover:bg-blue-700 shadow-blue-900/20">
              Nossos alunos, são grandes talentos
            </Button>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-2xl" aria-hidden="true" />
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-24 bg-white relative overflow-hidden" aria-labelledby="eventos-title">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <header className="md:w-1/3 text-center md:text-left">
              <div className="inline-block p-6 bg-yellow-100 rounded-[2rem] mb-8 rotate-3 shadow-lg">
                <Calendar className="w-16 h-16 text-yellow-600" aria-hidden="true" />
              </div>
              <h2 id="eventos-title" className="text-4xl md:text-5xl lg:text-6xl text-blue-900 mb-8 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Agenda da<br/><span className="text-yellow-500">Diversão</span>
              </h2>
              <p className="text-xl text-gray-500 mb-10">
                Fique por dentro de todas as atividades, festas e eventos pedagógicos da nossa escola.
              </p>
              <Link href="/calendario">
                <Button className="soft-btn bg-blue-600 text-white hover:bg-blue-700 w-full md:w-auto shadow-blue-200 shadow-xl">
                  Ver Calendário Completo
                </Button>
              </Link>
            </header>

            <div className="md:w-2/3 w-full space-y-6">
              {events.map((event) => (
                <article 
                  key={event.id} 
                  className={`group flex items-center gap-8 p-8 rounded-[2.5rem] border-2 transition-all hover:scale-[1.02] cursor-pointer bg-white shadow-lg hover:shadow-xl ${event.color}`}
                >
                  <time className="flex flex-col items-center justify-center min-w-[100px] text-center" dateTime={`2025-${event.month === "FEV" ? "02" : "03"}-${event.day}`}>
                    <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-display)" }}>{event.day}</span>
                    <span className="text-sm font-bold uppercase tracking-wider opacity-70">{event.month}</span>
                  </time>
                  <div className="flex-1 border-l-2 border-current/20 pl-8">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{event.title}</h3>
                    <div className="flex gap-6 text-base font-medium opacity-80">
                      <span className="flex items-center"><Clock className="h-5 w-5 mr-2" aria-hidden="true" /> {event.time}</span>
                      <span className="flex items-center"><MapPin className="h-5 w-5 mr-2" aria-hidden="true" /> {event.location}</span>
                    </div>
                  </div>
                  <div className="hidden sm:block p-4 bg-white/50 rounded-full">
                    <event.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Virtual Section */}
      <section id="tour" className="py-24 bg-yellow-400 relative overflow-hidden" aria-labelledby="tour-title">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} aria-hidden="true" />
        <div className="container relative z-10">
          <header className="text-center mb-16">
            <span className="inline-block py-2 px-6 rounded-full bg-white/30 text-blue-900 font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              Conheça Nossa Escola
            </span>
            <h2 id="tour-title" className="text-4xl md:text-5xl lg:text-6xl text-blue-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Tour Virtual <span className="text-white">Divertido</span> 🗺️
            </h2>
            <p className="text-xl text-blue-900/80 max-w-2xl mx-auto font-medium">
              Clique nos locais do mapa para conhecer cada cantinho onde a mágica do aprendizado acontece!
            </p>
          </header>

          <div className="relative bg-blue-500 rounded-[3rem] shadow-2xl p-4 md:p-8 border-8 border-blue-300">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-blue-400 group cursor-pointer">
              <Image
                src="/images/school-map-pt.png"
                alt="Mapa ilustrado da Escola Roberto Turbay mostrando as diferentes áreas: parquinho, biblioteca, laboratório de informática, quadra de esportes e refeitório"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Interactive Hotspots */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group/spot">
                <div className="w-8 h-8 bg-yellow-400 rounded-full animate-ping absolute" aria-hidden="true" />
                <button className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Parquinho">
                  <Star className="w-4 h-4 text-blue-900 fill-current" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Parquinho</span>
                </div>
              </div>

              <div className="absolute top-[38%] left-[18%] group/spot">
                <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping absolute" style={{ animationDelay: "300ms" }} aria-hidden="true" />
                <button onClick={() => setSelectedLocation("Biblioteca")} className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Biblioteca">
                  <BookOpen className="w-4 h-4 text-white" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Biblioteca</span>
                </div>
              </div>
              
              <div className="absolute top-[30%] left-[35%] group/spot">
                <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping absolute" style={{ animationDelay: "400ms" }} aria-hidden="true" />
                <button onClick={() => setSelectedLocation("Salas de Aula")} className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Salas de Aula">
                  <BookOpen className="w-4 h-4 text-white" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Salas de Aula</span>
                </div>
              </div>

              <div className="absolute bottom-[28%] left-[28%] group/spot">
                <div className="w-8 h-8 bg-green-500 rounded-full animate-ping absolute" style={{ animationDelay: "700ms" }} aria-hidden="true" />
                <button onClick={() => setSelectedLocation("Laboratório de Informática")} className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Laboratório de Informática">
                  <Monitor className="w-4 h-4 text-white" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Laboratório de Informática</span>
                </div>
              </div>

              <div className="absolute top-[25%] right-[35%] group/spot">
                <div className="w-8 h-8 bg-orange-500 rounded-full animate-ping absolute" style={{ animationDelay: "500ms" }} aria-hidden="true" />
                <button onClick={() => setSelectedLocation("Quadra de Esportes")} className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Quadra de Esportes">
                  <Sun className="w-4 h-4 text-white" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Quadra de Esportes</span>
                </div>
              </div>

              <div className="absolute top-[45%] right-[18%] group/spot">
                <div className="w-8 h-8 bg-red-500 rounded-full animate-ping absolute" style={{ animationDelay: "200ms" }} aria-hidden="true" />
                <button onClick={() => setSelectedLocation("Refeitório")} className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg relative flex items-center justify-center transform hover:scale-125 transition-transform" aria-label="Refeitório">
                  <Utensils className="w-4 h-4 text-white" aria-hidden="true" />
                </button>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
                  <span className="font-bold text-blue-900">Refeitório</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <p className="text-white/80 font-bold flex items-center gap-2 animate-pulse">
                <MapPin className="w-5 h-5" aria-hidden="true" /> Clique nos pontos para explorar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden" aria-labelledby="instagram-title">
        <div className="container relative z-10">
          <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <span className="inline-block py-2 px-6 rounded-full bg-blue-500 text-white font-bold uppercase tracking-wider mb-4 shadow-sm border border-blue-400">
                Redes Sociais
              </span>
              <h2 id="instagram-title" className="text-3xl md:text-4xl lg:text-5xl text-white" style={{ fontFamily: "var(--font-display)" }}>
                Siga a gente no <span className="text-yellow-400">Instagram</span> 📸
              </h2>
            </div>
            <a 
              href="https://www.instagram.com/escola.robertoturbay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full px-8 py-6 text-lg shadow-lg hover:scale-105 transition-all inline-flex items-center"
            >
              <Instagram className="w-5 h-5 mr-2" aria-hidden="true" /> @escolarobertoturbay
            </a>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <a 
                key={item} 
                href="https://instagram.com/escolarobertoturbay"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg rotate-0 hover:rotate-2 transition-all duration-300"
                aria-label={`Ver post ${item} no Instagram`}
              >
                <Image
                  src={`/images/insta-${item}.png`}
                  alt={`Post do Instagram ${item}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <MapSection />
      
      {/* Modal de Detalhes do Projeto */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      {/* Galeria de Locais */}
      <LocationGallery location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </article>
  );
}
