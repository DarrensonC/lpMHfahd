'use client'

import Image from 'next/image'
import { Home, Bed, Maximize, Waves, UtensilsCrossed, Shield } from 'lucide-react'

export default function Hero() {
  const handleWhatsApp = () => {
    const phoneNumber = '554198713444'
    const message = 'Olá! Tenho interesse na casa de alto padrão no Condomínio Valencia.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero.png"
            alt="Casa de Alto Padrão - Condomínio Valencia"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay escuro para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 min-h-screen md:h-full flex flex-col">
        {/* Header com Logo */}
        <header className="container-custom py-4 md:py-6">
          <div className="flex justify-between items-center">
            <Image
              src="/images/logo 540 x 180.png"
              alt="M.H.FAHD Imobiliária"
              width={540}
              height={180}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center py-12 md:py-0">
          <div className="container-custom">
            <div className="max-w-4xl fade-in">
              {/* Badge de Destaque */}
              <div className="inline-flex items-center gap-2 bg-accent-gold text-primary px-3 md:px-4 py-2 rounded-full mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold">✨ CONSTRUÍDA EM 2023 - PRONTA PARA MORAR</span>
              </div>
              
              {/* Título */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Casa de Alto Padrão no Condomínio Valencia
              </h1>
              <p className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                Campo Comprido, Curitiba
              </p>

              {/* Subtítulo */}
              <p className="text-lg md:text-xl lg:text-2xl text-silver-light mb-8 md:mb-10 leading-relaxed">
                Exclusividade, segurança e design contemporâneo em uma das regiões mais valorizadas da cidade.
              </p>

              {/* Destaques em Cápsulas */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-10">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <Bed className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">4 suítes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <Maximize className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">707 m²</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">350 m² útil</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <Waves className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">Piscina</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <UtensilsCrossed className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">Gourmet</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4 text-center hover:bg-white/20 transition-all">
                  <Shield className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />
                  <p className="text-white font-semibold text-xs md:text-sm">Segurança</p>
                </div>
              </div>

              {/* Botão de CTA */}
              <div className="flex flex-col gap-4 mb-8">
                <button
                  onClick={scrollToForm}
                  className="w-full md:w-auto btn-primary text-base md:text-lg group relative overflow-hidden py-4 md:py-4 px-8"
                >
                  <span className="relative z-10">🏠 Agendar Visita Presencial</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
              </div>
              
              {/* Trust Signal Sutil */}
              <p className="text-silver-light text-xs md:text-sm flex items-center justify-center md:justify-start gap-2">
                <span className="text-green-400">●</span> Atendimento disponível • Resposta em minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

