import { Metadata } from 'next'
import { getPropertyData } from '@/lib/getPropertyData'
import PropertyPage from '@/components/PropertyPage'

const slug = 'valencia'

export async function generateMetadata(): Promise<Metadata> {
  const data = getPropertyData(slug)
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: 'https://www.mhfahdimoveis.com.br/valencia',
      siteName: 'M.H.FAHD Imobiliária',
      images: [
        {
          url: data.meta.ogImage,
          width: 1200,
          height: 630,
          alt: data.hero.title,
        },
      ],
      type: 'website',
      locale: 'pt_BR',
    },
  }
}

export default function ValenciaPage() {
  const data = getPropertyData(slug)
  return <PropertyPage data={data} />
}

