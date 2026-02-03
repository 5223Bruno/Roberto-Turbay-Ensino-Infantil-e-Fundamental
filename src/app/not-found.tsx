import { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você está procurando não foi encontrada.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <article className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="container text-center">
        <div className="mb-8">
          <span
            className="text-9xl font-bold text-yellow-400 drop-shadow-lg"
            style={{ fontFamily: "var(--font-display)" }}
            aria-hidden="true"
          >
            404
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ops! Página não encontrada
        </h1>

        <p className="text-xl text-blue-100 mb-10 max-w-lg mx-auto">
          Parece que você se perdeu na aventura! A página que você está
          procurando não existe ou foi movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="soft-btn bg-yellow-400 text-blue-900 hover:bg-yellow-300 flex items-center gap-2">
              <Home className="h-5 w-5" aria-hidden="true" />
              Voltar ao Início
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="soft-btn bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
              Página Anterior
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
