'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'
import InputMask from 'react-input-mask'
import { 
  Home, Bed, Maximize, Waves, UtensilsCrossed, Shield,
  Sparkles, LayoutGrid, Check, Star, 
  Mail, Phone, MapPin, Instagram
} from 'lucide-react'
import { PropertyData } from '@/lib/getPropertyData'

// Mapeamento de ícones
const iconMap: any = {
  'bed': Bed,
  'maximize': Maximize,
  'home': Home,
  'waves': Waves,
  'utensils': UtensilsCrossed,
  'shield': Shield,
  'sparkles': Sparkles,
  'layout': LayoutGrid,
}

interface PropertyPageProps {
  data: PropertyData
}

export default function PropertyPage({ data }: PropertyPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) {
      setSubmitMessage('Por favor, preencha seu nome.')
      return
    }
    
    if (!formData.email.trim()) {
      setSubmitMessage('Por favor, preencha seu e-mail.')
      return
    }
    
    if (!formData.phone.trim()) {
      setSubmitMessage('Por favor, preencha seu telefone.')
      return
    }
    
    if (!formData.time) {
      setSubmitMessage('Por favor, selecione o melhor horário.')
      return
    }
    
    if (!formData.consent) {
      setSubmitMessage('Por favor, aceite os termos de uso de dados.')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const message = `*${data.contact.formTitle}*
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Melhor horário:* ${formData.time}`

      const whatsappURL = `https://wa.me/${data.contact.whatsapp}?text=${encodeURIComponent(message)}`
      
      const whatsappWindow = window.open(whatsappURL, '_blank')
      
      if (whatsappWindow) {
        setSubmitMessage('✅ Redirecionando para o WhatsApp...')
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            time: '',
            consent: false
          })
          setSubmitMessage('')
        }, 2000)
      } else {
        setSubmitMessage('⚠️ Por favor, permita pop-ups para abrir o WhatsApp.')
      }
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error)
      setSubmitMessage('❌ Erro ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen">
      {/* 1. HERO */}
      <section className="relative h-auto md:h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={data.hero.image}
              alt={data.hero.title}
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
          </div>
        </div>

        <div className="relative z-10 h-auto md:h-full flex flex-col">
          <header className="container-custom py-3 md:py-6">
            <div className="flex justify-between items-center px-4 md:px-0">
              <Image
                src="/images/logo 540 x 180.png"
                alt="M.H.FAHD Imobiliária"
                width={540}
                height={180}
                className="h-8 md:h-14 w-auto"
                priority
              />
            </div>
          </header>

          <div className="flex-1 flex items-center py-6 md:py-0">
            <div className="container-custom">
              <div className="max-w-4xl fade-in px-4 md:px-0">
                <div className="inline-flex items-center gap-2 bg-accent-gold text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-6">
                  <span className="text-xs md:text-sm font-bold">{data.hero.badge}</span>
                </div>
                
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-6 leading-tight">
                  {data.hero.title}
                </h1>
                <p className="text-base md:text-3xl font-bold text-white mb-3 md:mb-8">
                  {data.hero.location}
                </p>

                {/* Preço - Se existir */}
                {data.hero.price && (
                  <div className="bg-white/10 backdrop-blur-md border-2 border-accent-gold rounded-xl md:rounded-2xl p-3 md:p-6 mb-3 md:mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      {/* Valor de Venda */}
                      <div>
                        <p className="text-silver-light text-xs md:text-base mb-1 md:mb-2">{data.hero.price.type}</p>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white break-words">{data.hero.price.sale}</p>
                      </div>
                      {/* Condomínio/IPTU */}
                      <div className="border-t md:border-t-0 md:border-l border-white/20 pt-3 md:pt-0 md:pl-6">
                        <p className="text-silver-light text-xs md:text-base mb-1 md:mb-2">{data.hero.price.condominiumLabel || 'Condomínio'}</p>
                        <p className="text-xl md:text-3xl font-bold text-white break-words">{data.hero.price.condominium}</p>
                        <p className="text-silver-light text-xs md:text-sm mt-1">/mês</p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm md:text-xl lg:text-2xl text-silver-light mb-4 md:mb-10 leading-relaxed">
                  {data.hero.subtitle}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-4 md:mb-10">
                  {data.hero.capsules.map((capsule: any, index: number) => {
                    const Icon = iconMap[capsule.icon]
                    return (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-4 text-center hover:bg-white/20 transition-all">
                        {Icon && <Icon className="w-4 h-4 md:w-6 md:h-6 text-white mx-auto mb-1 md:mb-2" />}
                        <p className="text-white font-semibold text-xs md:text-sm">{capsule.label}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-8">
                  <button
                    onClick={scrollToForm}
                    className="w-full md:w-auto btn-primary text-sm md:text-lg group relative overflow-hidden py-3 md:py-4 px-6 md:px-8"
                  >
                    <span className="relative z-10">{data.hero.cta.primary}</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </button>
                </div>
                
                <p className="text-silver-light text-xs md:text-sm flex items-center justify-center md:justify-start gap-2 pb-6 md:pb-0">
                  <span className="text-green-400">●</span> Atendimento disponível • Resposta em minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Destaques do Imóvel
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
            {data.highlights.map((highlight: any, index: number) => {
              const Icon = iconMap[highlight.icon]
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in active:scale-95"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4 md:mb-6 flex justify-center">
                    <div className="bg-silver-light rounded-full p-3 md:p-4">
                      {Icon && <Icon className="w-12 h-12 text-primary" />}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 text-center">
                    {highlight.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. DESCRIPTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                {data.description.title}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none fade-in">
              <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                {data.description.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index} className={index === data.description.paragraphs.length - 1 ? 'font-semibold text-primary-light' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {data.description.specs.map((spec: any, index: number) => (
                <div 
                  key={index}
                  className={`bg-primary text-white rounded-lg p-4 md:p-6 text-center transform hover:scale-105 transition-transform active:scale-95 ${spec.highlight ? 'border-2 border-accent-gold' : ''}`}
                >
                  <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">{spec.value}</p>
                  <p className="text-xs md:text-sm text-silver-light">{spec.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 bg-silver-light/30 rounded-xl p-6 md:p-8 text-center">
              <p className="text-primary font-semibold text-base md:text-lg mb-4">
                Interessado? Entre em contato agora mesmo!
              </p>
              <button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary-light text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition-all active:scale-95 w-full md:w-auto"
              >
                Quero Conhecer Este Imóvel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {data.gallery.title}
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-silver-light text-base md:text-lg mb-3 md:mb-4">
              {data.gallery.subtitle}
            </p>
            <p className="text-accent-gold font-semibold text-sm md:text-base">
              {data.gallery.instruction}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] px-4">
            {data.gallery.images.map((image: any, index: number) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.span} active:opacity-80 transition-opacity`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-3xl md:text-4xl hover:text-silver-light bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                <Image
                  src={data.gallery.images[selectedImage].src}
                  alt={data.gallery.images[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {selectedImage + 1} / {data.gallery.images.length}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. LOCATION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.location.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {data.location.subtitle}
            </p>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              {data.location.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 px-4">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 fade-in">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                  Endereço:
                </h3>
                <p className="text-gray-700 text-base md:text-lg font-semibold whitespace-pre-line">
                  {data.location.address}
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {data.location.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm md:text-base">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src={data.location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AMENITIES */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.amenities.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              {data.amenities.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6 flex items-center gap-3">
                <div className="bg-primary rounded-full p-2">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                Comodidades do Imóvel
              </h3>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {data.amenities.property.map((amenity: string, index: number) => (
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

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6 flex items-center gap-3">
                <div className="bg-primary rounded-full p-2">
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                Comodidades do Condomínio
              </h3>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {data.amenities.condominium.map((amenity: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 md:p-3 hover:bg-silver-light/30 rounded-lg transition-colors active:bg-silver-light/50"
                  >
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 bg-primary/5 border-2 border-primary rounded-lg p-5 md:p-6">
                <h4 className="text-base md:text-lg font-bold text-primary mb-2 md:mb-3">
                  {data.amenities.condominiumHighlight.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {data.amenities.condominiumHighlight.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VIDEO TOUR */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.video.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 text-base md:text-lg">
              {data.video.subtitle}
            </p>
          </div>

          <div className="flex justify-center fade-in px-4">
            <div className="w-full max-w-[360px]">
              <iframe
                id={`panda-${data.video.videoId}`}
                src={data.video.embedUrl}
                style={{ border: 'none', aspectRatio: '9/16' }}
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                allowFullScreen={true}
                className="w-full h-auto rounded-xl shadow-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10 md:mb-16 fade-in px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.testimonials.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {data.testimonials.items.map((testimonial: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 fade-in hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex gap-1 mb-5 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 md:mb-6 italic">
                  "{testimonial.text}"
                </p>

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

      {/* 9. ABOUT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4">
            <div className="fade-in order-2 lg:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={data.about.image}
                  alt="M.H.FAHD Imobiliária"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="fade-in order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                {data.about.title}
              </h2>
              <div className="w-24 h-1 bg-primary mb-6 md:mb-8"></div>

              <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                {data.about.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index} className={index === data.about.paragraphs.length - 1 ? 'font-semibold text-primary-light' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6">
                {data.about.stats.map((stat: any, index: number) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CONTACT FORM */}
      <section id="formulario" className="py-12 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12 fade-in px-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {data.contact.title}
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-silver-light text-base md:text-lg mb-4">
                {data.contact.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 rounded-full">
                <span className="text-green-400 text-lg md:text-xl">✓</span>
                <span className="text-white font-semibold text-sm md:text-base">{data.contact.trustBadge}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-12 fade-in mx-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Telefone (WhatsApp) *
                  </label>
                  <InputMask
                    mask="(99) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  >
                    {/* @ts-ignore */}
                    {(inputProps: any) => (
                      <input
                        {...inputProps}
                        type="tel"
                        id="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="(00) 00000-0000"
                      />
                    )}
                  </InputMask>
                </div>

                <div>
                  <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                    Melhor horário para contato *
                  </label>
                  <select
                    id="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um horário</option>
                    <option value="Manhã (08h - 12h)">Manhã (08h - 12h)</option>
                    <option value="Tarde (12h - 18h)">Tarde (12h - 18h)</option>
                    <option value="Noite (18h - 20h)">Noite (18h - 20h)</option>
                    <option value="Qualquer horário">Qualquer horário</option>
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-gray-600 text-sm leading-relaxed">
                    Autorizo o uso dos meus dados para contato conforme a{' '}
                    <span className="text-primary font-semibold">Lei Geral de Proteção de Dados (LGPD)</span>.
                    Seus dados estão seguros e não serão compartilhados com terceiros.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 md:py-5 text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : data.contact.submitButton}
                </button>

                {submitMessage && (
                  <p className={`text-center font-semibold ${submitMessage.includes('✅') ? 'text-green-600' : submitMessage.includes('⚠️') ? 'text-yellow-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-dark text-white">
        <div className="container-custom py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4">
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

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Links Rápidos</h3>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">Início</a></li>
                <li><a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">Imóveis</a></li>
                <li><a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">Sobre Nós</a></li>
                <li><a href="#" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contato</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                  <a href="tel:+554198713444" className="text-silver-light hover:text-white transition-colors text-sm md:text-base active:text-accent-gold">(41) 98713-4444</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                  <a href="mailto:atendimento@mhfahdimoveis.com.br" className="text-silver-light hover:text-white transition-colors text-sm md:text-base break-all active:text-accent-gold">atendimento@mhfahdimoveis.com.br</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-silver-light flex-shrink-0 mt-1" />
                  <span className="text-silver-light text-sm md:text-base">Rua Francisco Ader, 106 - Escritório<br />Novo Mundo, Curitiba/PR</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Siga-nos no Instagram</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/m.h.fahd" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all active:bg-white/30">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
              <p className="text-silver-light mt-4 md:mt-6 text-sm">@m.h.fahd</p>
              <p className="text-silver-light mt-2 text-xs md:text-sm">Acompanhe nossos lançamentos exclusivos</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-custom py-5 md:py-6 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
              <p className="text-silver-light text-xs md:text-sm text-center md:text-left">
                © {currentYear} M.H.FAHD Imobiliária. Todos os direitos reservados.
              </p>
              <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#" className="text-silver-light hover:text-white transition-colors active:text-accent-gold">Política de Privacidade</a>
                <a href="#" className="text-silver-light hover:text-white transition-colors active:text-accent-gold">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

