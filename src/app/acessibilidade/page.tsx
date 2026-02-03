import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Eye, Keyboard, Volume2, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description:
    "Informações sobre os recursos de acessibilidade do site da E.M.E.I.E.F. Roberto Turbay. Nosso compromisso com a inclusão digital.",
  alternates: {
    canonical: "/acessibilidade",
  },
};

export default function AcessibilidadePage() {
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
            Acessibilidade
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Nosso compromisso com a inclusão digital.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto space-y-12">
        <section aria-labelledby="compromisso-title">
          <h2
            id="compromisso-title"
            className="text-2xl md:text-3xl text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nosso Compromisso
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            A E.M.E.I.E.F. Roberto Turbay está comprometida em tornar seu site
            acessível a todas as pessoas, incluindo aquelas com deficiências.
            Trabalhamos continuamente para melhorar a experiência de navegação
            para todos os usuários.
          </p>
        </section>

        <section aria-labelledby="recursos-title">
          <h2
            id="recursos-title"
            className="text-2xl md:text-3xl text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recursos de Acessibilidade
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Keyboard className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Navegação por Teclado
                </h3>
              </div>
              <p className="text-gray-600">
                Todo o site pode ser navegado usando apenas o teclado. Use a
                tecla Tab para navegar entre elementos e Enter para ativar
                links e botões.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Eye className="h-6 w-6 text-yellow-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Alto Contraste
                </h3>
              </div>
              <p className="text-gray-600">
                Utilizamos cores com alto contraste para garantir boa
                legibilidade. O site também respeita as preferências de
                contraste do seu sistema.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Volume2 className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Leitores de Tela
                </h3>
              </div>
              <p className="text-gray-600">
                O site é compatível com leitores de tela como NVDA, JAWS e
                VoiceOver. Todas as imagens possuem textos alternativos
                descritivos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Monitor className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Design Responsivo
                </h3>
              </div>
              <p className="text-gray-600">
                O site se adapta a diferentes tamanhos de tela e pode ser
                ampliado até 200% sem perda de funcionalidade.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="atalhos-title">
          <h2
            id="atalhos-title"
            className="text-2xl md:text-3xl text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Atalhos de Teclado
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <dl className="space-y-4">
              <div className="flex items-center gap-4">
                <dt className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                  Tab
                </dt>
                <dd className="text-gray-600">Navegar para o próximo elemento</dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                  Shift + Tab
                </dt>
                <dd className="text-gray-600">
                  Navegar para o elemento anterior
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                  Enter
                </dt>
                <dd className="text-gray-600">Ativar link ou botão</dd>
              </div>
              <div className="flex items-center gap-4">
                <dt className="bg-gray-100 px-3 py-1 rounded font-mono text-sm">
                  Esc
                </dt>
                <dd className="text-gray-600">Fechar menus e diálogos</dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-labelledby="contato-title">
          <h2
            id="contato-title"
            className="text-2xl md:text-3xl text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Feedback e Suporte
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Se você encontrar alguma barreira de acessibilidade em nosso site ou
            tiver sugestões de melhorias, entre em contato conosco:
          </p>
          <ul className="space-y-2 text-lg text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:turbayturbay@hotmail.com"
                className="text-blue-600 hover:underline"
              >
                turbayturbay@hotmail.com
              </a>
            </li>
            <li>
              <strong>Telefone:</strong>{" "}
              <a href="tel:+556935353891" className="text-blue-600 hover:underline">
                (69) 3535-3891
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="normas-title">
          <h2
            id="normas-title"
            className="text-2xl md:text-3xl text-blue-900 mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conformidade
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Este site foi desenvolvido seguindo as diretrizes de acessibilidade
            WCAG 2.1 nível AA e as recomendações do e-MAG (Modelo de
            Acessibilidade em Governo Eletrônico).
          </p>
        </section>
      </div>
    </article>
  );
}
