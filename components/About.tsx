export default function About() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          {/* Imagem */}
          <div className="fade-in order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/800 por 500.png"
                alt="M.H.FAHD Imobiliária"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="fade-in order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Sobre a M.H.FAHD
            </h2>
            <div className="w-24 h-1 bg-primary mb-6 md:mb-8"></div>

            <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                A M.H.FAHD Imobiliária nasceu em 2009, fruto do sonho de uma família que iniciou no ramo da construção com o propósito de criar espaços que transformam vidas.
              </p>

              <p>
                Com mais de uma década de experiência no setor, expandimos nossa atuação para a compra, venda e locação de imóveis residenciais e comerciais, sempre mantendo o compromisso com a qualidade, transparência e atendimento personalizado.
              </p>

              <p>
                Hoje, somos uma imobiliária especializada que une tradição e inovação para oferecer soluções completas no mercado imobiliário.
              </p>

              <p className="font-semibold text-primary-light">
                Se você procura um imóvel para morar, investir ou alugar, pode contar com a M.H.FAHD para encontrar a melhor oportunidade — com segurança, confiança e o cuidado de quem entende do assunto.
              </p>
            </div>

            {/* Valores em destaque */}
            <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">15+</p>
                <p className="text-gray-600 text-xs md:text-sm">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">500+</p>
                <p className="text-gray-600 text-xs md:text-sm">Imóveis Vendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">100%</p>
                <p className="text-gray-600 text-xs md:text-sm">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

