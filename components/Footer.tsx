import Image from 'next/image'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4">
          {/* Logo e Descrição */}
          <div>
            <Image
              src="/images/logo 480 x 150.png"
              alt="M.H.FAHD Imobiliária"
              width={480}
              height={150}
              className="mb-4 md:mb-6 h-10 md:h-12 w-auto"
            />
            <p className="text-silver-light leading-relaxed text-sm md:text-base">
              Transformando sonhos em realidade desde 2009. Sua imobiliária de confiança em Curitiba.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Links Rápidos</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contato</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+554198713444" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">
                    (41) 98713-4444
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                <div>
                  <a href="mailto:atendimento@mhfahdimoveis.com.br" className="text-silver-light hover:text-white transition-colors text-sm md:text-base break-all active:text-accent-gold">
                    atendimento@mhfahdimoveis.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                <div>
                  <span className="text-silver-light text-sm md:text-base">
                    Rua Francisco Ader, 106 - Escritório<br />
                    Novo Mundo, Curitiba/PR
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Siga-nos no Instagram</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/m.h.fahd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all active:bg-white/30"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
            <p className="text-silver-light mt-4 md:mt-6 text-sm">
              @m.h.fahd
            </p>
            <p className="text-silver-light mt-2 text-xs md:text-sm">
              Acompanhe nossos lançamentos exclusivos
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 md:py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-silver-light text-xs md:text-sm text-center md:text-left">
              © {currentYear} M.H.FAHD Imobiliária. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-silver-light hover:text-white transition-colors active:text-accent-gold">
                Política de Privacidade
              </a>
              <a href="#" className="text-silver-light hover:text-white transition-colors active:text-accent-gold">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

