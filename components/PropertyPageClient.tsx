'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'
import InputMask from 'react-input-mask'
import { 
  Home, Bed, Maximize, Waves, UtensilsCrossed, Shield,
  Sparkles, LayoutGrid, Check, Star, 
  Mail, Phone, MapPin, Instagram
} from 'lucide-react'

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

interface PropertyPageClientProps {
  data: any
}

export default function PropertyPageClient({ data }: PropertyPageClientProps) {
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

  // Verificação de segurança
  if (!data) {
    return <div>Carregando...</div>
  }

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
      const phoneNumber = data.contact.whatsapp
      const message = `*${data.contact.formTitle}*
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Melhor horário:* ${formData.time}`

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-auto md:h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <header className="py-3 md:py-6 px-4">
            <div className="container-custom">
              <Image
                src="/images/logo 540 x 180.png"
                alt="M.H.FAHD Imobiliária"
                width={180}
                height={60}
                className="h-8 md:h-12 w-auto"
                priority
              />
            </div>
          </header>

          {/* Main Content */}
          <div className="flex-1 flex items-center py-6 md:py-0">
            <div className="container-custom w-full">
              <div className="max-w-4xl fade-in px-4 md:px-0">
                {/* Badge */}
                <div className="inline-block bg-accent-gold/20 border border-accent-gold backdrop-blur-sm rounded-full py-1.5 md:py-2 px-4 md:px-6 mb-3 md:mb-6">
                  <span className="text-accent-gold font-semibold text-xs md:text-sm uppercase tracking-wide">
                    {data.hero.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight">
                  {data.hero.title}
                </h1>

                {/* Location */}
                <p className="text-base md:text-xl lg:text-2xl text-silver-light mb-3 md:mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  {data.hero.location}
                </p>

                {/* Subtitle */}
                <p className="text-sm md:text-xl lg:text-2xl text-silver-light mb-4 md:mb-10 leading-relaxed">
                  {data.hero.subtitle}
                </p>

                {/* Price Display */}
                {data.hero.price && (
                  <div className="bg-white/10 backdrop-blur-md border-2 border-accent-gold rounded-xl md:rounded-2xl p-3 md:p-6 mb-6 md:mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      {/* Valor de Venda/Locação */}
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

                {/* Capsules */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-4 md:mb-8">
                  {data.hero.capsules.map((capsule: any, index: number) => {
                    const Icon = iconMap[capsule.icon] || Home
                    return (
                      <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 md:p-3 flex items-center gap-2 hover:bg-white/20 transition-all">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" />
                        <span className="text-white text-xs md:text-sm font-medium truncate">{capsule.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full md:w-auto btn-primary text-sm md:text-lg group relative overflow-hidden py-3 md:py-4 px-6 md:px-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {data.hero.cta.primary}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                {/* Trust Signal */}
                <div className="mt-4 md:mt-6 pb-6 md:pb-0">
                  <div className="inline-flex items-center gap-2 text-silver-light text-xs md:text-sm">
                    <Check className="w-4 h-4 text-accent-gold" />
                    <span>Visita sem compromisso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10 md:mb-16 fade-in">
            {data.highlights.title || 'Destaques do Imóvel'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {(data.highlights || []).map((highlight: any, index: number) => {
              const Icon = iconMap[highlight.icon] || Sparkles
              return (
                <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 fade-in active:scale-95">
                  <div className="bg-primary/10 w-fit rounded-full p-3 md:p-4 mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">{highlight.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{highlight.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 md:mb-12 fade-in">
            {data.description.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-5 md:space-y-6 fade-in">
              {(data.description?.paragraphs || []).map((paragraph: string, index: number) => (
                <p key={index} className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="fade-in">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8">
                  Especificações Técnicas
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {(data.description?.specs || []).map((spec: any, index: number) => (
                    <div
                      key={index}
                      className={`p-4 md:p-6 rounded-xl ${
                        spec.highlight
                          ? 'bg-accent-gold text-white'
                          : 'bg-white text-primary'
                      } shadow-md`}
                    >
                      <p className="text-2xl md:text-3xl font-bold mb-2">{spec.value}</p>
                      <p className="text-xs md:text-sm opacity-90">{spec.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA intermediário */}
              <div className="mt-8 md:mt-12 bg-primary text-white p-6 md:p-8 rounded-2xl">
                <p className="text-base md:text-lg mb-4">
                  Interessado? Agende sua visita agora mesmo!
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-accent-gold text-primary font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 w-full md:w-auto"
                >
                  📅 Agendar Visita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-10 md:mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.gallery.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-2">{data.gallery.subtitle}</p>
            <p className="text-sm md:text-base text-gray-500">{data.gallery.instruction}</p>
          </div>

          {/* Grid Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {(data.gallery?.images || []).map((image: any, index: number) => (
              <div
                key={index}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span} active:opacity-80`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-3xl md:text-4xl w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-all"
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
                  quality={95}
                />
              </div>
              {/* Navigation indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {data.gallery.images.length}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10 md:mb-16 fade-in">
            {data.location.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {data.location.subtitle}
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                {data.location.description}
              </p>
              <div className="bg-gray-50 p-4 md:p-6 rounded-xl mb-6">
                <p className="text-gray-800 font-medium whitespace-pre-line">
                  {data.location.address}
                </p>
              </div>
              <ul className="space-y-3">
                {(data.location?.highlights || []).map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={data.location.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-10 md:mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              {data.amenities.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600">{data.amenities.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Property Amenities */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6">
                🏠 Do Imóvel
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {(data.amenities?.property || []).map((amenity: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-all active:bg-silver-light/50"
                  >
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Condominium Amenities */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg fade-in">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-5 md:mb-6">
                🏘️ Do Condomínio/Região
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {(data.amenities?.condominium || []).map((amenity: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-50 rounded-lg transition-all active:bg-silver-light/50"
                  >
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{amenity}</span>
                  </li>
                ))}
              </ul>

              {/* Security Highlight */}
              <div className="mt-6 md:mt-8 p-5 md:p-6 bg-primary/5 border-2 border-primary/20 rounded-xl">
                <p className="text-base md:text-lg font-bold text-primary mb-2">
                  {data.amenities.condominiumHighlight.title}
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  {data.amenities.condominiumHighlight.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tour */}
      {data.video && data.video.videoId && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 fade-in">
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
      )}

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-10 md:mb-16 fade-in">
            {data.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {(data.testimonials?.items || []).map((testimonial: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 fade-in"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl md:text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-primary text-base md:text-lg">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm md:text-base">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center px-4">
            {/* Image */}
            <div className="fade-in order-2 lg:order-1">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={data.about.image}
                  alt="M.H.FAHD Imobiliária"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  quality={90}
                />
              </div>
            </div>

            {/* Content */}
            <div className="fade-in order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
                {data.about.title}
              </h2>
              <div className="w-24 h-1 bg-accent-gold mb-6 md:mb-8"></div>

              <div className="space-y-5 md:space-y-6">
                {(data.about?.paragraphs || []).map((paragraph: string, index: number) => (
                  <p key={index} className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">
                {(data.about?.values || []).map((value: any, index: number) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-primary mb-1 md:mb-2">{value.value}</p>
                    <p className="text-xs md:text-sm text-gray-600">{value.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="formulario" className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {data.contact.title}
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
              <p className="text-silver-light text-base md:text-lg mb-4 px-4">
                {data.contact.subtitle}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 rounded-full">
                <span className="text-green-400 text-lg md:text-xl">✓</span>
                <span className="text-white font-semibold text-sm md:text-base">{data.contact.trustBadge}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
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

                {/* Email */}
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

                {/* Telefone */}
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

                {/* Melhor horário */}
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

                {/* Checkbox LGPD */}
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

                {/* Botão */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 md:py-5 text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : data.contact.submitButton}
                </button>

                {/* Mensagem de feedback */}
                {submitMessage && (
                  <p className={`text-center font-semibold ${submitMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container-custom py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
            {/* Logo and description */}
            <div>
              <Image
                src="/images/logo 480 x 150.png"
                alt="M.H.FAHD Imobiliária"
                width={150}
                height={50}
                className="h-10 md:h-12 w-auto mb-4 md:mb-6"
              />
              <p className="text-silver-light text-sm md:text-base leading-relaxed">
                Transformando sonhos em realidade desde 2009. Imóveis de alto padrão em Curitiba.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Links Úteis</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="#formulario" className="text-silver-light hover:text-accent-gold transition-colors text-sm md:text-base active:text-accent-gold">
                    Agendar Visita
                  </a>
                </li>
                <li>
                  <a href="tel:+5541987134444" className="text-silver-light hover:text-accent-gold transition-colors text-sm md:text-base active:text-accent-gold">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contato</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent-gold flex-shrink-0" />
                  <a href="tel:+5541987134444" className="text-silver-light hover:text-accent-gold transition-colors text-sm md:text-base">
                    (41) 98713-4444
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <a href="mailto:atendimento@mhfahdimoveis.com.br" className="text-silver-light hover:text-accent-gold transition-colors break-all text-sm md:text-base">
                    atendimento@mhfahdimoveis.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <span className="text-silver-light text-sm md:text-base">
                    Rua Francisco Ader, 106 - Novo Mundo, Curitiba/PR
                  </span>
                </li>
              </ul>

              {/* Social */}
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.instagram.com/m.h.fahd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-full hover:bg-accent-gold transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 group-hover:text-primary" />
                </a>
              </div>
              <p className="text-silver-light text-xs md:text-sm mt-4 md:mt-6">Siga-nos no Instagram</p>
              <p className="text-silver-light/80 text-xs mt-2">@m.h.fahd</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-5 md:py-6">
          <div className="container-custom px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs md:text-sm text-silver-light">
              <p>© 2024 M.H.FAHD Imobiliária. Todos os direitos reservados.</p>
              <p>CRECI: [Número do CRECI]</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

