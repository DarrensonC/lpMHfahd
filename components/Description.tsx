'use client'

export default function Description() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Sobre o Imóvel
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none fade-in">
            <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                Apresentamos esta magnífica casa em condomínio, localizada no bairro de Campo Comprido, em Curitiba. Construída em 2023, esta propriedade de 707m² de área total e 350m² de área útil, oferece um estilo de vida sofisticado e privilegiado.
              </p>

              <p>
                Com 4 suítes e 6 banheiros, esta casa proporciona amplo espaço e privacidade para toda a família. As duas salas de estar e jantar, com acabamentos de alto padrão, criam um ambiente acolhedor e elegante.
              </p>

              <p>
                O imóvel, que está mobiliado, possui ainda churrasqueira, área gourmet, piscina, mezanino, closet, hidromassagem e demais comodidades que contribuem para um cotidiano confortável e luxuoso.
              </p>

              <p className="font-semibold text-primary-light">
                Localizada no Condomínio Residencial Valencia, referência em segurança e infraestrutura, esta casa é o equilíbrio perfeito entre privacidade, conforto e acesso rápido às principais regiões da cidade.
              </p>
            </div>
          </div>

          {/* Especificações técnicas em destaque */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform active:scale-95">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">707m²</p>
              <p className="text-xs md:text-sm text-silver-light">Área Total</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform active:scale-95">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">350m²</p>
              <p className="text-xs md:text-sm text-silver-light">Área Útil</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform active:scale-95">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">4</p>
              <p className="text-xs md:text-sm text-silver-light">Suítes</p>
            </div>
            <div className="bg-primary text-white rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform border-2 border-accent-gold active:scale-95">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">2023</p>
              <p className="text-xs md:text-sm text-silver-light">✨ Novo</p>
            </div>
          </div>
          
          {/* CTA Intermediário */}
          <div className="mt-8 md:mt-12 bg-silver-light/30 rounded-xl p-6 md:p-8 text-center">
            <p className="text-primary font-semibold text-base md:text-lg mb-4">
              Interessado? Entre em contato agora mesmo!
            </p>
            <button
              onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-light text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition-all active:scale-95 w-full md:w-auto"
            >
              Quero Conhecer Este Imóvel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

