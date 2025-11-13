'use client'

import { useState, FormEvent } from 'react'
import InputMask from 'react-input-mask'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Validações
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
      // Envia os dados diretamente para o WhatsApp da M.H.FAHD
      const phoneNumber = '5541987134444' // Formato correto com código do país + DDD + número
      const message = `*Nova Solicitação de Visita - Casa Valencia*
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Melhor horário:* ${formData.time}`

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      
      // Abre o WhatsApp
      const whatsappWindow = window.open(whatsappURL, '_blank')
      
      if (whatsappWindow) {
        setSubmitMessage('✅ Redirecionando para o WhatsApp...')
        // Limpa o formulário após 2 segundos
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
    <section id="formulario" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Agende Sua Visita
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-silver-light text-base md:text-lg mb-4 px-4">
              Preencha o formulário e nossa equipe entrará em contato
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 rounded-full">
              <span className="text-green-400 text-lg md:text-xl">✓</span>
              <span className="text-white font-semibold text-sm md:text-base">Atendimento Rápido e Personalizado</span>
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
                {isSubmitting ? 'Enviando...' : '🏠 Quero Agendar Minha Visita'}
              </button>

              {/* Mensagem de feedback */}
              {submitMessage && (
                <p className={`text-center font-semibold ${submitMessage.includes('Obrigado') ? 'text-green-600' : 'text-red-600'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

