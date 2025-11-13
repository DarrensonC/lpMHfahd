'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: '/images/gallery/01.png',
      alt: 'Fachada da casa',
      span: 'md:col-span-2 md:row-span-2' // Imagem grande
    },
    {
      src: '/images/gallery/02.png',
      alt: 'Sala de estar',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/03.png',
      alt: 'Cozinha gourmet',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/04.png',
      alt: 'Suíte master',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/06.png',
      alt: 'Banheiro',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/07.png',
      alt: 'Área gourmet',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      src: '/images/gallery/08.png',
      alt: 'Piscina',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/09.png',
      alt: 'Mezanino',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/10.png',
      alt: 'Closet',
      span: 'md:col-span-2 md:row-span-1'
    },
    {
      src: '/images/gallery/11.png',
      alt: 'Vista externa',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/12.png',
      alt: 'Área de lazer',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      src: '/images/gallery/13.png',
      alt: 'Varanda',
      span: 'md:col-span-1 md:row-span-1'
    }
  ]

  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16 fade-in px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Galeria de Fotos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-silver-light text-base md:text-lg mb-3 md:mb-4">
            Conheça cada detalhe deste imóvel excepcional
          </p>
          <p className="text-accent-gold font-semibold text-sm md:text-base">
            📸 Toque nas fotos para ampliar
          </p>
        </div>

        {/* Grid estilo KAA - Layout Premium - Otimizado para Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] px-4">
          {images.map((image, index) => (
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

        {/* Modal de Imagem (Lightbox) - Otimizado para Mobile */}
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
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
            {/* Indicador de Navegação Mobile */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

