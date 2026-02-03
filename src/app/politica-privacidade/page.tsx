import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade da E.M.E.I.E.F. Roberto Turbay. Saiba como coletamos, usamos e protegemos suas informações.",
  alternates: {
    canonical: "/politica-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
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
            Política de Privacidade
          </h1>
          <p className="text-gray-500 font-medium text-lg">
            Última atualização: Dezembro de 2024
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg space-y-8">
          <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <Shield className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
            <p className="text-lg text-gray-600">
              A E.M.E.I.E.F. Roberto Turbay está comprometida em proteger a
              privacidade dos visitantes do nosso site.
            </p>
          </div>

          <section aria-labelledby="coleta-title">
            <h2
              id="coleta-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              1. Informações que Coletamos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Coletamos informações que você nos fornece voluntariamente, como
              nome, email e telefone quando entra em contato conosco através dos
              formulários do site ou WhatsApp.
            </p>
          </section>

          <section aria-labelledby="uso-title">
            <h2
              id="uso-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              2. Como Usamos suas Informações
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Responder às suas dúvidas e solicitações</li>
              <li>Enviar informações sobre matrículas e eventos escolares</li>
              <li>Melhorar nossos serviços e comunicação</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section aria-labelledby="compartilhamento-title">
            <h2
              id="compartilhamento-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              3. Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais
              com terceiros, exceto quando necessário para cumprir obrigações
              legais ou quando autorizado por você.
            </p>
          </section>

          <section aria-labelledby="cookies-title">
            <h2
              id="cookies-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              4. Cookies
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso site pode utilizar cookies para melhorar sua experiência de
              navegação. Você pode configurar seu navegador para recusar cookies,
              mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section aria-labelledby="seguranca-title">
            <h2
              id="seguranca-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              5. Segurança
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança para proteger suas informações
              contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section aria-labelledby="direitos-title">
            <h2
              id="direitos-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              6. Seus Direitos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
              direito a:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento</li>
            </ul>
          </section>

          <section aria-labelledby="contato-title">
            <h2
              id="contato-title"
              className="text-xl md:text-2xl text-blue-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              7. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta
              política, entre em contato:
            </p>
            <address className="not-italic mt-4 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:turbayturbay@hotmail.com"
                  className="text-blue-600 hover:underline"
                >
                  turbayturbay@hotmail.com
                </a>
              </p>
              <p>
                <strong>Telefone:</strong>{" "}
                <a href="tel:+556935353891" className="text-blue-600 hover:underline">
                  (69) 3535-3891
                </a>
              </p>
              <p>
                <strong>Endereço:</strong> Rua México, 932 - Setor 10, Ariquemes -
                RO, 76876-078
              </p>
            </address>
          </section>
        </div>
      </div>
    </article>
  );
}
