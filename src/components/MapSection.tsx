"use client";

import { MapPin, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MapSection() {
  return (
    <section id="localizacao" className="py-24 bg-blue-900 text-white relative overflow-hidden" aria-labelledby="localizacao-title">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "40px 40px" }} aria-hidden="true" />
      
      <div className="container relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
            <div className="p-16 flex flex-col justify-center bg-blue-600 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" aria-hidden="true" />
              
              <div className="relative z-10">
                <h2 id="localizacao-title" className="text-4xl md:text-5xl lg:text-6xl mb-10" style={{ fontFamily: "var(--font-display)" }}>
                  Venha nos<br/>Visitar!
                </h2>
                <address className="not-italic space-y-10 text-xl">
                  <div className="flex items-start gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <MapPin className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 opacity-90 text-yellow-300">Endereço</h3>
                      <p className="opacity-90 leading-relaxed">
                        Rua México, 932 - Setor 10<br/>
                        Ariquemes - RO, 76876-078
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                      <Megaphone className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 opacity-90 text-yellow-300">Contato</h3>
                      <p className="opacity-90 leading-relaxed">
                        <a href="tel:+556935353891" className="hover:text-white transition-colors">(69) 3535-3891</a><br/>
                        <a href="mailto:turbayturbay@hotmail.com" className="hover:text-white transition-colors">turbayturbay@hotmail.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="pt-10">
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=R.+México,+932+-+St.+10,+Ariquemes+-+RO,+76876-078"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-yellow-400 text-blue-900 font-bold h-16 rounded-2xl hover:bg-yellow-300 transition-colors shadow-lg text-lg uppercase tracking-wide">
                        Traçar Rota no Maps
                      </Button>
                    </a>
                  </div>
                </address>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
             <iframe
                  src="https://www.google.com/maps?q=R.+México,+932+-+St.+10,+Ariquemes+-+RO,+76876-078,+Brasil&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Escola Roberto Turbay"
                  aria-label="Mapa mostrando a localização da Escola Roberto Turbay em Ariquemes, Rondônia"
                />


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
