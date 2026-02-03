import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-20 pb-10" role="contentinfo">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Sobre a Escola */}
          <section aria-labelledby="footer-about">
            <h2 
              id="footer-about" 
              className="text-3xl text-yellow-400 font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Roberto Turbay
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg">
              Um lugar onde aprender é uma aventura! Dedicados a construir o futuro das nossas crianças com amor e excelência.
            </p>
          </section>

          {/* Contato */}
          <section aria-labelledby="footer-contact">
            <h2 
              id="footer-contact" 
              className="text-2xl text-white font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Fale Conosco
            </h2>
            <address className="not-italic">
              <ul className="space-y-4 text-blue-100 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                  <a 
                    href="tel:+556935353891" 
                    className="hover:text-white transition-colors"
                    aria-label="Telefone: (69) 3535-3891"
                  >
                    (69) 3535-3891
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-400" aria-hidden="true" />
                  <a 
                    href="mailto:turbayturbay@hotmail.com" 
                    className="hover:text-white transition-colors"
                    aria-label="Email: turbayturbay@hotmail.com"
                  >
                    turbayturbay@hotmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                  <span>Rua México, 932 - Setor 10</span>
                </li>
              </ul>
            </address>
          </section>

          {/* Redes Sociais */}
          <section aria-labelledby="footer-social">
            <h2 
              id="footer-social" 
              className="text-2xl text-white font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Redes Sociais
            </h2>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-blue-800 text-white hover:bg-blue-700 hover:scale-110 transition-all border border-blue-700"
                aria-label="Siga-nos no Facebook"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com/escolarobertoturbay" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-blue-800 text-white hover:bg-blue-700 hover:scale-110 transition-all border border-blue-700"
                aria-label="Siga-nos no Instagram"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-sm text-blue-300 font-medium">
          <p>
            © {currentYear} E.M.E.I.E.F. Roberto Turbay. Feito com 💙 e 💛 para nossas crianças.
          </p>
          <nav className="mt-4 flex justify-center gap-6" aria-label="Links do rodapé">
            <Link href="/politica-privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/acessibilidade" className="hover:text-white transition-colors">
              Acessibilidade
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
