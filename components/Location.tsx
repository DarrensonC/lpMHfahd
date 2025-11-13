export default function Location() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Localização
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações de Localização */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Campo Comprido - Curitiba/PR
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Localizada no coração do Campo Comprido, próximo a mercados, escolas, restaurantes, parques e com fácil acesso às principais vias da cidade.
            </p>

            <div className="bg-silver-light rounded-lg p-6 mb-6">
              <p className="text-primary font-semibold text-lg">
                📍 Endereço:
              </p>
              <p className="text-gray-700 text-lg mt-2">
                Rua Íris Antônio Campos, 233<br />
                Campo Comprido – Curitiba/PR
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700">Fácil acesso à BR-277 e Rodovia do Xisto</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700">Próximo a shoppings, supermercados e academias</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700">Região valorizada e em constante crescimento</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </div>
                <p className="text-gray-700">Excelente infraestrutura urbana</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="fade-in">
            <div className="rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              {/* SUBSTITUA PELO SEU EMBED DO GOOGLE MAPS */}
              {/* Para obter o embed: Google Maps > Pesquise o endereço > Compartilhar > Incorporar mapa */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.7283!2d-49.3166!3d-25.4658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzU3LjEiUyA0OcKwMTgnNTkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do imóvel"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

