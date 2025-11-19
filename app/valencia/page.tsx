import { Metadata } from 'next'
import Script from 'next/script'
import { getPropertyData } from '@/lib/getPropertyData'
import PropertyPage from '@/components/PropertyPage'

const slug = 'valencia'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPropertyData(slug)
  
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

export default async function ValenciaPage() {
  const data = await getPropertyData(slug)
  return (
    <>
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1145516611090451');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1145516611090451&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}
      
      <PropertyPage data={data} />
    </>
  )
}

