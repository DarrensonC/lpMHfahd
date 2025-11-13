import { Sparkles, Waves, UtensilsCrossed, LayoutGrid, Bed, Home } from 'lucide-react'

export default function Highlights() {
  const highlights = [
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: 'Acabamentos de alto padrão',
      description: 'Materiais nobres e acabamentos premium em todos os ambientes'
    },
    {
      icon: <Waves className="w-12 h-12 text-primary" />,
      title: 'Piscina privativa',
      description: 'Área de lazer completa com piscina aquecida'
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-primary" />,
      title: 'Área gourmet',
      description: 'Espaço completo para receber amigos e família'
    },
    {
      icon: <LayoutGrid className="w-12 h-12 text-primary" />,
      title: 'Mezanino',
      description: 'Ambiente sofisticado e versátil'
    },
    {
      icon: <Bed className="w-12 h-12 text-primary" />,
      title: '4 suítes amplas',
      description: 'Privacidade e conforto para toda a família'
    },
    {
      icon: <Home className="w-12 h-12 text-primary" />,
      title: 'Arquitetura moderna',
      description: 'Design contemporâneo e elegante'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Destaques do Imóvel
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in active:scale-95"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 md:mb-6 flex justify-center">
                <div className="bg-silver-light rounded-full p-3 md:p-4">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 text-center">
                {highlight.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

