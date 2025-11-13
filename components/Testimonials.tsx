import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      image: '',
      text: 'A M.H.FAHD me ajudou a encontrar a casa dos meus sonhos. Profissionalismo e atenção em cada detalhe.',
      role: 'Cliente'
    },
    {
      name: 'João Santos',
      image: '',
      text: 'Equipe excepcional! Desde a primeira visita até a entrega das chaves, tudo perfeito. Recomendo!',
      role: 'Cliente'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-5 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Depoimento */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 md:mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Cliente */}
              <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 border-t border-gray-200">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl md:text-2xl font-bold flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary text-base md:text-lg">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm md:text-base">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

