import { Check } from 'lucide-react'

export default function Amenities() {
  const propertyAmenities = [
    'Ar-Condicionado',
    'Sala',
    'Alarme',
    'Laje Técnica',
    'Cozinha',
    'Sala de Jantar',
    'Closet',
    'Quarto de Serviço',
    'Aquecimento a Gás',
    'Aceita Pet',
    'Gourmet',
    'Churrasqueira',
    'Hidromassagem',
    'Armário no Escritório',
    'Armário Suíte',
    'Armário no Quarto',
    'Despensa',
    'Sala de estar',
    'Armário na Área de Serviço',
    'Salão Vídeo Cinema',
    'Armário Banheiro',
    'Porcelanato',
    'Adega',
    'Decorado',
    'Mezanino',
    'Piscina',
    'Armário Dormitório Empregada',
    'Copa',
    'Sacada',
    'Lavanderia',
    'Armário Cozinha',
    'Varanda'
  ]

  const condominiumAmenities = [
    'Portão Eletrônico',
    'Guarita com Segurança',
    'Áreas de convivência',
    'Ruas internas pavimentadas'
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Comodidades
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg">
            Tudo que você precisa para viver com conforto e elegância
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 px-4">
          {/* Comodidades do Imóvel */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6 flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              Comodidades do Imóvel
            </h3>
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              {propertyAmenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 md:p-3 hover:bg-silver-light/30 rounded-lg transition-colors active:bg-silver-light/50"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comodidades do Condomínio */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6 flex items-center gap-3">
              <div className="bg-primary rounded-full p-2">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              Comodidades do Condomínio
            </h3>
            <div className="grid grid-cols-1 gap-2 md:gap-3">
              {condominiumAmenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-2 md:p-3 hover:bg-silver-light/30 rounded-lg transition-colors active:bg-silver-light/50"
                >
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Destaque de Segurança */}
            <div className="mt-6 md:mt-8 bg-primary/5 border-2 border-primary rounded-lg p-5 md:p-6">
              <h4 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3">
                🛡️ Condomínio Residencial Valencia
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Referência em segurança e infraestrutura, o Condomínio Valencia oferece o equilíbrio perfeito entre privacidade, conforto e tranquilidade para sua família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

