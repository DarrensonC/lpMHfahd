'use client'

export default function VideoTour() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Vídeo Tour
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Assista ao vídeo e conheça cada detalhe
          </p>
        </div>

        <div className="flex justify-center fade-in px-4">
          {/* Vídeo Vertical - Panda Video */}
          <div className="w-full max-w-[360px]">
            <iframe
              id="panda-42c00b6b-8035-47fa-8f09-c9b6afdbce6e"
              src="https://player-vz-e29bdd42-f4e.tv.pandavideo.com.br/embed/?v=42c00b6b-8035-47fa-8f09-c9b6afdbce6e"
              style={{ border: 'none', aspectRatio: '9/16' }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen={true}
              className="w-full h-auto rounded-xl shadow-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

