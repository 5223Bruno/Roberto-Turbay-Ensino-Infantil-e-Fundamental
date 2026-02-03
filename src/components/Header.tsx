"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Calendar, FileText, Users, MapPin, Bell, Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Início", href: "/" },
  { icon: Bell, label: "Comunicados", href: "/#comunicados" },
  { icon: Calendar, label: "Eventos", href: "/#eventos" },
  { icon: MapPin, label: "Localização", href: "/#localizacao" },
];

const quickAccessItems = [
  { icon: Calendar, label: "Calendário", href: "/calendario", color: "bg-blue-100 text-blue-600" },
  { icon: FileText, label: "Matrícula", href: "/matricula", color: "bg-yellow-100 text-yellow-600" },
  { icon: Users, label: "Equipe", href: "/funcionarios", color: "bg-blue-600 text-white" },
];

export function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-blue-600 border-b border-blue-500 shadow-lg"
      role="banner"
    >
      <div className="container flex h-24 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover:bg-blue-500 text-white transition-all"
                aria-label="Abrir menu de navegação"
                aria-expanded={isSidebarOpen}
              >
                <Menu className="h-8 w-8" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-[300px] rounded-r-3xl border-r border-blue-200 bg-white p-0 sm:w-[350px]"
              aria-label="Menu de navegação principal"
            >
              <div className="flex flex-col h-full">
                <div className="p-8 bg-blue-600 rounded-tr-3xl">
                  <h2 className="text-2xl text-white font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                    <BookOpen className="h-6 w-6" aria-hidden="true" /> Menu
                  </h2>
                </div>
                <nav className="flex-1 overflow-y-auto p-6 space-y-8" aria-label="Navegação principal">
                  <div className="space-y-2">
                    <h3 className="text-sm uppercase text-gray-400 font-bold px-4" style={{ fontFamily: "var(--font-display)" }}>
                      Navegação
                    </h3>
                    <ul className="flex flex-col gap-1">
                      {menuItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 text-lg font-medium rounded-2xl transition-all hover:bg-blue-50 hover:text-blue-600 hover:pl-6",
                              pathname === item.href && "bg-blue-100 text-blue-700 font-bold"
                            )}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase text-gray-400 font-bold px-4" style={{ fontFamily: "var(--font-display)" }}>
                      Acesso Rápido
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {quickAccessItems.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <div 
                              className="group flex items-center gap-4 p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer bg-white"
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              <div className={cn("p-3 rounded-xl transition-colors", item.color)}>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                                {item.label}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex flex-col cursor-pointer group">
            <h1 
              className="text-2xl sm:text-3xl leading-none text-white group-hover:text-yellow-300 transition-colors duration-300 drop-shadow-md"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Roberto Turbay
            </h1>
            <span className="text-xs font-bold tracking-wider text-blue-200 group-hover:text-white transition-colors uppercase">
              Ensino Infantil e Fundamental
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal desktop">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="font-bold text-blue-100 hover:text-white transition-colors relative text-lg"
            >
              {item.label}
            </Link>
          ))}
          <Button 
            className="soft-btn bg-yellow-400 text-blue-900 hover:bg-yellow-300 border-2 border-yellow-300"
            aria-label="Acessar área do aluno"
          >
            Área do Aluno
          </Button>
        </nav>
      </div>
    </header>
  );
}
