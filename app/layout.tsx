import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casa de Alto Padrão - Condomínio Valencia | M.H.FAHD Imobiliária',
  description: 'Casa de alto padrão com 4 suítes, 707m² total, piscina e área gourmet no Condomínio Valencia, Campo Comprido, Curitiba. Exclusividade, segurança e design contemporâneo.',
  keywords: 'casa alto padrão curitiba, imóvel de luxo curitiba, condomínio valencia, campo comprido, casa com piscina, 4 suítes curitiba, mhfahd imobiliária',
  authors: [{ name: 'M.H.FAHD Imobiliária' }],
  openGraph: {
    title: 'Casa de Alto Padrão - Condomínio Valencia | M.H.FAHD',
    description: 'Exclusividade, segurança e design contemporâneo em uma das regiões mais valorizadas de Curitiba.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo 540 x 180.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo 540 x 180.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

